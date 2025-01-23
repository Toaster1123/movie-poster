const weekdays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
export function getForwardData(day: number) {
  const date = new Date();
  const curentDayPlusTwo = new Date(date.setDate(date.getDate() + day));
  const dayTwo = `${weekdays[curentDayPlusTwo.getDay()]}, ${curentDayPlusTwo.getDate()} ${
    month[curentDayPlusTwo.getMonth()]
  }`;
  return dayTwo;
}
