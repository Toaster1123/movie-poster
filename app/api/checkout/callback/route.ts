import { NextRequest, NextResponse } from 'next/server';
import { TOrderItem } from '../../../../@types';
import { prisma } from '../../../../prisma/prisma-client';
import { sendEmail } from '../../../../shared/lib';
import { OrderSuccesTemplate } from '../../../../shared/components/shared';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('order_id');

    const order = await prisma.order.findFirst({
      where: {
        id: Number(orderId),
      },
      include: {
        movie: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!order || !order.items) {
      return NextResponse.json({ error: 'Order not found' });
    }

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: { status: 'SUCCESED' },
    });
    const items = JSON.parse(order?.items as string) as TOrderItem[];
    const hallOccupiedData = items.map((item) => ({
      email: order.email,
      row: item.row,
      col: item.col,
      hallSchemaId: item.hall,
    }));

    await prisma.hallOccupied.createMany({
      data: hallOccupiedData,
    });

    await sendEmail(
      'arteeer.4er@gmail.com',
      'Проеторий / ваш заказ успешно оформлен! 🎉',
      OrderSuccesTemplate({
        orderId: order.id,
        items,
        totalAmount: order.totalAmount,
        name: order.movie.name,
      }),
    );
    return NextResponse.redirect(new URL('/?paid', req.url));
  } catch (error) {
    console.error('[Checkout Callback] Error: ', error);
    return NextResponse.json({ error: 'Server error' });
  }
}
