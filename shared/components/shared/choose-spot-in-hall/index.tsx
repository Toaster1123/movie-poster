'use client';
import { X } from 'lucide-react';
import { useClickAway } from 'react-use';
import React, { useState } from 'react';

import Canvas from './canvas';
import DrawTickets from './draw-tickets';
import axios from 'axios';
import { CanvasData } from '../../../store/canvas-data';
import { ChangeUserTickets } from '../../../store/user-tickets';
import { FetchHalls, SpotsArrayType } from '../../../../@types/canvas-types';

export default function ChooseSpotPopup() {
  const { canvasData } = CanvasData((state) => state);
  const [opened, setOpened] = useState(false);
  const { setClicketSits } = ChangeUserTickets((state) => state);

  const [spotsArray, setSpotsArray] = React.useState<SpotsArrayType>([]);

  React.useEffect(() => {
    const fetchHall = async (id: number) => {
      try {
        const hallID = id <= 3 ? 1 : 2;
        const { data } = await axios.get<FetchHalls>(
          'https://d1258192d0a72ca0.mokky.dev/movie-hals/' + hallID,
        );
        setSpotsArray(data.hall);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHall(canvasData.hall);
  }, [canvasData.hall]);

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!opened) {
      setClicketSits([]);
    }
  }, [opened]);

  React.useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpened(false);
      }
    });
  }, []);

  useClickAway(ref, () => {
    setOpened(false);
  });
  return (
    <div
      className={`w-full h-full flex flex-col  justify-center items-center fixed top-0 left-0  ${
        opened ? 'bg-[#00000084] opacity-100 visible' : 'opacity-0 invisible'
      } `}>
      <div ref={ref} className="bg-white w-full max-w-[960px] mx-10">
        <div className="w-full border-b-2 flex flex-col items-center text-center">
          <div className="flex items-center relative w-full ">
            <div className=" flex-grow  flex-shrink-0">
              <div>{canvasData.title}</div>
              <div className="text-gray-600 text-sm">{canvasData.date}, Кинотеатр Проекторий</div>
            </div>
            <div
              onClick={() => {
                setOpened(false);
              }}
              className="cursor-pointer absolute right-0 p-3 ">
              <X size={23} strokeWidth={2.5} />
            </div>
          </div>
          <div className="mt-3 flex  mb-3 items-center">
            <div className="bg-green-700 rounded-2xl py-1 mr-1  text-center px-3 text-white">
              <b>{canvasData.time}</b>
            </div>
            <div className="flex items-center text-center text-[13px] w-[120px] justify-around text-gray-600 ">
              <p>{canvasData.dimension}</p>
              <p className="text-[10px]">•</p>
              <p>{canvasData.age}+ </p>
              <p className="text-[10px]">•</p>
              <p>{canvasData.price}₽</p>
            </div>
          </div>
        </div>
        <div className="border-b-2">
          <Canvas spotsArray={spotsArray} />
        </div>
        <DrawTickets price={canvasData.price} />
      </div>
    </div>
  );
}
