import React from 'react';
import { TOrderItem } from '../../../../@types';

interface Props {
  orderId: number;
  items: TOrderItem[];
  totalAmount: number;
  name: string;
}

export const OrderSuccesTemplate: React.FC<Props> = ({ orderId, items, totalAmount, name }) => {
  return (
    <div>
      <h1>Спасибо за покупку! 🎉</h1>
      <p>
        Ваш заказ № {orderId} оплачен. Список билетов на фильм <b>{name}</b>:
      </p>
      <hr />
      <h4>Зал № {items[0].hall}</h4>
      <ul>
        {items.map((item, id) => (
          <li key={id} className="list-none">
            Ряд {item.row} место {item.col}, время {item.time} = {item.price}₽
          </li>
        ))}
      </ul>
      <hr />
      <h3>Итого: {totalAmount} ₽ </h3>
    </div>
  );
};
