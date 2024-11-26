'use client';
import { useState } from 'react';
const date = ['Сегодня', 'Завтра', 'Среда, 27 нояб'];

export default function Date() {
  const [active, setActive] = useState(0);
  return (
    <div className=" flex py-3">
      {date.map((item, id) => {
        return (
          <div
            className={`text-sm p-1 px-3 ${
              active == id
                ? 'bg-lime-600 cursor-auto hover:border-transparent text-white'
                : 'bg-white'
            } border-[1px] border-transparent cursor-pointer mr-2 hover:border-lime-600 rounded-2xl`}
            key={id}
            onClick={() => setActive(id)}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
