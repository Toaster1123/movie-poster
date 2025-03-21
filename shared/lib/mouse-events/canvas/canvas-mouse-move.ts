import { HallType } from '../../../../@types';
import { drawCircle, drawMessage, renderSeats } from '../../canvas';

interface SitType {
  x: number;
  y: number;
  row: number;
  col: number;
}
export const canvasMouseMove = (
  height: number,
  width: number,
  spotLength: number,
  seats: SitType[],
  hallData: HallType,
  e: MouseEvent,
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
) => {
  let hoveredSeat: SitType | null = null;
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  let newHoveredSeat = null;

  for (const seat of seats) {
    if (
      mouseX >= seat.x &&
      mouseX <= seat.x + spotLength &&
      mouseY >= seat.y &&
      mouseY <= seat.y + spotLength
    ) {
      newHoveredSeat = seat;
      break;
    }
  }

  if (newHoveredSeat !== hoveredSeat) {
    hoveredSeat = newHoveredSeat;
    renderSeats(height, width, spotLength, hallData, ctx);
    if (hoveredSeat) {
      drawCircle(hoveredSeat.x, hoveredSeat.y, hoveredSeat.col + 1, false, ctx);
      drawMessage(hoveredSeat.x, hoveredSeat.y, hoveredSeat.row + 1, hoveredSeat.col + 1, ctx);
    }
  }
  return hoveredSeat;
};
