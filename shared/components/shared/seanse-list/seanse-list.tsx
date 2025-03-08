'use client';
import React from 'react';
import { SeanceCard } from './components/seance-card';
import { currentTimeStore } from '../../../store';
import { Movie } from '../../../../app/seances/page';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'qs';

interface Props {
  sortedMovies: Movie[];
}

export const SeanseList: React.FC<Props> = ({ sortedMovies }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changeDay = () => {
    const query = qs.stringify(
      { day: 'Завтра' },
      {
        arrayFormat: 'comma',
      },
    );
    router.replace(`?${query}`, {
      scroll: false,
    });
  };
  const { currentTime } = currentTimeStore((state) => state);
  sortedMovies = sortedMovies.filter((item) => item.time >= currentTime);
  return (
    <div className="mx-10 flex-grow flex flex-col justify-center">
      {sortedMovies.length === 0 ? (
        <div className="my-5   text-white w-full flex flex-col justify-center items-center">
          <img src="https://plazakino.ru/img/no-seanses.svg" height={168} width={168} />
          <strong className="text-black text-xl my-3">Сеансов на сегодня нет</strong>
          <div
            onClick={() => {
              changeDay();
            }}
            className="cursor-pointer mb-5 w-fit   bg-lime-600 py-1 px-3  rounded-xl hover:bg-lime-700">
            Сеансы на завтра
          </div>
        </div>
      ) : (
        sortedMovies.map((item, id) => (
          <div key={id} className={`${id > 0 && 'border-t-[1px]  border-slate-300'}`}>
            <SeanceCard
              time={item.time}
              id={item.id}
              title={item.name}
              age={item.age}
              genres={item.genres}
              hall={item.hall}
              price={item.price}
            />
          </div>
        ))
      )}
    </div>
  );
};
