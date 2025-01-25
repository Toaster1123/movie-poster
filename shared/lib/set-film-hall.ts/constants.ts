export function selectDimension(time: number, age: number) {
  if ((time >= 1260 && age > 12) || (time >= 1020 && age == 18) || (time >= 1020 && age == 16)) {
    return '2D';
  } else {
    return '3D';
  }
}
