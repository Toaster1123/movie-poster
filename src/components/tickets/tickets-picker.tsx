'use client';

import { CardType } from '@/@types/sceance-type';
import { price } from '@/lib/set-film-hall.ts/constants';
import React from 'react';
import { ChangeTicketsData } from '@/store/set-date';
import { ChangeSeanse } from '@/store/tickets';
import { TicketsSelect } from '@/lib/set-film-hall.ts';
import { activeDateSelector } from '@/store/active-date-selector';
import { HallPopup } from '@/store/hall-popup';

export default function TicketsPicker({ title }: { title: string }) {
  const { setOpened } = HallPopup((state) => state);

  const { seansesArray } = ChangeSeanse((state) => state);
  const { setActive } = activeDateSelector((state) => state);

  const { date, setNewDate } = ChangeTicketsData((state) => state);
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
            }}
            key={id}
            className={'cursor-pointer py-3 h-[118px] w-[70.2px] '}>
            <p className="text-white py-1 px-3 bg-lime-600 font-black text-lg hover:bg-lime-700">
              {Math.floor(item.time / 60) +
                ':' +
                (item.time % 60 < 10 ? (item.time % 60) + '0' : item.time % 60)}
            </p>
            <div className="flex text-sm justify-around border-[1px] border-lime-600">
              <p>
                {(item.time >= 1260 && item.age > 12) ||
                (item.time >= 1020 && item.age == 18) ||
                (item.time >= 1020 && item.age == 16)
                  ? '2D'
                  : '3D'}
              </p>
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
