'use client';
import { useState } from 'react';
import { dayTwo } from './actual-date';

const date = ['Сегодня', 'Завтра', dayTwo];

export default function Date({ loading }: { loading: boolean }) {
  const [active, setActive] = useState(0);
  return (
    <div className=" flex py-3">
      {date.map((item, id) => {
        if (loading) {
          return (
            <div
              className={`text-sm p-1 px-3 h-8 w-24 bg-white border-[1px] border-transparent cursor-pointer mr-2 hover:border-lime-600 rounded-2xl`}
              key={id}
              onClick={() => setActive(id)}></div>
          );
        }
        return (
          <div
            className={`text-sm p-1 px-3 ${
              active == id
                ? 'bg-lime-600 cursor-auto hover:border-transparent text-white'
                : 'bg-white'
            } border-[1px] border-transparent h-8 cursor-pointer mr-2 hover:border-lime-600 rounded-2xl`}
            key={id}
            onClick={() => setActive(id)}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
