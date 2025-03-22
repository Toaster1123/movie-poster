import { HallType } from '../../../@types';
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

interface SeatsType {
  x: number;
  y: number;
  row: number;
  col: number;
  colException: number;
}

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

  const { selectedSeat, setSelectedSeats, removeSelectedSeats } = changeUserTickets.getState();
  let seats: SeatsType[] = [];
  let hoveredSeat: SeatsType | null = null;

  function renderSeats() {
    seats = [];
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
            drawSit(shape_x, shape_y, selectedSeat.length >= 5, ctx);
          }
        }

        seats.push({ x: shape_x, y: shape_y, row: y + 1, col: x + 1, colException });
      }
    }
  }

  function handleSeatInteraction(seat: SeatsType, isClick = false) {
    if (isClick) {
      const index = isSeatSelected(seat.row, seat.col, selectedSeat);
      if (index !== -1) {
        removeSelectedSeats(index);
      } else if (selectedSeat.length < 5) {
        setSelectedSeats({ row: seat.row, col: seat.col, colException: seat.colException });
      }
    }
    renderSeats();
    drawCircle(
      seat.x,
      seat.y,
      seat.colException,
      isSeatSelected(seat.row, seat.col, selectedSeat) !== -1,
      ctx,
    );

    drawMessage(seat.x, seat.y, seat.row, seat.colException, price, ctx);
  }

  function handleMouseMove(e: MouseEvent) {
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
      renderSeats();
      if (hoveredSeat) handleSeatInteraction(hoveredSeat);
    }
  }

  function handleSeatClick(e: MouseEvent) {
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
  }

  canvas.addEventListener('click', handleSeatClick);
  canvas.addEventListener('mousemove', (e) => requestAnimationFrame(() => handleMouseMove(e)));
  canvas.addEventListener('mouseleave', () => {
    hoveredSeat = null;
    hoveredSeatRef.current = null;
    renderSeats();
  });

  renderSeats();

  return () => {
    canvas.removeEventListener('click', handleSeatClick);
    canvas.removeEventListener('mousemove', handleMouseMove);
    canvas.removeEventListener('mouseleave', renderSeats);
  };
}
