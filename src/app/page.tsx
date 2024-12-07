'use client';
import Date from '@/components/date';
import FilmItem from '@/components/film-item';
import { UseMovie } from '@/store/requests/main-film-req/async-actions';
import { useEffect } from 'react';

export default function Home() {
  const { fetchItems, movie, loading } = UseMovie((state) => state);
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="px-10 bg-slate-800 ">
      <Date loading={loading} />
      <div className="flex flex-wrap ">
        {(loading ? [...Array(8)] : movie).map((item, id) => (
          <div key={id} className="w-[265px] mr-4 mb-11 rounded-lg overflow-hidden bg-white">
            {loading ? (
              <div className="h-[848px] w-[265px] p-4">
                <div className="bg-gray-300 w-[233px] h-[374px] "></div>
                <div className="bg-gray-300 h-12 my-2"></div>
                <div className="bg-gray-300 h-[40px] mb-10"></div>
                <div className="bg-gray-300 h-[80px]"></div>
              </div>
            ) : (
              <FilmItem
                id={item.id}
                image={item.poster.url}
                title={item.name}
                genres={item.genres}
                age={item.ageRating}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
