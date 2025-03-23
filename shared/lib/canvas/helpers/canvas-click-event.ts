import { SeatsType } from '../../../../@types';
import { changeUserTickets } from '../../../store';
import { isSeatSelected } from './is-seat-selected';

export const canvasClickEvent = (seat: SeatsType) => {
  const { selectedSeat, setSelectedSeats, removeSelectedSeats } = changeUserTickets.getState();
  const index = isSeatSelected(seat.row, seat.col, selectedSeat);
  if (index !== -1) {
    removeSelectedSeats(index);
  } else if (selectedSeat.length < 5) {
    setSelectedSeats({ row: seat.row, col: seat.col, colException: seat.colException });
  }
};
