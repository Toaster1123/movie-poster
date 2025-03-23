import { SeatsType } from '../../../../@types';

export const canvasMouseClick = (
  spotLength: number,
  seats: SeatsType[],
  e: MouseEvent,
  canvas: HTMLCanvasElement,
  handleSeatInteraction: (seat: SeatsType, isClick?: boolean) => void,
) => {
  const rect = canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;
  const clickedSeat = seats.find(
    (seat) =>
      clickX >= seat.x &&
      clickX <= seat.x + spotLength &&
      clickY >= seat.y &&
      clickY <= seat.y + spotLength,
  );
  if (clickedSeat) handleSeatInteraction(clickedSeat, true);
};
