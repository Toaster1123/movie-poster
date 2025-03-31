const weekdays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
const fullMonth = [
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
    fullMonth[curentDayPlusTwo.getMonth()]
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

export const stringDateConvert = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${day} ${fullMonth[Number(month) - 1]} ${year}`;
};

export const dateConvert = (date: string) => {
  const [_, day, month] = dayToDate(date).split(' ');
  const currentMonth = fullMonth.findIndex((item) => item == month) + 1;
  return `${new Date().getFullYear()}-${currentMonth > 9 ? currentMonth : `0${currentMonth}`}-${Number(day) > 9 ? day : `0${day}`}`;
};
