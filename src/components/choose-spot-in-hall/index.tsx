'use client';
import { HallPopup } from '@/store/hall-popup';
import { X } from 'lucide-react';
import React from 'react';
import Canvas from './canvas';
import DrawTickets from './draw-tickets';

export default function ChooseSpotPopup() {
  const { opened, setOpened } = HallPopup((state) => state);

  const ref = React.useRef(null);
  return (
    <div
      className={`w-full h-full flex flex-col  justify-center items-center fixed top-0 left-0  ${
        opened ? 'bg-[#00000084] opacity-100 visible' : 'opacity-0 invisible'
      } `}>
      <div ref={ref} className="bg-white w-full max-w-[960px] mx-10">
        <div className="w-full border-b-2 flex flex-col items-center text-center">
          <div className="flex items-center w-full ">
            <div className=" flex-grow relative  left-[23px] flex-shrink-0">
              <div>Название</div>
              <div className="text-gray-600 text-sm">12 декабря, Кинотеатр Проекторий</div>
            </div>
            <div
              onClick={() => {
                setOpened(false);
              }}>
              <X className="cursor-pointer  mx-3 " size={23} strokeWidth={2.5} />
            </div>
          </div>
          <div className="w-fit mt-3">
            <div className="bg-green-700 mb-1 rounded-2xl py-1 text-center px-3 text-white">
              <b>20:40</b>
            </div>
            <div className="text-center text-sm text-gray-600">
              <p>400₽</p>
            </div>
          </div>
        </div>
        <div className="border-b-2">
          <Canvas />
        </div>
        <DrawTickets price={400} />
      </div>
    </div>
  );
}
