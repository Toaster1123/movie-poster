'use client';
import React from 'react';
import { changeQuery, cn, getForwardData } from '../../lib';
import { useSearchParams } from 'next/navigation';

export const SelectDate = ({ className }: { className?: string }) => {
  const dateArray = ['Сегодня', 'Завтра', getForwardData(2)];
  const searchParams = useSearchParams();
  const queryDay = searchParams.get('day') || 'Сегодня';

  const [windowWidth, setWindowWidth] = React.useState<number | null>(null);
  const [active, setActive] = React.useState(
    dateArray.findIndex((dateItem) => dateItem.split(',')[0] === queryDay),
  );

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    setActive(dateArray.findIndex((dateItem) => dateItem.split(',')[0] === queryDay));
  }, [queryDay]);

  const onClick = (item: string) => {
    const activeIndex = dateArray.findIndex((dateItem) => dateItem === item);
    changeQuery(activeIndex);
  };

  return (
    <div className={cn('max-sm:justify-center flex gap-2', className)}>
      {dateArray.map((item, id) => {
        const isSmallScreen = windowWidth !== null && windowWidth < 640;
        const displayText = windowWidth === null ? null : isSmallScreen ? item.split(',')[0] : item;
        return (
          <button
            className={cn(
              'max-[350px]:text-xs text-[15px] border-[2px] border-transparent h-8 cursor-pointer px-3 hover:border-lime-600 rounded-2xl',
              id === active ? 'bg-lime-600 cursor-auto text-white' : 'bg-white',
              windowWidth === null && 'bg-gray-200 w-20',
            )}
            key={id}
            onClick={() => onClick(item)}
            disabled={id === active || windowWidth === null}>
            {displayText}
          </button>
        );
      })}
    </div>
  );
};
