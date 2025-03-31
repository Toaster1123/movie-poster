'use server';

import { OrderStatus, Prisma } from '@prisma/client';
import { hashSync } from 'bcryptjs';
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
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl,
      }),
    );
    return paymentUrl;
  } catch (error) {
    console.error('[CreateOrder] Server error', error);
  }
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error('User not found');
    }
    if (body.email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: body.email as string,
          NOT: { id: currentUser.id },
        },
      });
      if (existingUser) {
        throw new Error('Этот email уже используется другим пользователем');
      }
    }
    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
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
        throw new Error('Почта не подтверждена');
      }

      throw new Error('Пользователь уже существует');
    }

    const createdUser = await prisma.user.create({
      data: {
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
        expiresAt: new Date(Date.now() + 300000),
      },
    });

    await sendEmail(
      createdUser.email,
      'Проекторий / 📝 Подтверждение регистрации',
      VerificationUserTemplate({
        code,
      }),
    );
  } catch (err) {
    console.error('Error [CREATE_USER]', err);
    throw err;
  }
}
