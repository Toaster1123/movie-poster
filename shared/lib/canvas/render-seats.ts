import { HallType } from '../../../@types';
import { drawOccupiedPlace, drawSideCount, drawSit } from './canvas-shapes';

export const renderSeats = (
  height: number,
  width: number,
  spotLength: number,

  hallData: HallType,
  ctx: CanvasRenderingContext2D,
) => {
  ctx.clearRect(0, 0, width, height);
  const margin = 5;
  const step = spotLength + margin * 2;
  const seats: { x: number; y: number; row: number; col: number }[] = [];
  for (let y = 0; y < hallData.rows; y++) {
    drawSideCount(y, height, width, ctx);
    for (let x = 0; x < hallData.cols; x++) {
      const isException = hallData.exceptions.some(
        (exception) =>
          exception.first_cols <= x + 1 &&
          exception.first_row <= y + 1 &&
          exception.last_cols >= x + 1 &&
          exception.last_row >= y + 1,
      );
      if (isException) continue;
      const isOccupied = hallData.occupied.some(
        (occupied) => occupied.col === x + 1 && occupied.row === y + 1,
      );
      const shape_x = x * step + (width - hallData.cols * step) / 2 + margin;
      const shape_y = y * step + spotLength + height / 8;
      if (isOccupied) {
        drawOccupiedPlace(shape_x, shape_y, ctx);
      } else {
        drawSit(shape_x, shape_y, false, ctx);
        seats.push({ x: shape_x, y: shape_y, row: y + 1, col: x + 1 });
      }
    }
  }
  return seats;
};
