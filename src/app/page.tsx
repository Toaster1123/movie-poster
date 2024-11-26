'use client';
import FilmItem from '@/components/film-item';
import Date from '@/components/date';
import { UseMovie } from '@/store/requests/main-film-req/async-actions';
import { useEffect } from 'react';

export default function Home() {
  const { fetchItems, movie, loading } = UseMovie((state) => state);
  useEffect(() => {
    fetchItems();
  }, []);

  console.log(movie);

  return (
    <div className="px-10">
      <Date />
      <div className="flex flex-wrap ">
        {(loading ? [...Array(2)] : movie).map((item, id) => {
          if (!item) {
            return <div key={id}>loading</div>;
          }
          return (
            <div className="w-[265px] mr-4 mb-11  " key={id}>
              <FilmItem
                id={item.id}
                image={item.poster.url}
                title={item.name}
                genres={item.genres}
                age={item.ageRating}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
