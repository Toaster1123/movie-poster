import axios from 'axios';
import { PaymentData } from '../../@types';

interface Props {
  description: string;
  orderId: number;
  amount: number;
  email: string;
}

export async function createPayment(details: Props) {
  try {
    const { data } = await axios.post<PaymentData>(
      'https://api.yookassa.ru/v3/payments',
      {
        amount: {
          value: details.amount,
          currency: 'RUB',
        },
        capture: true,
        payment_method_data: {
          type: 'bank_card',
        },
        description: details.description,
        metadata: {
          order_id: details.orderId,
        },
        confirmation: {
          type: 'redirect',
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_URL}/checkout/callback?order_id=${details.orderId}`,
        },
        receipt: {
          items: [
            {
              description: details.description,
              quantity: 1,
              amount: {
                value: details.amount,
                currency: 'RUB',
              },
              vat_code: 1,
            },
          ],
          customer: {
            email: details.email,
          },
        },
      },
      {
        auth: {
          username: process.env.YOOMONEY_STORE_ID as string,
          password: process.env.YOOMONEY_API_KEY as string,
        },
        headers: {
          'Content-Type': 'application/json',
          'idempotence-key': Math.random().toString(36).substring(7),
        },
      },
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
