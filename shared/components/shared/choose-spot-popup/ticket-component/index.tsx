'use client';
import { CircleX } from 'lucide-react';
import React from 'react';

import styles from './ticket.module.scss';
import { changeUserTickets } from '../../../../store';

interface Props {
  row: number;
  sit: number;
  price: number;
  id: number;
}

export default function TicketsComponent({ row, sit, id, price }: Props) {
  const { removeSelectedSeats } = changeUserTickets((state) => state);

  return (
    <div className={`${styles.main} `}>
      <div className="flex justify-between">
        <p className="pr-2">
          Ряд {row}, Место {sit}
        </p>
        <div
          onClick={() => {
            removeSelectedSeats(id);
          }}
          className={styles.remButton}>
          <CircleX size={19} color="white" fill="#9e9e9e" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex text-xs items-center ">
        <span className="bg-[#64aed9] h-2 w-2 rounded-md mr-1"></span>
        <p>{price} ₽</p>
      </div>
    </div>
  );
}
