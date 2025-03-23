import { HallType, SeatsType } from '../../../@types';
import { canvasMouseClick, canvasMouseMove } from '../mouse-events';
import { canvasClickEvent } from './helpers';
import { renderSeats } from './render-seats';

export function drawAllSpots(
  hallData: HallType,
  height: number,
  width: number,
  price: number,
  hoveredSeatRef: React.MutableRefObject<SeatsType | null>,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
) {
  const spotLength = 34;
  const margin = 5;
  const step = spotLength + margin * 2;

  let hoveredSeat: SeatsType | null = null;
  const seats = renderSeats(
    height,
    width,
    spotLength,
    step,
    margin,
    price,
    hoveredSeatRef,
    hallData,
    ctx,
  );

  function handleSeatInteraction(seat: SeatsType, isClick = false) {
    if (isClick) canvasClickEvent(seat);
    renderSeats(height, width, spotLength, step, margin, price, hoveredSeatRef, hallData, ctx);
  }

  function handleMouseMove(e: MouseEvent) {
    hoveredSeat = canvasMouseMove(
      spotLength,
      seats,
      hoveredSeat,
      hoveredSeatRef,
      e,
      canvas,
      handleSeatInteraction,
    );
    renderSeats(height, width, spotLength, step, margin, price, hoveredSeatRef, hallData, ctx);
  }

  function handleSeatClick(e: MouseEvent) {
    canvasMouseClick(spotLength, seats, e, canvas, handleSeatInteraction);
  }

  canvas.addEventListener('click', handleSeatClick);
  canvas.addEventListener('mousemove', (e) => requestAnimationFrame(() => handleMouseMove(e)));
  canvas.addEventListener('mouseleave', () => {
    hoveredSeat = null;
    hoveredSeatRef.current = null;
  });
  return () => {
    canvas.removeEventListener('click', handleSeatClick);
    canvas.removeEventListener('mousemove', handleMouseMove);
    canvas.removeEventListener('mouseleave', () => {
      renderSeats(height, width, spotLength, step, margin, price, hoveredSeatRef, hallData, ctx);
    });
  };
}
