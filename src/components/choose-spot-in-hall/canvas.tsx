import { useEffect, useRef } from 'react';
import { drawHoverSit, drawAllSpots, drawScreen, width, height } from './functions';
export const SpotsArray = [
  [
    {
      x: 243,
      y: 104,
      occupied: true,
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

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    canvas.onmousemove = function (e: MouseEvent) {
      const x = e.offsetX;
      const y = e.offsetY;
      let draw_x = 0;
      let draw_y = 0;
      let sit = 0;
      let row = 0;
      ctx.clearRect(0, 0, width, height);
      drawScreen(ctx);
      drawAllSpots(SpotsArray, ctx);

      for (let counter_y = 0; counter_y < SpotsArray.length; counter_y++) {
        for (let counter_x = 0; counter_x < SpotsArray[counter_y].length; counter_x++) {
          if (
            x >= SpotsArray[counter_y][counter_x].x &&
            x < SpotsArray[counter_y][counter_x].x + 34 &&
            y >= SpotsArray[counter_y][counter_x].y &&
            y < SpotsArray[counter_y][counter_x].y + 34 &&
            !SpotsArray[counter_y][counter_x].occupied
          ) {
            draw_x = SpotsArray[counter_y][counter_x].x;
            draw_y = SpotsArray[counter_y][counter_x].y;
            sit = counter_x + 1;
            row = counter_y + 1;
          }
        }
      }
      if (draw_x > 0) {
        canvas.classList.add('canvas-hover');
        drawHoverSit(draw_x, draw_y, sit, row, ctx, canvas);
      } else {
        canvas.classList.remove('canvas-hover');
      }
    };
    //shit
    // for (let i = 0; i <= width; i++) {
    //   if (i % 30 === 0) {
    //     ctx.beginPath();
    //     ctx.font = 'normal 12px Arial';
    //     ctx.textAlign = 'center';
    //     ctx.fillText(i, i, height - 2);
    //     ctx.moveTo(i, 0);
    //     ctx.lineTo(i, height);
    //     ctx.strokeStyle = '#eaeaea';
    //     ctx.stroke();
    //   }
    // }
    // for (let i = 0; i <= height; i++) {
    //   if (i % 30 === 0) {
    //     ctx.beginPath();
    //     ctx.font = 'normal 12px Arial';
    //     ctx.fillText(i, 10, i + 5);
    //     ctx.moveTo(0, i);
    //     ctx.lineTo(width, i);
    //     ctx.strokeStyle = '#eaeaea';
    //     ctx.stroke();
    //   }
    // }
    drawScreen(ctx);
    drawAllSpots(SpotsArray, ctx);
  }, []);
  return <canvas width={width} height={height} ref={canvasRef}></canvas>;
}
