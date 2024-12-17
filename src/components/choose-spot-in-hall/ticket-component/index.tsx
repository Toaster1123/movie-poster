import { ChangeUserTickets } from '@/store/user-tickets';
import { CircleX } from 'lucide-react';
import React from 'react';
import styles from './ticket.module.scss';

export default function TicketsComponent({ row, sit }: { row: number; sit: number }) {
  const [isDeleted, SetIsDeleted] = React.useState(false);
  const { clicketSits, setClicketSits } = ChangeUserTickets((state) => state);

  return (
    <div className={`${styles.main} ${isDeleted && styles['main-onmount']}`}>
      <div className="flex justify-between">
        <p className="pr-2">
          Ряд {row}, Место {sit}
        </p>
        <div
          onClick={() => {
            SetIsDeleted(true);
            setTimeout(() => {
              setClicketSits(
                clicketSits.filter((item) => {
                  return item.row !== row || item.sit !== sit;
                }),
              );
              SetIsDeleted(false);
            }, 300);
          }}
          className={styles.remButton}>
          <CircleX size={19} color="white" fill="#9e9e9e" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex text-xs  items-center ">
        <span className="bg-[#64aed9] h-2 w-2 rounded-md mr-1"></span>
        <p>400 ₽</p>
      </div>
    </div>
  );
}
