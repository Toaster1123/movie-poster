'use client';
import { Ticket } from './ticket';
import { changeQuery } from '../../../lib';
import { TSeanses } from '../movie-list/components/film-item';
import { useFilteredItems } from '../../../hooks';
import { useState } from 'react';
import { ChooseSpotPopup } from '../choose-spot-popup';
import { useSearchParams } from 'next/navigation';
import { HallType } from '../../../../@types';
import { changeUserTickets } from '../../../store';

interface Props {
  age: number | null;
  title: string;
  seanses: TSeanses[];
}

export const TicketsGroup: React.FC<Props> = ({ seanses, age, title }) => {
  const { filteredItems: seansesArray } = useFilteredItems(seanses);
  const [hallData, setHallData] = useState<HallType | null>(null);
  const [itemData, setItemData] = useState<TSeanses | null>(null);
  const weekDay = useSearchParams().get('day') || 'Сегодня';

  const onClickTicket = async (item: TSeanses) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_URL}/hallschema/${item.hallSchemaId}`,
    );
    setHallData(await res.json());
    setItemData(item);
  };
  const { clearTicketSits } = changeUserTickets.getState();

  return (
    <div className="my-3 pl-3">
      <div className="flex flex-wrap gap-3">
        {seansesArray.length ? (
          seansesArray.map((item) => (
            <Ticket
              key={item.id}
              price={item.price}
              hall={item.hallSchemaId}
              time={item.time}
              onClick={() => onClickTicket(item)}
            />
          ))
        ) : (
          <div
            onClick={() => {
              changeQuery(1);
            }}
            className="cursor-pointer text-white my-5 rounded-xl py-1 px-3 bg-lime-600 hover:bg-lime-700">
            <p>Сеансы на завтра</p>
          </div>
        )}
      </div>
      {hallData && itemData && (
        <ChooseSpotPopup
          hallData={hallData}
          itemData={itemData}
          age={age}
          title={title}
          weekDay={weekDay}
          onClose={() => {
            clearTicketSits();
            setHallData(null);
          }}
        />
      )}
    </div>
  );
};
