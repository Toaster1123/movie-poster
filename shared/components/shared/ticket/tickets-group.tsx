'use client';
import { Ticket } from './ticket';
import { changeQuery, cn } from '../../../lib';
import { TSeanses } from '../movie-list/components/film-item';
import { useFilteredItems } from '../../../hooks';

export const TicketsGroup = ({ seanses }: { seanses: TSeanses[] }) => {
  const { filteredItems: seansesArray } = useFilteredItems(seanses);
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
                changeQuery(1);
              }}>
              Сеансы на завтра
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
