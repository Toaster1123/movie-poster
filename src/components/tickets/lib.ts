'use client';

const hallArray = [
  [635, 855, 960, 1065, 1175, 1285, 1400],
  [620, 745, 890, 1025, 1160, 1295, 1430],
  [655, 730, 930, 1095, 1240],
  [645, 780, 980, 1145, 1290, 1410],
  [615, 740, 945, 1025, 1200, 1390],
];
export const date = new Date().getHours() * 60 + new Date().getMinutes();
export const objHall = hallArray.map((item) =>
  item.filter((item) => {
    return item >= date;
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
