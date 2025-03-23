import { SeatsType } from '../../../../@types';

export const canvasMouseMove = (
  spotLength: number,
  seats: SeatsType[],
  hoveredSeat: SeatsType | null,
  hoveredSeatRef: React.MutableRefObject<SeatsType | null>,
  e: MouseEvent,
  canvas: HTMLCanvasElement,
  handleSeatInteraction: (seat: SeatsType, isClick?: boolean) => void,
) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const newHoveredSeat =
    seats.find(
      (seat) =>
        mouseX >= seat.x &&
        mouseX <= seat.x + spotLength &&
        mouseY >= seat.y &&
        mouseY <= seat.y + spotLength,
    ) || null;
  if (newHoveredSeat !== hoveredSeat) {
    hoveredSeat = newHoveredSeat;
    hoveredSeatRef.current = hoveredSeat;
    if (hoveredSeat) handleSeatInteraction(hoveredSeat);
  }
  return hoveredSeat;
};
