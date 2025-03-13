'use client';

import { Ticket } from './ticket';
import { cn, setCurrenStringtTime, timeToMinutes } from '../../../lib';
import { TSeanses } from '../movie-list/components/film-item';
import qs from 'qs';
import { useSearchParams } from 'next/navigation';

export const TicketsGroup = ({ seanses }: { seanses: TSeanses[] }) => {
  const searchParams = useSearchParams();
  const queryDay = searchParams.get('day') || 'Сегодня';
  const currentTime = queryDay === 'Сегодня' ? setCurrenStringtTime() : '10:00';
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
                const query = qs.stringify({ day: 'Завтра' });
                window.history.replaceState(null, '', `?${query}`);
              }}>
              Сеансы на завтра
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
