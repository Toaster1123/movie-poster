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
    <div className="md:pl-10 max-md:mt-10 flex-grow flex justify-center">
      <div>
        <h1 className="md:mt-10 max-md:text-xl md:text-center text-2xl font-medium">
          Просмотренные фильмы
        </h1>
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
