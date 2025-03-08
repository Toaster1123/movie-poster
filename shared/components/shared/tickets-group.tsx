'use client';
import React from 'react';

import { Ticket } from './ticket';
import { TSeanses } from './film-item';
import { cn, timeToMinutes } from '../../lib';
import { currentTimeStore } from '../../store';

interface Props {
  seanses: TSeanses[];
}

export const TicketsGroup: React.FC<Props> = ({ seanses }) => {
  const { currentTime, setCurrentTime } = currentTimeStore((state) => state);
  const seansesArray = seanses.filter(
    (item) => timeToMinutes(item.time) >= timeToMinutes(currentTime),
  );
  return (
    <div className="my-3 pl-3">
      <div className={cn('flex flex-wrap gap-3')}>
        {seansesArray.length ? (
          seansesArray.map((item) => (
            <Ticket key={item.id} price={item.price} hall={item.hallSchemaId} time={item.time} />
          ))
        ) : (
          <div className="cursor-pointer text-white my-5 rounded-xl py-1 px-3 bg-lime-600 hover:bg-lime-700">
            <p
              onClick={() => {
                setCurrentTime('10:00');
              }}>
              Сеансы на завтра
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
