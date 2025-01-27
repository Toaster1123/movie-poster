import React from 'react';

import { Ticket } from './ticket';
import { TSeanses } from './film-item';
import { cn } from '../../lib';

interface Props {
  seanses: TSeanses[];
  className?: string;
}

export const TicketsGroup: React.FC<Props> = ({ seanses, className }) => {
  return (
    <div className={className}>
      <div className={cn('flex  flex-wrap gap-3', className)}>
        {seanses.map((item) => (
          <Ticket key={item.id} price={item.price} hall={item.hallSchemaId} time={item.time} />
        ))}
      </div>
      {/* <div className="cursor-pointer text-white my-5 rounded-xl py-1 px-3 bg-lime-600 hover:bg-lime-700">
        <p
          onClick={() => {
            // setNewDate(600);
            // setActive(1);
          }}>
          Сеансы на завтра
        </p>
      </div> */}
    </div>
  );
};
