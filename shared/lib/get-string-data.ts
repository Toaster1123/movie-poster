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
  { nominative: 'Январь', genitive: 'Января' },
  { nominative: 'Февраль', genitive: 'Февраля' },
  { nominative: 'Март', genitive: 'Марта' },
  { nominative: 'Апрель', genitive: 'Апреля' },
  { nominative: 'Май', genitive: 'Мая' },
  { nominative: 'Июнь', genitive: 'Июня' },
  { nominative: 'Июль', genitive: 'Июля' },
  { nominative: 'Август', genitive: 'Августа' },
  { nominative: 'Сентябрь', genitive: 'Сентября' },
  { nominative: 'Октябрь', genitive: 'Октября' },
  { nominative: 'Ноябрь', genitive: 'Ноября' },
  { nominative: 'Декабрь', genitive: 'Декабря' },
];

export function getForwardData(day: number) {
  const date = new Date();
  const curentDayPlusTwo = new Date(date.setDate(date.getDate() + day));
  return `${weekdays[curentDayPlusTwo.getDay()]}, ${curentDayPlusTwo.getDate()} ${
    fullMonth[curentDayPlusTwo.getMonth()].genitive
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
  return `${day} ${fullMonth[Number(month) - 1].genitive} ${year}`;
};

export const dateOrderCompare = (date: Date): string => {
  const startOfCurrentDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  );
  const startGivenDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const differenceDay = Math.floor(
    (startOfCurrentDate.getTime() - startGivenDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (differenceDay === 0) {
    return 'Сегодня';
  }
  if (new Date().getFullYear() - date.getFullYear() === 1) {
    return 'В прошлом году';
  }
  if (differenceDay === 1) {
    return 'Вчера';
  }
  if (differenceDay >= 2 && differenceDay <= 7 + new Date().getDay()) {
    if (date.getDay() === 0 || date.getDay() >= new Date().getDay()) {
      return 'На прошлой неделе';
    } else {
      return 'Позавчера';
    }
  }
  if (
    differenceDay > 7 &&
    differenceDay <= new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
  ) {
    return 'В этом месяце';
  }

  if (differenceDay > new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()) {
    return 'В прошлом месяце';
  }

  switch (differenceDay % 10) {
    case 1:
      return `${differenceDay} день назад`;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
      return `${differenceDay} дней назад`;

    default:
      return `${differenceDay} дня назад`;
  }
};
