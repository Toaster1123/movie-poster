'use client';
const hallArray = [
  [635, 755, 875, 995, 1120, 1245, 1330],
  [620, 745, 870, 1000, 1120, 1240, 1360],
  [655, 775, 905, 1020, 1140, 1270],
  [600, 720, 835, 960, 1075, 1190, 1330],
  [620, 740, 855, 995, 1120, 1360],
];
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
  if (time <= 780) {
    return 350;
  }
  if (time <= 1080) {
    return 400;
  }
  return 450;
};
