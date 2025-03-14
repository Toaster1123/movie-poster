import qs from 'qs';
import { getForwardData } from './get-forward-data';
const dateArray = ['Сегодня', 'Завтра', getForwardData(2)];

export const changeQuery = (day: number) => {
  const query = qs.stringify({ day: dateArray[day]?.split(',')[0] });
  window.history.replaceState(null, '', `?${query}`);
};
