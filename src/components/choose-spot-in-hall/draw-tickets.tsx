import TicketsComponent from './tickets-component';
import { useTickets } from '../../hooks/useTickets';

import React from 'react';
export default function DrawTickets({ price }: { price: number }) {
  const { clicketSits } = useTickets();
  return (
    <div className="flex justify-between mx-7 h-[72px] mt-1">
      <div className="flex items-end">
        {clicketSits.map((item, id) => (
          <TicketsComponent key={id} row={item.row} sit={item.sit} />
        ))}
      </div>
      <div className="bg-gray-200 w-fit px-5 py-3  my-3 rounded-lg text-gray-400">
        {clicketSits.length === 0 ? 'Места не выбраны' : `Купить за ${price} ₽`}
      </div>
    </div>
  );
}
