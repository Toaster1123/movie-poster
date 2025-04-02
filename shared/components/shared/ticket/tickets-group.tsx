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
import { ClockLoader } from 'react-spinners';
interface Props {
  age: number | null;
  title: string;
  seanses: TSeanses[];
}

export const TicketsGroup: React.FC<Props> = ({ seanses, age, title }) => {
  const { filteredItems: seansesArray } = useFilteredItems(seanses);
  const [hallData, setHallData] = useState<HallType | null>(null);
  const [itemData, setItemData] = useState<TSeanses | null>(null);
  const [loading, setLoading] = useState(false);
  const weekDay = useSearchParams().get('day') || 'Сегодня';

  const onClickTicket = (item: TSeanses) => {
    setLoading(true);
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      `https://${process.env.VERCEL_URL}` ||
      'http://localhost:3000';
    fetch(`${baseUrl}${process.env.NEXT_PUBLIC_API_URL}/hallschema/${item.hallSchemaId}`)
      .then(async (res) => {
        setHallData(await res.json());
        setItemData(item);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => setLoading(false));
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
      {loading && (
        <div className="w-full h-full flex flex-col justify-center items-center fixed top-0 left-0 bg-black/75">
          <ClockLoader className="scale-200" loading={loading} color="white" size={30} />
        </div>
      )}
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
