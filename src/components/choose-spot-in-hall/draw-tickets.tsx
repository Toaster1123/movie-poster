import { ChangeUserTickets } from '@/store/user-tickets';
import TicketsComponent from './ticket-component';

import React from 'react';
import { CliketSitsType } from '@/@types/canvas-types';
export default function DrawTickets({ price }: { price: number }) {
  const { clicketSits } = ChangeUserTickets((state) => state);
  const [ticketCloneForAnimation, setTicketCloneForAnimation] = React.useState<
    [] | CliketSitsType[]
  >([]);
  console.log(ticketCloneForAnimation);
  React.useEffect(() => {
    setTimeout(() => {
      console.log('object');
      setTicketCloneForAnimation(clicketSits);
    }, 300);
  }, [clicketSits]);
  return (
    <div className={`relative flex justify-between mx-7 h-[72px] mt-1`}>
      <div className="flex items-end 4">
        {ticketCloneForAnimation.map((item, id) => (
          <TicketsComponent key={id} row={item.row} sit={item.sit} />
        ))}
      </div>
      <button
        className={` w-fit px-5 py-3  my-3 rounded-lg  ${
          clicketSits.length > 0 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'
        }`}>
        {clicketSits.length === 0
          ? 'Места не выбраны'
          : `Купить за ${price * clicketSits.length} ₽`}
      </button>
    </div>
  );
}