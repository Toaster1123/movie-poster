export interface TOrderItem {
  row: number;
  col: number;
  time: string;
  price: number;
  hall: number;
  age: number | null;
}
export interface TOrderData {
  email: string;
  movieId: number;
  totalAmount: number;
  items: TOrderItem[];
}
