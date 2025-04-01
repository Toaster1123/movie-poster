import React from 'react';
import { PurchasedDate } from './purchased-date';
import { dateOrderCompare } from '../../../../lib';
import { TicketItem } from './ticket-item';
import { TOrderItem } from '../../../../../@types';

interface Props {
  tickets: {
    name: string;
    date: Date;
    tickets: TOrderItem[];
  }[];
}

export const PurchasedTicketsList: React.FC<Props> = ({ tickets }) => {
  return (
    <div className="flex flex-wrap gap-x-3">
      {tickets.map((item, index) => (
        <div key={index} className="flex flex-col w-full">
          {(index === 0 ||
            (index > 0 &&
              dateOrderCompare(item.date) !== dateOrderCompare(tickets[index - 1].date))) && (
            <PurchasedDate index={index} date={item.date} />
          )}
          <p className="text-lg p-0.5 ">{item.name}</p>
          <div className="flex flex-row gap-3 flex-wrap">
            {item.tickets.map((ticket, ticketIndex) => (
              <TicketItem key={ticketIndex} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
