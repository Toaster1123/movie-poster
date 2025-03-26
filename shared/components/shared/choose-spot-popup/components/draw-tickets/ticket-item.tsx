'use client';
import { CircleX } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { cn } from '../../../../../lib';
import { changeUserTickets } from '../../../../../store';

interface Props {
  row: number;
  sit: number;
  price: number;
  id: number;
  isDeletingItem?: boolean;
}

export const TicketItem = ({ row, sit, id, price, isDeletingItem }: Props) => {
  const { removeSelectedSeats } = changeUserTickets.getState();
  const [isDeleting, setisDeleting] = React.useState(false);
  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(isDeletingItem);
      setItemHeight(isDeletingItem ? 0 : 64);
    }, 0);

    return () => clearTimeout(timeout);
  }, [isDeletingItem]);

  return (
    <div
      className={cn('overflow-hidden -mr-3 duration-300 ease-in-out group')}
      style={{ height: `${itemHeight}px`, opacity: isDeleting ? 0 : 1 }}
      onMouseOver={() => !isDeleting && setItemHeight(128)}
      onMouseLeave={() => !isDeleting && setItemHeight(64)}>
      <div className="rounded-px h-full border bg-background rounded-t-xl text-sm border-gray-300 p-3 group">
        <div className="flex justify-between">
          <p className="pr-2">
            Ряд {row}, Место {sit}
          </p>
          <div
            onClick={() => {
              setisDeleting(true);
              setItemHeight(0);
              removeSelectedSeats(id);
              setTimeout(() => {
                setisDeleting(false);
                setItemHeight(64);
              }, 300);
            }}
            className="cursor-pointer duration-300 opacity-0 group-hover:opacity-100">
            <CircleX size={19} color="white" fill="#9e9e9e" strokeWidth={2.5} />
          </div>
        </div>
        <div className="flex text-xs items-center">
          <span className="bg-[#64aed9] h-2 w-2 rounded-md mr-1"></span>
          <p>{price} ₽</p>
        </div>
      </div>
    </div>
  );
};
