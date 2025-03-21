export const isSeatSelected = (
  row: number,
  col: number,
  selectedSeat: { row: number; col: number }[],
) => {
  return selectedSeat.findIndex((seat) => seat.row === row && seat.col === col);
};
