import Date from '@/components/date';
import TicketsPicker from '@/components/tickets-picker';
import { UseMovieById } from '@/store/requests/film-by-id/async-actions';
import React from 'react';

export default async function Movie({ params }: { params: { id: number } }) {
  const { fetchItems, movie, loading } = UseMovieById((state) => state);

  React.useEffect(() => {
    fetchItems(params.id);
  }, []);

  console.log(movie);
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="bg-gray-200">
      <div>
        <div>
          <img className="w-[265px] h-[374px] " src={'image'} alt="картинка" />
        </div>
        <div>
          <div className="">{'title'}</div>
          <Date />
          {/* <TicketsPicker age={movie.ageRating} /> */}
        </div>
      </div>
    </div>
  );
}
