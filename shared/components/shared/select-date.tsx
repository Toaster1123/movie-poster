'use client';
import React from 'react';
import { cn, getForwardData, setCurrenStringtTime } from '../../lib';
import { currentTimeStore } from '../../store';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'qs';

const dateArray = ['Сегодня', 'Завтра', getForwardData(2)];
export const SelectDate = ({ className }: { className?: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [active, setActive] = React.useState(
    dateArray.indexOf(searchParams.get('day') || 'Сегодня') || 0,
  );
  const { setCurrentTime } = currentTimeStore((state) => state);

  React.useEffect(() => {
    if (active === 0) {
      setCurrentTime(setCurrenStringtTime());
    } else {
      setCurrentTime('10:00');
    }
    const query = qs.stringify(
      { day: dateArray[active]?.split(',')[0] },
      {
        arrayFormat: 'comma',
      },
    );
    router.replace(`?${query}`, {
      scroll: false,
    });
  }, [active]);

  return (
    <div className={cn('flex py-5 gap-2', className)}>
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
