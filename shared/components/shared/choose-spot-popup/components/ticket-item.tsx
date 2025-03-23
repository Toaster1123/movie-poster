'use client';
import { CircleX } from 'lucide-react';
import React from 'react';

import { changeUserTickets } from '../../../../store';
import { cn } from '../../../../lib';

interface Props {
  row: number;
  sit: number;
  price: number;
  id: number;
}

export const TicketItem = ({ row, sit, id, price }: Props) => {
  const { removeSelectedSeats } = changeUserTickets((state) => state);
  const onRemoveClick = () => {
    setTimeout(() => {
      removeSelectedSeats(id);
    }, 1000);
  };

  return (
    <div
      className={cn(
        'overflow-hidden rounded-px h-16 border -mr-3 bg-background rounded-t-xl text-sm border-gray-300 p-3 hover:h-[117px] group',
      )}>
      <div className="flex justify-between">
        <p className="pr-2">
          Ряд {row}, Место {sit}
        </p>
        <div
          onClick={onRemoveClick}
          className="cursor-pointer duration-300 opacity-0 group-hover:opacity-100">
          <CircleX size={19} color="white" fill="#9e9e9e" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex text-xs items-center ">
        <span className="bg-[#64aed9] h-2 w-2 rounded-md mr-1"></span>
        <p>{price} ₽</p>
      </div>
    </div>
  );
};
