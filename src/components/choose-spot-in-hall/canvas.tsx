import React, { useEffect, useRef, useState } from 'react';
import {
  drawHoverSit,
  drawAllSpots,
  drawScreen,
  width,
  height,
  onChangeTickets,
  spotsArray,
} from './functions';
import { ChangeUserTickets } from '@/store/user-tickets';

export default function Canvas() {
  const { clicketSits, setClicketSits, setDomClicketSits } = ChangeUserTickets((state) => state);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMount, setIsMount] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) throw new Error('Could not get context');
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (ctx == null) throw new Error('Could not get context');

    canvas.onmousemove = function (e: MouseEvent) {
      const x = e.offsetX;
      const y = e.offsetY;
      let draw_x = 0;
      let draw_y = 0;
      let sit = 0;
      let row = 0;
      ctx.clearRect(0, 0, width, height);
      drawScreen(ctx);
      drawAllSpots(clicketSits, spotsArray, ctx);

      for (let counter_y = 0; counter_y < spotsArray.length; counter_y++) {
        for (let counter_x = 0; counter_x < spotsArray[counter_y].length; counter_x++) {
          if (
            x >= spotsArray[counter_y][counter_x].x &&
            x < spotsArray[counter_y][counter_x].x + 34 &&
            y >= spotsArray[counter_y][counter_x].y &&
            y < spotsArray[counter_y][counter_x].y + 34 &&
            !spotsArray[counter_y][counter_x].occupied
          ) {
            draw_x = spotsArray[counter_y][counter_x].x;
            draw_y = spotsArray[counter_y][counter_x].y;
            sit = counter_x + 1;
            row = counter_y + 1;
          }
        }
      }
      if (draw_x > 0) {
        canvas.classList.add('canvas-hover');
        drawHoverSit(setClicketSits, clicketSits, draw_x, draw_y, sit, row, ctx, canvas);
      } else {
        canvas.classList.remove('canvas-hover');
      }
    };
    if (isMount) {
      drawScreen(ctx);
      drawAllSpots(clicketSits, spotsArray, ctx);
      setIsMount(false);
    } else {
      onChangeTickets(ctx, clicketSits);
    }
    setDomClicketSits(clicketSits);
  }, [clicketSits]);
  return <canvas width={width} height={height} ref={canvasRef}></canvas>;
}
