'use client';
import React from 'react';
import { SeanceCard } from './components/seance-card';
import { cn } from '../../../lib';
import { useFilteredItems } from '../../../hooks';
import { sortedMovies } from '../../../../@types';

interface Props {
  sortedMovies: sortedMovies[];
}

export const SeanseList: React.FC<Props> = ({ sortedMovies }) => {
  const { filteredItems: movies } = useFilteredItems(sortedMovies);
  return (
    <div className={cn('mx-10 flex-grow flex flex-col', movies.length === 0 && 'justify-center')}>
      {movies.length === 0 ? (
        <div className="my-5 text-white w-full flex flex-col items-center">
          <img src="https://plazakino.ru/img/no-seanses.svg" height={168} width={168} />
          <strong className="text-black text-xl my-3">Сеансов на сегодня нет</strong>
          <div
            onClick={() => {}}
            className="cursor-pointer mb-5 w-fit   bg-lime-600 py-1 px-3  rounded-xl hover:bg-lime-700">
            Сеансы на завтра
          </div>
        </div>
      ) : (
        movies.map((item, id) => (
          <div key={id} className={`${id > 0 && 'border-t-[1px] border-slate-300'}`}>
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
