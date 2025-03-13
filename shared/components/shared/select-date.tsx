'use client';
import React from 'react';
import qs from 'qs';
import { cn, getForwardData } from '../../lib';
import { useSearchParams } from 'next/navigation';

export const SelectDate = ({ className }: { className?: string }) => {
  const dateArray = ['Сегодня', 'Завтра', getForwardData(2)];
  const searchParams = useSearchParams();

  const queryDay = searchParams.get('day') || 'Сегодня';
  const [active, setActive] = React.useState(
    dateArray.findIndex((dateItem) => dateItem.split(',')[0] === queryDay),
  );
  React.useEffect(() => {
    setActive(dateArray.findIndex((dateItem) => dateItem.split(',')[0] === queryDay));
  }, [queryDay]);

  const onClick = (item: string) => {
    const newActiveIndex = dateArray.findIndex((dateItem) => dateItem === item);
    const query = qs.stringify({ day: dateArray[newActiveIndex]?.split(',')[0] });
    window.history.replaceState(null, '', `?${query}`);
    setActive(dateArray.indexOf(item));
  };

  return (
    <div className={cn('flex py-5 gap-2', className)}>
      {dateArray.map((item, id) => (
        <button
          className={cn(
            'border-[2px] border-transparent h-8 cursor-pointer text-[15px] px-3 hover:border-lime-600 rounded-2xl',
            id === active ? 'bg-lime-600 cursor-auto text-white' : 'bg-white',
          )}
          key={id}
          onClick={() => onClick(item)}
          disabled={id === active}>
          {item}
        </button>
      ))}
    </div>
  );
};
