import { useSearchParams } from 'next/navigation';
import { setCurrenStringtTime, timeToMinutes } from '../lib';

export const useFilteredItems = <T extends { time: string }>(
  items: T[],
): { filteredItems: T[]; queryDay: string } => {
  const searchParams = useSearchParams();
  const queryDay = searchParams.get('day') || 'Сегодня';
  const currentTime = queryDay === 'Сегодня' ? setCurrenStringtTime() : '10:00';

  const filteredItems = items.filter(
    (item) => timeToMinutes(item.time) >= timeToMinutes(currentTime),
  );

  return { filteredItems, queryDay };
};
