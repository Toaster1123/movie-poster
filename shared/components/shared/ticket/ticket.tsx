'use client';
import React from 'react';

interface Props {
  price: number;
  hall: number;
  time: string;
  onClick: () => void;
}

export const Ticket: React.FC<Props> = ({ price, hall, time, onClick }) => {
  return (
    <div onClick={onClick} className="max-sm:w-[64px] cursor-pointer text-center w-[70px] ">
      <p className="max-sm:text-base text-white py-1 bg-lime-600 font-black text-lg hover:bg-lime-700">
        {time}
      </p>
      <div className="max-sm:text-xs gap-1 py-2 flex text-sm justify-center border-[1px] bg-white border-lime-600">
        <span>2D</span>
        <span>{price}₽</span>
      </div>
      <p className="max-sm:text-sm text-center pt-1">Зал {hall}</p>
    </div>
  );
};
