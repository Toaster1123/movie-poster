'use client';
import { changeUserTickets } from '../../../../store';

import React from 'react';
import TicketItem from './ticket-item';
export const DrawTickets = ({ price }: { price: number }) => {
  const { selectedSeat } = changeUserTickets((state) => state);
  return (
    <div className={`relative flex justify-between mx-7 h-[72px] mt-1`}>
      <div className="flex items-end 4">
        {selectedSeat.map((item, id) => (
          <TicketItem key={id} row={item.row} sit={item.colException} price={price} id={id} />
        ))}
      </div>
      <button
        disabled={selectedSeat.length === 0}
        className={` w-fit px-5 py-3  my-3 rounded-lg  ${
          selectedSeat.length > 0 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'
        }`}>
        {selectedSeat.length === 0
          ? 'Места не выбраны'
          : `Купить за ${price * selectedSeat.length} ₽`}
      </button>
    </div>
  );
};
