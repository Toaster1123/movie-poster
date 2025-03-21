interface occupied {
  id: number;
  row: number;
  col: number;
  email: string;
  hallSchemaId: number;
  createAt: Date;
}
[];
export const isSeatOccupied = (row: number, col: number, occupied: occupied[]) => {
  return occupied.some((seat) => seat.row === row && seat.col === col);
};
