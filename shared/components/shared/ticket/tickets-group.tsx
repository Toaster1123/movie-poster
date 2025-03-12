'use client';

import { Ticket } from './ticket';
import { cn, timeToMinutes } from '../../../lib';
import { currentTimeStore } from '../../../store';
import { TSeanses } from '../movie-list/components/film-item';

export const TicketsGroup = ({ seanses }: { seanses: TSeanses[] }) => {
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
