'use client';

import { hallArray } from '@/store/set-filmHall';

export const date = new Date().getHours() * 60 + new Date().getMinutes();

export const objHall = hallArray.map((item) =>
  item.filter((item) => {
    return item + 15 >= date;
  }),
);

export const chooseHall = (age: number) => {
  switch (age) {
    case 6:
      return 1;
    case 12:
      return 2;
    case 16:
      return 3;
    case 18:
      return 4;
    default:
      return 0;
  }
};
export const price = (time: number) => {
  if (time <= 660) {
    return 300;
  }
  if (time <= 740) {
    return 350;
  }
  if (time <= 1080) {
    return 400;
  }
  return 450;
};
