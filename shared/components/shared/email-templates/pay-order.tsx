import React from 'react';

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({ orderId, totalAmount, paymentUrl }) => {
  return (
    <div>
      <h1>Покупка № {orderId}</h1>
      <p>
        Оплатите билеты на сумму <b> {totalAmount} ₽</b>. Перейдите по
        <a href={paymentUrl}>этой ссылке</a> для оплаты билетов.
      </p>
    </div>
  );
};
