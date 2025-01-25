export const countries = [
  { name: 'Бельгия' },
  { name: 'Великобритании' },
  { name: 'Индия' },
  { name: 'Канада' },
  { name: 'Нидерланды' },
  { name: 'Россия' },
  { name: 'США' },
  { name: 'Турция' },
  { name: 'Франция' },
  { name: 'Швеция' },
  { name: 'Япония' },
].map((obj, index) => ({ id: index + 1, ...obj }));
