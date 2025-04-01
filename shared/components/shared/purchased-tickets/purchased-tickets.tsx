import React from 'react';
import { PurchasedTicketsList } from './components';
import { TOrderItem } from '../../../../@types';

interface Props {
  allTickets: {
    name: string;
    date: Date;
    tickets: TOrderItem[];
  }[];
}

export const PurchasedTickets: React.FC<Props> = ({ allTickets }) => {
  return (
    <div className="flex-grow flex justify-center pl-10">
      <div>
        <h1 className="text-2xl text-center font-medium pb-7">Просмотренные фильмы</h1>
        {allTickets.length > 0 ? (
          <PurchasedTicketsList tickets={allTickets} />
        ) : (
          <div className="flex h-full justify-center items-center">
            <span className="text-lg text-gray-500">Вы ещё не просмотрели ни одного фильма 😓</span>
          </div>
        )}
      </div>
    </div>
  );
};
