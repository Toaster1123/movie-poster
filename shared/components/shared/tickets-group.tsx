'use client';
import React from 'react';

import { CardType } from '@/@types/sceance-type';
import { ChangeTicketsData } from '@/store/set-date';
import { ChangeSeanse } from '@/store/seanses';
import { TicketsSelect } from '@/lib/set-film-hall.ts';
import { activeDateSelector } from '@/store/active-date-selector';
import { HallPopup } from '@/store/hall-popup';
import { CanvasData } from '@/store/canvas-data';
import { getForwardData } from './date/actual-date';
import { convertTime } from '@/lib/convert-time';
import { Ticket } from './ticket';

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
        tickets.map((item, id) => <Ticket key={id} hall={} />)
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
