export function convertTime(time: number) {
  return Math.floor(time / 60) + ':' + (time % 60 < 10 ? (time % 60) + '0' : time % 60);
}
export function convertTimeToSort(hours: number, minutes: number) {
  return hours * 60 + minutes;
}
