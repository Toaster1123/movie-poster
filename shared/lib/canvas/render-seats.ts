import { HallType, SeatsType } from '../../../@types';
import { changeUserTickets } from '../../store';
import {
  drawCircle,
  drawMessage,
  drawOccupiedPlace,
  drawSideCount,
  drawSit,
} from './canvas-shapes';
import { drawScreen } from './draw-screen';
import { isSeatOccupied, isSeatSelected } from './helpers';

export const renderSeats = (
  height: number,
  width: number,
  spotLength: number,
  step: number,
  margin: number,
  price: number,
  hoveredSeatRef: React.MutableRefObject<SeatsType | null>,
  hallData: HallType,
  ctx: CanvasRenderingContext2D,
) => {
  const selectedSeat = changeUserTickets.getState().selectedSeat;

  let seats: SeatsType[] = [];
  ctx.clearRect(0, 0, width, height);
  drawScreen(width, ctx);

  for (let y = 0; y < hallData.rows; y++) {
    drawSideCount(y, height, width, ctx);
    let exceptionCount = 0;

    for (let x = 0; x < hallData.cols; x++) {
      const isException = hallData.exceptions.some(
        (exc) =>
          exc.first_cols <= x + 1 &&
          exc.first_row <= y + 1 &&
          exc.last_cols >= x + 1 &&
          exc.last_row >= y + 1,
      );
      if (isException) {
        exceptionCount++;
        continue;
      }

      const shape_x = x * step + (width - hallData.cols * step) / 2 + margin;
      const shape_y = y * step + spotLength + height / 8;
      const colException = x + 1 - exceptionCount;

      if (isSeatOccupied(y + 1, x + 1, hallData.occupied)) {
        drawOccupiedPlace(shape_x, shape_y, ctx);
      } else {
        const selectedIndex = isSeatSelected(y + 1, x + 1, selectedSeat);

        if (selectedIndex !== -1) {
          drawCircle(shape_x, shape_y, colException, true, ctx);
        } else {
          if (hoveredSeatRef.current?.x === shape_x && hoveredSeatRef.current?.y === shape_y) {
            const seat = hoveredSeatRef.current;
            drawCircle(seat.x, seat.y, seat.colException, false, ctx);
          } else {
            drawSit(shape_x, shape_y, selectedSeat.length >= 5, ctx);
          }
        }
        seats.push({ x: shape_x, y: shape_y, row: y + 1, col: x + 1, colException });
        if (hoveredSeatRef.current?.col === x + 1 && hoveredSeatRef.current?.row === y + 1) {
          const seat = hoveredSeatRef.current;
          drawMessage(seat.x, seat.y, seat.row, seat.colException, price, ctx);
        }
      }
    }
  }
  return seats;
};
