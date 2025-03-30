import React from 'react';

interface Props {
  orderId: number;
  items: any;
  totalAmount: number;
}

export const OrderSuccesTemplate: React.FC<Props> = ({ orderId, items, totalAmount }) => {
  return (
    <div>
      <h1>Спасибо за покупку! 🎉</h1>
      <p>Ваш заказ № {orderId} оплачен. Список товаров:</p>
      <hr />
      <ul>
        {/* {items.map((item) => (
          <li key={item.id}>
            {item.productItem.product.name} | {item.productItem.price} ₽ x {item.quantity} шт. ={' '}
            {item.productItem.price * item.quantity} ₽
          </li>
        ))} */}
      </ul>
      <hr />

      <h3>Итого: {totalAmount} ₽ </h3>
      <p>(с учетом цены доставки и налогов.)</p>
    </div>
  );
};
