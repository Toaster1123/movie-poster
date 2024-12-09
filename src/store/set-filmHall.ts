import { FilmItem } from '@/@types/main-films';
import { CardType } from '@/@types/sceance-type';

export const date = 1300;
// export const date = new Date().getHours() * 60 + new Date().getMinutes();

const seansesArray: CardType[] = [];
export const hallArray = [
  [635, 755, 875, 995, 1120, 1245, 1340],
  [620, 745, 870, 1000, 1120, 1240, 1360],
  [655, 775, 905, 1020, 1140, 1270],
  [600, 720, 835, 960, 1075, 1190, 1330],
  [620, 740, 855, 995, 1120, 1350],
];
const objHall = hallArray.map((item) =>
  item.filter((item) => {
    return item + 15 >= date;
  }),
);

export async function SetFilmHall(filmArray: FilmItem[]) {
  objHall.map((item, i) => {
    filmArray.map((filmItem) => {
      if (item[0] == undefined) {
        return;
      }
      const newSession = {
        title: filmItem.name,
        time: 0,
        hall: i,
        id: filmItem.id,
        genres: filmItem.genres,
        age: filmItem.ageRating,
      };
      seansesArray.push(newSession);
      objHall[i].splice(0, 1);
    });
  });
  let itemId = 0;
  console.log('seansesArray', seansesArray);

  const setTime = await function () {
    let arrayActiveHall = hallArray.map((item) => {
      return item.filter((itemArray) => {
        return itemArray + 15 >= date;
      });
    });
    arrayActiveHall = arrayActiveHall.filter((item) => {
      return item.length > 0;
    });
    console.log('arrayActiveHall', arrayActiveHall);
    for (let arrId = 0; arrId < seansesArray.length; arrId++) {
      for (let rowId = 0; rowId < hallArray[arrId].length; rowId++) {
        if (itemId > arrayActiveHall.length - 1) {
          return;
        }
        console.log(arrayActiveHall[arrId][rowId]);
        if (arrayActiveHall[arrId][rowId] == undefined) {
          return;
        }
        console.log('arrId', arrId);
        console.log('rowId', rowId);
        seansesArray[itemId].time = arrayActiveHall[arrId][rowId];
        itemId++;
      }
    }
  };
  await setTime();
  seansesArray.sort((a, b) => {
    return a.time - b.time;
  });
  return seansesArray;
}
