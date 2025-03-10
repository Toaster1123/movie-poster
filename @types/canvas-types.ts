export type CliketSitsType = {
  x: number;
  y: number;
  sit: number;
  row: number;
};

export type SpotsArrayType = {
  x: number;
  y: number;
  occupied: boolean;
}[][];

export type CanvasDataType = {
  title: string;
  time: number;
  dimension: string;
  age: number;
  date: string;
  hall: number;
  price: number;
};
export type FetchHalls = {
  id: number;
  hall: SpotsArrayType;
};
