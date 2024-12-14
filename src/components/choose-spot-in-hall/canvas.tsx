import { useEffect, useRef } from 'react';
let SpotsArray = [
  [
    {
      x: 243,
      y: 104,
      occupied: false,
    },
    {
      x: 287,
      y: 104,
      occupied: false,
    },
    {
      x: 331,
      y: 104,
      occupied: false,
    },
    {
      x: 375,
      y: 104,
      occupied: false,
    },
    {
      x: 419,
      y: 104,
      occupied: false,
    },
    {
      x: 463,
      y: 104,
      occupied: false,
    },
    {
      x: 507,
      y: 104,
      occupied: false,
    },
    {
      x: 551,
      y: 104,
      occupied: false,
    },
    {
      x: 595,
      y: 104,
      occupied: false,
    },
    {
      x: 639,
      y: 104,
      occupied: false,
    },
    {
      x: 683,
      y: 104,
      occupied: false,
    },
  ],
  [
    {
      x: 243,
      y: 148,
      occupied: false,
    },
    {
      x: 287,
      y: 148,
      occupied: false,
    },
    {
      x: 331,
      y: 148,
      occupied: false,
    },
    {
      x: 375,
      y: 148,
      occupied: false,
    },
    {
      x: 419,
      y: 148,
      occupied: false,
    },
    {
      x: 463,
      y: 148,
      occupied: false,
    },
    {
      x: 507,
      y: 148,
      occupied: false,
    },
    {
      x: 551,
      y: 148,
      occupied: false,
    },
    {
      x: 595,
      y: 148,
      occupied: false,
    },
    {
      x: 639,
      y: 148,
      occupied: false,
    },
    {
      x: 683,
      y: 148,
      occupied: false,
    },
  ],
  [
    {
      x: 243,
      y: 192,
      occupied: false,
    },
    {
      x: 287,
      y: 192,
      occupied: false,
    },
    {
      x: 331,
      y: 192,
      occupied: false,
    },
    {
      x: 375,
      y: 192,
      occupied: false,
    },
    {
      x: 419,
      y: 192,
      occupied: false,
    },
    {
      x: 463,
      y: 192,
      occupied: false,
    },
    {
      x: 507,
      y: 192,
      occupied: false,
    },
    {
      x: 551,
      y: 192,
      occupied: false,
    },
    {
      x: 595,
      y: 192,
      occupied: false,
    },
    {
      x: 639,
      y: 192,
      occupied: false,
    },
    {
      x: 683,
      y: 192,
      occupied: false,
    },
  ],
  [
    {
      x: 243,
      y: 236,
      occupied: false,
    },
    {
      x: 287,
      y: 236,
      occupied: false,
    },
    {
      x: 331,
      y: 236,
      occupied: false,
    },
    {
      x: 375,
      y: 236,
      occupied: false,
    },
    {
      x: 419,
      y: 236,
      occupied: false,
    },
    {
      x: 463,
      y: 236,
      occupied: false,
    },
    {
      x: 507,
      y: 236,
      occupied: false,
    },
    {
      x: 551,
      y: 236,
      occupied: false,
    },
    {
      x: 595,
      y: 236,
      occupied: false,
    },
    {
      x: 639,
      y: 236,
      occupied: false,
    },
    {
      x: 683,
      y: 236,
      occupied: false,
    },
  ],
  [
    {
      x: 243,
      y: 280,
      occupied: false,
    },
    {
      x: 287,
      y: 280,
      occupied: false,
    },
    {
      x: 331,
      y: 280,
      occupied: false,
    },
    {
      x: 375,
      y: 280,
      occupied: false,
    },
    {
      x: 419,
      y: 280,
      occupied: false,
    },
    {
      x: 463,
      y: 280,
      occupied: false,
    },
    {
      x: 507,
      y: 280,
      occupied: false,
    },
    {
      x: 551,
      y: 280,
      occupied: false,
    },
    {
      x: 595,
      y: 280,
      occupied: false,
    },
    {
      x: 639,
      y: 280,
      occupied: false,
    },
    {
      x: 683,
      y: 280,
      occupied: false,
    },
  ],
  [
    {
      x: 243,
      y: 324,
      occupied: false,
    },
    {
      x: 287,
      y: 324,
      occupied: false,
    },
    {
      x: 331,
      y: 324,
      occupied: false,
    },
    {
      x: 375,
      y: 324,
      occupied: false,
    },
    {
      x: 419,
      y: 324,
      occupied: false,
    },
    {
      x: 463,
      y: 324,
      occupied: false,
    },
    {
      x: 507,
      y: 324,
      occupied: false,
    },
    {
      x: 551,
      y: 324,
      occupied: false,
    },
    {
      x: 595,
      y: 324,
      occupied: false,
    },
    {
      x: 639,
      y: 324,
      occupied: false,
    },
    {
      x: 683,
      y: 324,
      occupied: false,
    },
  ],
  [
    {
      x: 155,
      y: 368,
      occupied: false,
    },
    {
      x: 199,
      y: 368,
      occupied: false,
    },
    {
      x: 243,
      y: 368,
      occupied: false,
    },
    {
      x: 287,
      y: 368,
      occupied: false,
    },
    {
      x: 331,
      y: 368,
      occupied: false,
    },
    {
      x: 375,
      y: 368,
      occupied: false,
    },
    {
      x: 419,
      y: 368,
      occupied: false,
    },
    {
      x: 463,
      y: 368,
      occupied: false,
    },
    {
      x: 507,
      y: 368,
      occupied: false,
    },
    {
      x: 551,
      y: 368,
      occupied: false,
    },
    {
      x: 595,
      y: 368,
      occupied: false,
    },
    {
      x: 639,
      y: 368,
      occupied: false,
    },
    {
      x: 683,
      y: 368,
      occupied: false,
    },
    {
      x: 727,
      y: 368,
      occupied: false,
    },
    {
      x: 771,
      y: 368,
      occupied: false,
    },
  ],
  [
    {
      x: 155,
      y: 412,
      occupied: false,
    },
    {
      x: 199,
      y: 412,
      occupied: false,
    },
    {
      x: 243,
      y: 412,
      occupied: false,
    },
    {
      x: 287,
      y: 412,
      occupied: false,
    },
    {
      x: 331,
      y: 412,
      occupied: false,
    },
    {
      x: 375,
      y: 412,
      occupied: false,
    },
    {
      x: 419,
      y: 412,
      occupied: false,
    },
    {
      x: 463,
      y: 412,
      occupied: false,
    },
    {
      x: 507,
      y: 412,
      occupied: false,
    },
    {
      x: 551,
      y: 412,
      occupied: false,
    },
    {
      x: 595,
      y: 412,
      occupied: false,
    },
    {
      x: 639,
      y: 412,
      occupied: false,
    },
    {
      x: 683,
      y: 412,
      occupied: false,
    },
    {
      x: 727,
      y: 412,
      occupied: false,
    },
    {
      x: 771,
      y: 412,
      occupied: false,
    },
  ],
  [
    {
      x: 155,
      y: 456,
      occupied: false,
    },
    {
      x: 199,
      y: 456,
      occupied: false,
    },
    {
      x: 243,
      y: 456,
      occupied: false,
    },
    {
      x: 287,
      y: 456,
      occupied: false,
    },
    {
      x: 331,
      y: 456,
      occupied: false,
    },
    {
      x: 375,
      y: 456,
      occupied: false,
    },
    {
      x: 419,
      y: 456,
      occupied: false,
    },
    {
      x: 463,
      y: 456,
      occupied: false,
    },
    {
      x: 507,
      y: 456,
      occupied: false,
    },
    {
      x: 551,
      y: 456,
      occupied: false,
    },
    {
      x: 595,
      y: 456,
      occupied: false,
    },
    {
      x: 639,
      y: 456,
      occupied: false,
    },
    {
      x: 683,
      y: 456,
      occupied: false,
    },
    {
      x: 727,
      y: 456,
      occupied: false,
    },
    {
      x: 771,
      y: 456,
      occupied: false,
    },
  ],
];

