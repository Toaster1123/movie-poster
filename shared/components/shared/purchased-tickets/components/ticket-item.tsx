import React from 'react';
import { TOrderItem } from '../../../../../@types';

interface Props {
  ticket: TOrderItem;
}

export const TicketItem: React.FC<Props> = ({ ticket }) => {
  return (
    <div className="border-black border rounded-lg w-24 text-center p-3 mb-3 ">
      <div className="flex flex-col items-center">
        <span>
          Зал {ticket.hall} ряд {ticket.row} место {ticket.col}
        </span>
        <span className="bg-lime-600 mt-3 text-white rounded-lg py-1 px-2">{ticket.time}</span>
      </div>
    </div>
  );
};
