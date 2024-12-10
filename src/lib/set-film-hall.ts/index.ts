'use client';
import { FilmItemType } from '@/@types/main-films';
import { CardType, SetFilmHallType } from '@/@types/sceance-type';
import { hallArray } from './constants';
import { ChangeTicketsData } from '../../store/set-date';
export function SetFilmHall(filmArray: FilmItemType[]): SetFilmHallType {
  const date = ChangeTicketsData((state) => state.date);
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

  const newSeanseArray = seansesArray
    .sort((a, b) => {
      return a.time - b.time;
    })
    .filter((item) => {
      return item.time + 10 >= date;
    });
  function tickets(title: string): CardType[] {
    return newSeanseArray.filter((item) => {
      return item.title === title;
    });
  }
  return { seansesArray: newSeanseArray, tickets };
}
