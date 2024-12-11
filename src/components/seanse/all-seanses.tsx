'use client';

import { ChangeSeanse } from '@/store/tickets';
import SeanceCard from './seance-card';
import { ChangeTicketsData } from '@/store/set-date';
import React from 'react';
import { CardType } from '@/@types/sceance-type';
import { activeDateSelector } from '@/store/active-date-selector';

export default function AllSeanses() {
  const { seansesArray } = ChangeSeanse((state) => state);
  const { date, setNewDate } = ChangeTicketsData((state) => state);
  const [films, setFilms] = React.useState<CardType[]>([]);
  const { setActive } = activeDateSelector((state) => state);

  React.useEffect(() => {
    setFilms(
      seansesArray.filter((item) => {
        return item.time + 10 >= date;
      }),
    );
  }, [date, seansesArray]);

  return (
    <>
      {films.length === 0 ? (
        <div className="my-5  text-white w-full flex flex-col justify-center items-center">
          <img src="https://plazakino.ru/img/no-seanses.svg" height={168} width={168} alt="" />
          <strong className="text-black text-xl my-3">Сеансов на сегодня нет</strong>
          <div
            onClick={() => {
              setNewDate(600);
              setActive(1);
            }}
            className="cursor-pointer mb-5 w-fit   bg-lime-600 py-1 px-3  rounded-xl hover:bg-lime-700">
            Сеансы на завтра
          </div>
        </div>
      ) : (
        films.map((item, id) => (
          <div key={id} className={`${id > 0 && 'border-t-[1px]  border-slate-300'}`}>
            <SeanceCard
              time={item.time}
              id={item.id}
              title={item.title}
              age={item.age}
              genres={item.genres}
              hall={item.hall}
            />
          </div>
        ))
      )}
    </>
  );
}
