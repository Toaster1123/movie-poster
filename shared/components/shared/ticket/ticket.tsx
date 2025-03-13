import React from 'react';

interface Props {
  price: number;
  hall: number;
  time: string;
}

export const Ticket: React.FC<Props> = ({ price, hall, time }) => {
  return (
    <div className="cursor-pointer text-center w-[70px] ">
      <p className="text-white py-1 bg-lime-600 font-black text-lg hover:bg-lime-700">{time}</p>
      <div className="flex text-sm justify-around border-[1px] bg-white border-lime-600">
        <p>2D</p>
        <p>{price}₽</p>
      </div>
      <p className="text-center pt-1 ">Зал {hall}</p>
    </div>
  );
};
