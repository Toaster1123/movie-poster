'use client';
import { changeUserTickets } from '../../../store';
import TicketsComponent from './ticket-component';

import React from 'react';
export default function DrawTickets({ price }: { price: number }) {
  const { selectedSeat } = changeUserTickets((state) => state);
  console.log(selectedSeat);
  return (
    <div className={`relative flex justify-between mx-7 h-[72px] mt-1`}>
      <div className="flex items-end 4">
        {selectedSeat.map((item, id) => (
          <TicketsComponent key={id} row={item.row} sit={item.col} price={price} id={id} />
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
}
