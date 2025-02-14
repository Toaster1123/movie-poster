import { CliketSitsType, FetchHalls, SpotsArrayType } from '@/@types/canvas-types';
import axios from 'axios';

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

export function drawScreen(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.fillStyle = '#d9d9d9';
  ctx.lineWidth = 3.7;
  ctx.moveTo(150, 50);
  ctx.quadraticCurveTo(480, 0, 810, 50);
  ctx.lineTo(780, 67);
  ctx.quadraticCurveTo(480, 30, 180, 67);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#bbb';
  ctx.lineWidth = 3.7;
  ctx.moveTo(152, 48);
  ctx.quadraticCurveTo(480, 0, 808, 48);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = '#b1b1b1';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '12px Arial';
  ctx.fillText('ЭКРАН', 480, 65);
}

export function drawSit(x: number, y: number, ctx: CanvasRenderingContext2D, overflow: boolean) {
  const radius = 7;
  const height = 34;
  const width = 34;

  ctx.beginPath();
  ctx.fillStyle = overflow ? '#a1d8f7' : '#64aed9';
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.fill();
}

export function CheckClickedSit(clicketSits: CliketSitsType[], x: number, y: number) {
  return clicketSits.some((item) => {
    return item.x === x && item.y === y;
  });
}

function drawOccupiedPlace(x: number, y: number, ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.fillStyle = '#8a8a8a';
  ctx.arc(x + 17, y + 17, 5, 0, Math.PI * 2, true);
  ctx.fill();
}

export function drawMessage(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  row: number,
  sit: number,
) {
  //Отрисовка сообщения
  ctx.beginPath();
  ctx.fillStyle = 'rgba(23, 23, 23, 0.91)';
  ctx.moveTo(x + 17, y + 3);
  ctx.lineTo(x + 10, y - 8);
  ctx.lineTo(x - 50, y - 8);
  ctx.quadraticCurveTo(x - 60, y - 8, x - 60, y - 18);
  ctx.lineTo(x - 60, y - 90);
  ctx.quadraticCurveTo(x - 60, y - 100, x - 50, y - 100);
  ctx.lineTo(x + 80, y - 100);
  ctx.quadraticCurveTo(x + 90, y - 100, x + 90, y - 90);
  ctx.lineTo(x + 90, y - 18);
  ctx.quadraticCurveTo(x + 90, y - 8, x + 80, y - 8);
  ctx.lineTo(x + 24, y - 8);
  ctx.closePath();
  ctx.fill();

  //отрисовка текста
  ctx.beginPath();
  ctx.fillStyle = 'rgb(237, 237, 237)';
  ctx.font = '18px Arial, Helvetica, sans-serif';
  ctx.fillText(`${row} ряд, ${sit} место`, x + 17, y - 70);
  ctx.fillText(`${400} ₽`, x + 17, y - 38);
}

export function drawAllSpots(
  clicketSits: CliketSitsType[],
  SpotsArray: SpotsArrayType,
  ctx: CanvasRenderingContext2D,
) {
  for (let counter_y = 0; counter_y < SpotsArray.length; counter_y++) {
    for (let counter_x = 0; counter_x < SpotsArray[counter_y].length; counter_x++) {
      const ifExist = CheckClickedSit(
        clicketSits,
        SpotsArray[counter_y][counter_x].x,
        SpotsArray[counter_y][counter_x].y,
      );
      if (!SpotsArray[counter_y][counter_x].occupied) {
        if (ifExist) {
          drawCircle(
            SpotsArray[counter_y][counter_x].x,
            SpotsArray[counter_y][counter_x].y,
            counter_x + 1,
            true,
            ctx,
          );
        } else {
          drawSit(
            SpotsArray[counter_y][counter_x].x,
            SpotsArray[counter_y][counter_x].y,
            ctx,
            clicketSits.length === 5,
          );
        }
      } else {
        drawOccupiedPlace(
          SpotsArray[counter_y][counter_x].x,
          SpotsArray[counter_y][counter_x].y,
          ctx,
        );
      }
    }
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = 'normal 18px Arial';
    ctx.fillText(`${counter_y + 1}`, 120, (1 + counter_y) * 44 + 78);
    ctx.fillText(`${counter_y + 1}`, 840, (1 + counter_y) * 44 + 78);
  }
}

export function drawCircle(
  x: number,
  y: number,
  sit: number,
  isClicked: boolean,
  ctx: CanvasRenderingContext2D,
) {
  //отрисовка бальшого белого второго круга
  ctx.beginPath();
  ctx.clearRect(x, y, 34, 34);
  ctx.strokeStyle = '#64aed9';
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.lineWidth = 7;
  ctx.arc(x + 17, y + 17, 18, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();

  //отрисовка маленького голубого круга
  ctx.beginPath();
  ctx.fillStyle = isClicked ? 'rgba(23, 23, 23, 0.93)' : ' #64aed9';
  ctx.font = 'normal 17px Arial';
  ctx.arc(x + 17, y + 17, 14, 0, Math.PI * 2, true);
  ctx.fill();

  //отрисовка места на садении
  ctx.beginPath();
  ctx.fillStyle = isClicked ? 'white' : 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'normal 18px Arial';
  ctx.fillText(`${sit}`, sit > 9 ? x + 16 : x + 17, y + 18);
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
