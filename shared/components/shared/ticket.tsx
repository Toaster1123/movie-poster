import React from 'react';

interface Props {
  price: number;
  hall: number;
  time: string;
}

export const Ticket: React.FC<Props> = ({ price, hall, time }) => {
  return (
    <div
      // onClick={() => {
      //    setOpened(true);
      //    setCanvasData({
      //      title: title,
      //      time: item.time,
      //      dimension: selectDimension(item.time, item.age),
      //      age: item.age,
      //      hall: item.hall,
      //      date: getForwardData(active),
      //      price: price(item.time),
      //    });
      // }}
      className="cursor-pointer  w-[70.2px] ">
      <p className="text-white py-1 px-3 bg-lime-600 font-black text-lg hover:bg-lime-700">
        {time}
      </p>
      <div className="flex text-sm justify-around border-[1px] bg-white border-lime-600">
        <p>2D</p>
        <p>{price}₽</p>
      </div>
      <p className="text-center pt-1 ">Зал {hall}</p>
    </div>
  );
};
