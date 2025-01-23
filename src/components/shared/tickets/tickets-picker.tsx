'use client';
import React from 'react';

import { CardType } from '@/@types/sceance-type';
import { price, selectDimension } from '@/lib/set-film-hall.ts/constants';
import { ChangeTicketsData } from '@/store/set-date';
import { ChangeSeanse } from '@/store/seanses';
import { TicketsSelect } from '@/lib/set-film-hall.ts';
import { activeDateSelector } from '@/store/active-date-selector';
import { HallPopup } from '@/store/hall-popup';
import { CanvasData } from '@/store/canvas-data';
import { getForwardData } from '../date/actual-date';
import { convertTime } from '@/lib/convert-time';

export default function TicketsPicker({ title }: { title: string }) {
  const { setOpened } = HallPopup((state) => state);
  const { seansesArray } = ChangeSeanse((state) => state);
  const { setActive } = activeDateSelector((state) => state);
  const { date, setNewDate } = ChangeTicketsData((state) => state);
  const { setCanvasData } = CanvasData((state) => state);
  const { active } = activeDateSelector((state) => state);

  const [tickets, setTickets] = React.useState<CardType[]>([]);
  React.useEffect(() => {
    setTickets(TicketsSelect(seansesArray, title, date));
  }, [date, seansesArray]);

  return (
    <div className="flex flex-wrap gap-3">
      {tickets.length > 0 ? (
        tickets.map((item, id) => (
          <div
            onClick={() => {
              setOpened(true);
              setCanvasData({
                title: title,
                time: item.time,
                dimension: selectDimension(item.time, item.age),
                age: item.age,
                hall: item.hall,
                date: getForwardData(active),
                price: price(item.time),
              });
            }}
            key={id}
            className={'cursor-pointer py-3 h-[118px] w-[70.2px] '}>
            <p className="text-white py-1 px-3 bg-lime-600 font-black text-lg hover:bg-lime-700">
              {convertTime(item.time)}
            </p>
            <div className="flex text-sm justify-around border-[1px] border-lime-600">
              <p>{selectDimension(item.time, item.age)}</p>
              <p>{price(item.time)}₽</p>
            </div>
            <p className="text-center pt-1 mb-2">Зал {item.hall}</p>
          </div>
        ))
      ) : (
        <div className="cursor-pointer text-white my-5 rounded-xl py-1 px-3 bg-lime-600 hover:bg-lime-700">
          <p
            onClick={() => {
              setNewDate(600);
              setActive(1);
            }}>
            Сеансы на завтра
          </p>
        </div>
      )}
    </div>
  );
}
