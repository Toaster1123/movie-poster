const weekdays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
const shortMonth = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];
export function getForwardData(day: number) {
  const date = new Date();
  const curentDayPlusTwo = new Date(date.setDate(date.getDate() + day));
  return `${weekdays[curentDayPlusTwo.getDay()]}, ${curentDayPlusTwo.getDate()} ${
    shortMonth[curentDayPlusTwo.getMonth()]
  }`;
}

export const dayToDate = (day: string) => {
  switch (day) {
    case 'Сегодня':
      return getForwardData(0).split(',')[1];
    case 'Завтра':
      return getForwardData(1).split(',')[1];

    default:
      return getForwardData(2).split(',')[1];
  }
};