console.log(SpotsArray);
function drawScreen(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.fillStyle = '#cfcfcf';
  ctx.lineWidth = 3.7;
  ctx.moveTo(150, 50);
  ctx.quadraticCurveTo(480, 0, 810, 50);
  ctx.lineTo(780, 67);
  ctx.quadraticCurveTo(480, 30, 180, 67);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#adadad';
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
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
}
function drawSit(x: number, y: number, ctx: CanvasRenderingContext2D) {
  const radius = 7;
  const height = 34;
  const width = 34;
  ctx.beginPath();
  ctx.fillStyle = '#64aed9';
  ctx.strokeStyle = '#64aed9';

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
function drawHoverSit(
  x: number,
  y: number,
  sit: number,
  row: number,
  ctx: CanvasRenderingContext2D,
) {
  const radius = 10;

  ctx.beginPath();
  ctx.clearRect(x, y, 34, 34);
  ctx.strokeStyle = '#64aed9';
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.lineWidth = 7;
  ctx.arc(x + 17, y + 17, 18, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = '#64aed9';
  ctx.font = 'normal 17px Arial';
  ctx.arc(x + 17, y + 17, 14, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'normal 18px Arial';
  ctx.fillText(`${sit}`, sit > 9 ? x + 16 : x + 17, y + 18);

  ctx.beginPath();
  ctx.fillStyle = 'rgba(23, 23, 23, 0.94)';
  ctx.moveTo(x + 17, y + 3);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'rgba(237, 237, 237, 1)';
  // ctx.textAlign = 'center';
  // ctx.textBaseline = 'top';
  ctx.font = '18px Arial, Helvetica, sans-serif';
  ctx.fillText(`${row} ряд, ${sit} место`, x + 17, y - 70);
  ctx.fillText(`${400} ₽`, x + 17, y - 38);
}

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const height = 520;
  const width = 960;
  useEffect(() => {
    const canvas = canvasRef.current;
    let ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    canvas.onmousemove = function (e: MouseEvent) {
      const x = e.offsetX;
      const y = e.offsetY;
      let draw_x = 0;
      let draw_y = 0;
      let sit = 0;
      let row = 0;

      for (let i = 0; i < SpotsArray.length; i++) {
        for (let j = 0; j < SpotsArray[i].length; j++) {
          ctx.clearRect(SpotsArray[i][j].x - 6, SpotsArray[i][j].y - 6, 46, 46);
          drawSit(SpotsArray[i][j].x, SpotsArray[i][j].y, ctx);
        }
      }
      for (let counter_y = 0; counter_y < SpotsArray.length; counter_y++) {
        for (let counter_x = 0; counter_x < SpotsArray[counter_y].length; counter_x++) {
          if (
            x >= SpotsArray[counter_y][counter_x].x &&
            x < SpotsArray[counter_y][counter_x].x + 34 &&
            y >= SpotsArray[counter_y][counter_x].y &&
            y < SpotsArray[counter_y][counter_x].y + 34
          ) {
            draw_x = SpotsArray[counter_y][counter_x].x;
            draw_y = SpotsArray[counter_y][counter_x].y;
            sit = counter_x + 1;
            row = counter_y + 1;
          }
        }
      }
      if (draw_x > 0) {
        drawHoverSit(draw_x, draw_y, sit, row, ctx);
      }
    };
    //shit
    for (let i = 0; i <= width; i++) {
      if (i % 30 === 0) {
        ctx.beginPath();
        ctx.font = 'normal 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(i, i, height - 2);
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.strokeStyle = '#eaeaea';
        ctx.stroke();
      }
    }
    for (let i = 0; i <= height; i++) {
      if (i % 30 === 0) {
        ctx.beginPath();
        ctx.font = 'normal 12px Arial';
        ctx.fillText(i, 10, i + 5);
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.strokeStyle = '#eaeaea';
        ctx.stroke();
      }
    }
    drawScreen(ctx);
    for (let counter_y = 0; counter_y < SpotsArray.length; counter_y++) {
      for (let counter_x = 0; counter_x < SpotsArray[counter_y].length; counter_x++) {
        drawSit(SpotsArray[counter_y][counter_x].x, SpotsArray[counter_y][counter_x].y, ctx);
      }
      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.font = 'normal 18px Arial';
      ctx.fillText(`${counter_y + 1}`, 120, (1 + counter_y) * 44 + 83);
      ctx.fillText(`${counter_y + 1}`, 840, (1 + counter_y) * 44 + 83);
    }
  }, []);
  return <canvas width={width} height={height} ref={canvasRef}></canvas>;
}
// ctx.strokeStyle = '#969696';
