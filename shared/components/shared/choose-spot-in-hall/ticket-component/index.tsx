import { CircleX } from 'lucide-react';
import React from 'react';

import styles from './ticket.module.scss';
import { ChangeUserTickets } from '../../../../store/user-tickets';

export default function TicketsComponent({ row, sit }: { row: number; sit: number }) {
  const { clicketSits, setClicketSits, domClicketSits } = ChangeUserTickets((state) => state);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [animWhileDel, setAnimWhileDel] = React.useState(true);
  const [delByClickX, setDelByClickX] = React.useState(false);
  React.useEffect(() => {
    if (clicketSits.length < domClicketSits.length) {
      const deletedElem = domClicketSits.filter(
        (item) => !clicketSits.some((sit) => sit.row === item.row && sit.sit === item.sit),
      );
      if (deletedElem[0].row == row && deletedElem[0].sit === sit) {
        setIsDeleted(true);
        setAnimWhileDel(false);
        setTimeout(() => {
          setDelByClickX(false);
          setIsDeleted(false);
        }, 300);
      }
    }
  }, [clicketSits.length]);
  return (
    <div
      className={`${styles.main} ${isDeleted && !delByClickX && styles.mainOnmount} ${
        animWhileDel && styles.mainMount
      } ${delByClickX && styles.mainOnmountHover}`}>
      <div className="flex justify-between">
        <p className="pr-2">
          Ряд {row}, Место {sit}
        </p>
        <div
          onClick={() => {
            setDelByClickX(true);
            setClicketSits(
              clicketSits.filter((item) => {
                return item.row !== row || item.sit !== sit;
              }),
            );
          }}
          className={styles.remButton}>
          <CircleX size={19} color="white" fill="#9e9e9e" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex text-xs items-center ">
        <span className="bg-[#64aed9] h-2 w-2 rounded-md mr-1"></span>
        <p>400 ₽</p>
      </div>
    </div>
  );
}
