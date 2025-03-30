'use server';

import { OrderStatus, Prisma } from '@prisma/client';
import { hashSync } from 'bcryptjs';
import { cookies } from 'next/headers';
import { getUserSession, sendEmail } from '../shared/lib';
import { prisma } from '../prisma/prisma-client';
import { VerificationUserTemplate } from '../shared/components/shared';

// export async function createOrder(data: CheckoutFormValues) {
//   try {
//     const cookieStore = cookies();
//     const cartToken = (await cookieStore).get('cartToken')?.value;

//     if (!cartToken) {
//       throw new Error('Cart token not found');
//     }

//     const userCart = await prisma.cart.findFirst({
//       include: {
//         user: true,
//         items: {
//           include: {
//             ingredients: true,
//             productItem: {
//               include: {
//                 product: true,
//               },
//             },
//           },
//         },
//       },
//       where: {
//         token: cartToken,
//       },
//     });

//     if (!userCart) {
//       throw new Error('Cart not found');
//     }
//     if (userCart?.totalAmount === 0) {
//       throw new Error('Cart is empty');
//     }

//     const order = await prisma.order.create({
//       data: {
//         token: cartToken,
//         fullName: data.firstName + ' ' + data.lastName,
//         email: data.email,
//         phone: data.phone,
//         address: data.address,
//         comment: data.comment,
//         totalAmount: userCart.totalAmount,
//         status: OrderStatus.PENDING,
//         items: JSON.stringify(userCart.items),
//       },
//     });

//     await prisma.cart.update({
//       where: {
//         id: userCart.id,
//       },
//       data: {
//         totalAmount: 0,
//       },
//     });

//     await prisma.cartItem.deleteMany({
//       where: {
//         cartId: userCart.id,
//       },
//     });

//     const paymentData = await createPayment({
//       amount: order.totalAmount + Math.floor(order.totalAmount * 0.15),
//       orderId: order.id,
//       description: 'Оплата заказа № ' + order.id,
//       email: order.email,
//     });

//     if (!paymentData) {
//       throw new Error('Payment data not found');
//     }

//     await prisma.order.update({
//       where: {
//         id: order.id,
//       },
//       data: {
//         paymentId: paymentData.id,
//       },
//     });

//     const paymentUrl = paymentData.confirmation.confirmation_url;

//     await sendEmail(
//       'arteeer.4er@gmail.com',
//       'Feal pizza / оплатите заказ ' + order.id,
//       PayOrderTemplate({
//         orderId: order.id,
//         totalAmount: order.totalAmount,
//         paymentUrl,
//       }),
//     );
//     return paymentUrl;
//   } catch (error) {
//     console.error('[CreateOrder] Server error', error);
//   }
// }

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
