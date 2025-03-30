import React from 'react';
import { PopupHeaderItem } from '../../../popup-header-item';

interface Props {
  time: string;
  age: number | null;
  price: number;
  hall: number;
}

export const PopupTopData: React.FC<Props> = ({ time, age, price, hall }) => {
  return (
    <div className="mt-3 flex mb-3 gap-2 items-center">
      <div className="bg-lime-600 rounded-2xl py-1 text-center px-3 text-white">
        <b>{time}</b>
      </div>
      <div className="flex items-center text-center text-[13px] gap-2 justify-around text-gray-600 ">
        <p>2D</p>
        <PopupHeaderItem data={age} title="+" />
        <PopupHeaderItem data={price} title="₽" />
        <PopupHeaderItem data={hall} title=" зал" />
      </div>
    </div>
  );
};
