'use server';

import { OrderStatus, Prisma } from '@prisma/client';
import { compare, hashSync } from 'bcryptjs';
import { createPayment, getUserSession, sendEmail } from '../shared/lib';
import { prisma } from '../prisma/prisma-client';
import { PayOrderTemplate, VerificationUserTemplate } from '../shared/components/shared';
import { TOrderData } from '../@types';

export async function createOrder(body: TOrderData) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }

    const order = await prisma.order.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: body.email,
        userId: user.id,
        movieId: body.movieId,
        totalAmount: body.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(body.items),
      },
    });

    const paymentData = await createPayment({
      amount: order.totalAmount,
      orderId: order.id,
      description: 'Оплата заказа № ' + order.id,
      email: order.email,
    });

    if (!paymentData) {
      throw new Error('Payment data not found');
    }

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: paymentData.id,
      },
    });

    const paymentUrl = paymentData.confirmation.confirmation_url;

    await sendEmail(
      'arteeer.4er@gmail.com',
      'Проекторий / оплатите покупку ' + order.id,
      Promise.resolve(
        PayOrderTemplate({
          orderId: order.id,
          totalAmount: order.totalAmount,
          paymentUrl,
        }),
      ),
    );
    return paymentUrl;
  } catch (error) {
    console.error('[CreateOrder] Server error', error);
  }
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    if (!body.email) {
      return { success: false, message: 'Укажите почту' };
    }

    const currentUser = await getUserSession();
    if (!currentUser) {
      return { success: false, message: 'Пользователь не найден' };
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        email: body.email as string,
        NOT: { id: currentUser.id },
      },
    });

    if (existingUser) {
      return { success: false, message: 'Этот email уже используется другим пользователем' };
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    if (!findUser) {
      return { success: false, message: 'Пользователь не найден' };
    }

    if (body.password && typeof body.password === 'string') {
      const isSamePassword = await compare(body.password, findUser.password || '');
      if (isSamePassword) {
        return { success: false, message: 'Вы не поменяли пароль' };
      }
    }

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser.password,
      },
    });

    return { success: true, message: 'Пользователь успешно обновлён' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Ошибка при обновлении данных пользователя' };
  }
}

export async function createVerificationCode(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error('Такого пользователя не существует');
  }
  const existCode = await prisma.verificationCode.findFirst({
    where: {
      userId: user.id,
    },
  });
  if (existCode) {
    await prisma.verificationCode.deleteMany({
      where: {
        userId: user.id,
      },
    });
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  await prisma.verificationCode.create({
    data: {
      code: hashSync(code, 4),
      userId: user.id,
      expiresAt: new Date(Date.now() + 300000),
    },
  });

  await sendEmail(
    'arteeer.4er@gmail.com',
    'Проекторий / 📝 Подтверждение регистрации',
    Promise.resolve(
      VerificationUserTemplate({
        code,
        userId: user.id,
      }),
    ),
  );
}

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        const isPasswordValid = await compare(body.password, user.password);
        if (isPasswordValid) {
          return { success: false, message: 'На вашу почту уже был отправлен код' };
        } else {
          return { success: false, message: 'Укажите вверный пароль для верификации' };
        }
      }
      return { success: false, message: 'Пользователь уже существует' };
    }

    const createdUser = await prisma.user.create({
      data: {
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    createVerificationCode(createdUser.email);
    return { success: true, message: 'Код регистрации отправлен на вашу почту📝' };
  } catch (err) {
    const error = err as Error;
    return { success: false, message: error };
  }
}

export async function verifyEmail(body: { mail: string; verificationCode: string }) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.mail,
      },
      include: {
        verificationCode: true,
      },
    });

    if (!user) {
      return { success: false, message: 'Такой пользователь не найден' };
    }

    if (!user.verificationCode) {
      return { success: false, message: 'Вы уже ввели код подтвержения' };
    }

    const isCodeValid = await compare(body.verificationCode, user.verificationCode.code);

    if (!isCodeValid) {
      return { success: false, message: 'Неверный код' };
    }

    await prisma.user.update({
      where: {
        id: user.verificationCode.userId,
      },
      data: {
        verified: new Date(),
      },
    });

    await prisma.verificationCode.delete({
      where: {
        id: user.verificationCode.id,
      },
    });
    return { success: true, message: 'Почта успешно подтверждена' };
  } catch (error) {
    const err = error as Error;
    return { success: false, message: err.message };
  }
}
