import Date from '@/components/date';
import AllSeanses from '@/components/seanse/all-seanses';
import TicketsWrapper from '@/components/tickets-wrapper';
import { fetchData } from '@/lib/fetch-films';

export default async function Seances() {
  const movie = await fetchData();

  return (
    <TicketsWrapper movie={movie}>
      <div className="bg-gray-100">
        <div className="bg-gray-300 px-10">
          <Date />
        </div>
        <div className="mx-10">
          <AllSeanses />
        </div>
      </div>
    </TicketsWrapper>
  );
}
