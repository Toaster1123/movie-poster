import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  price: number;
  hall: number;
  className?: string;
}

export const Ticket: React.FC<Props> = ({ price, hall, className }) => {
  return (
    <div
      onClick={() => {
        //  setOpened(true);
        //  setCanvasData({
        //    title: title,
        //    time: item.time,
        //    dimension: selectDimension(item.time, item.age),
        //    age: item.age,
        //    hall: item.hall,
        //    date: getForwardData(active),
        //    price: price(item.time),
        //  });
      }}
      className={cn('cursor-pointer py-3 h-[118px] w-[70.2px] ', className)}>
      <p className="text-white py-1 px-3 bg-lime-600 font-black text-lg hover:bg-lime-700"></p>
      <div className="flex text-sm justify-around border-[1px] border-lime-600">
        <p>2D</p>
        <p>{price}₽</p>
      </div>
      <p className="text-center pt-1 mb-2">Зал {hall}</p>
    </div>
  );
};
