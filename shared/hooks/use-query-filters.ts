import { useEffect, useState } from 'react';
import qs from 'qs';
import { currentTimeStore } from '../store';
import { setCurrenStringtTime } from '../lib';
import { useSearchParams } from 'next/navigation';

export const useQueryFilters = (dateArray: string[]) => {
  const searchParams = useSearchParams();

  const queryDay = searchParams.get('day') || 'Сегодня';

  const [active, setActive] = useState(() => {
    return dateArray.findIndex((item) => item.split(',')[0] === queryDay);
  });
  const { currentTime, setCurrentTime } = currentTimeStore((state) => state);

  useEffect(() => {
    console.log(currentTime);
    setActive(dateArray.findIndex((item) => item.split(',')[0] === queryDay));
    console.log(active);

    const query = qs.stringify({ day: dateArray[active]?.split(',')[0] }, { arrayFormat: 'comma' });
    window.history.replaceState(null, '', `?${query}`);
  }, [currentTime]);

  return { active };
};
