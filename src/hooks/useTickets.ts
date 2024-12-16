import { CliketSitsType } from '@/@types/canvas-types';
import React from 'react';

export const useTickets = () => {
  const [clicketSits, setClicketSits] = React.useState<[] | CliketSitsType[]>([]);
  React.useEffect(() => {
    console.log('Новое значение clicketSits:', clicketSits);
  }, [clicketSits]);
  function changeTicketsArray(index: number, x: number, y: number, sit: number, row: number) {
    // if (index !== -1) {
    //   cliketSits.splice(index, 1);
    // } else {
    //   if (cliketSits.length < 5) {
    //     cliketSits.push({
    //       x: x,
    //       y: y,
    //       sit: sit,
    //       row: row,
    //     });
    //   }
    // }

    console.log(index);
    if (index !== -1) {
      setClicketSits((prev) => [...prev.splice(index, 1)]);
    } else {
      if (clicketSits.length < 5) {
        setClicketSits((prev) => [...prev, { x, y, sit, row }]);
      }
    }
  }
  return { clicketSits, changeTicketsArray };
};
