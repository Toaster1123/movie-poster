import axios from 'axios';
import { CliketSitsType, FetchHalls, SpotsArrayType } from '../../../../@types/canvas-types';

let cliked: {
  x: number;
  y: number;
  sit: number;
  row: number;
  isClick: boolean;
} = { x: 0, y: 0, sit: 0, row: 0, isClick: false };

export const fetchHall = async (id: number) => {
  try {
    const hallID = id <= 3 ? 1 : 2;
    const { data } = await axios.get<FetchHalls>(
      'https://d1258192d0a72ca0.mokky.dev/movie-hals/' + hallID,
    );
    return data.hall;
  } catch (error) {
    console.error(error);
  }
};

export function CheckClickedSit(clicketSits: CliketSitsType[], x: number, y: number) {
  return clicketSits.some((item) => {
    return item.x === x && item.y === y;
  });
}

export function drawHoverSit(
  setClicketSits: (state: CliketSitsType[]) => void,
  clicketSits: CliketSitsType[],
  x: number,
  y: number,
  sit: number,
  row: number,
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  spotsArray: SpotsArrayType,
) {
  canvas.onmousedown = function (e: MouseEvent) {
    const clix_x = e.offsetX;
    const clix_y = e.offsetY;
    if (clix_x >= x && clix_y >= y && clix_x <= x + 44 && clix_y <= y + 44) {
      ctx.clearRect(0, 0, width, height);
      drawScreen(ctx);

      if (
        clicketSits.find((item) => {
          return item.x == x && item.y == y;
        }) == undefined
      ) {
        if (clicketSits.length < 5) {
          clicketSits.push({ x, y, sit, row });
        }
      } else {
        cliked = { x, y, row, sit, isClick: true };
        clicketSits = clicketSits.filter((item) => {
          return item.x !== x || item.y !== y;
        });
      }
      setClicketSits(clicketSits);
      drawAllSpots(clicketSits, spotsArray, ctx);
      drawCircle(x, y, sit, CheckClickedSit(clicketSits, x, y), ctx);
      drawMessage(ctx, x, y, row, sit);
    }
  };
  drawCircle(x, y, sit, CheckClickedSit(clicketSits, x, y), ctx);
  drawMessage(ctx, x, y, row, sit);
}
export function onChangeTickets(
  ctx: CanvasRenderingContext2D,
  clicketSits: CliketSitsType[],
  width: number,
  height: number,
  spotsArray: SpotsArrayType,
) {
  ctx.clearRect(0, 0, width, height);
  drawScreen(ctx);
  drawAllSpots(clicketSits, spotsArray, ctx);
  if (cliked.isClick) {
    drawCircle(
      cliked.x,
      cliked.y,
      cliked.sit,
      CheckClickedSit(clicketSits, cliked.x, cliked.y),
      ctx,
    );
    drawMessage(ctx, cliked.x, cliked.y, cliked.row, cliked.sit);
    cliked = { x: 0, y: 0, sit: 0, row: 0, isClick: false };
  }
}
