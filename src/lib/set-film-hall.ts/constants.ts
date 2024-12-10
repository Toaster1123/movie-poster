export const hallArray = [
  { hall: 1, times: [635, 755, 875, 995, 1130, 1250, 1340] },
  { hall: 2, times: [620, 745, 870, 1000, 1110, 1240, 1360] },
  { hall: 3, times: [655, 775, 905, 1020, 1140, 1270] },
  { hall: 4, times: [600, 720, 835, 960, 1075, 1190, 1330] },
  { hall: 5, times: [625, 740, 855, 985, 1120, 1350] },
];

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
