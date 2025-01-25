import { FilmItemType } from '@/@types/main-films';
import { CardType } from '@/@types/sceance-type';
import { hallArray } from './constants';

export function SetFilmHall(filmArray: FilmItemType[]) {
  const seansesArray: CardType[] = [];
  const timeLenght = hallArray.reduce((acc, curr) => acc + curr.times.length, 0);
  let arrayIndex = 0;
  let countTime = 0;
  let filmItemId = 0;
  for (let i = 0; i <= timeLenght; i++) {
    if (countTime >= hallArray[arrayIndex].times.length) {
      arrayIndex++;
      countTime = 0;
      if (arrayIndex === hallArray.length) {
        break;
      }
    }
    const currentTime = hallArray[arrayIndex].times[countTime];
    const newSession = {
      title: filmArray[filmItemId].name,
      time: currentTime,
      hall: hallArray[arrayIndex].hall,
      id: filmArray[filmItemId].id,
      genres: filmArray[filmItemId].genres,
      age: filmArray[filmItemId].ageRating,
    };
    seansesArray.push(newSession);
    countTime++;
    filmItemId++;
    if (filmItemId == 9) {
      filmItemId = 0;
    }
  }

  return seansesArray.sort((a, b) => {
    return a.time - b.time;
  });
}

export function TicketsSelect(seansesArray: CardType[], title: string, time: number): CardType[] {
  return seansesArray.filter((item) => {
    if (item.title === title && item.time + 10 >= time) {
      return true;
    }
  });
}
