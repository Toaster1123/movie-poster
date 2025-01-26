'use client';
import React from 'react';
import { cn, getForwardData } from '../../lib';

const dateArray = ['Сегодня', 'Завтра', getForwardData(2)];
export const SelectDate = () => {
  const [active, setActive] = React.useState(0);

  return (
    <div className="ml-[13px] flex py-5 gap-2">
      {dateArray.map((item, id) => {
        return (
          <button
            className={cn(
              'border-[2px] border-transparent h-8 cursor-pointer text-[15px] px-3 hover:border-lime-600 rounded-2xl',
              id === active ? 'bg-lime-600 cursor-auto  text-white' : 'bg-white',
            )}
            key={id}
            onClick={() => setActive(id)}
            disabled={id === active}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
