export const drawMessage = (
  x: number,
  y: number,
  row: number,
  sit: number,
  price: number,
  ctx: CanvasRenderingContext2D,
) => {
  //Отрисовка сообщения
  ctx.beginPath();
  ctx.fillStyle = 'rgba(23, 23, 23, 0.91)';
  ctx.moveTo(x + 17, y + 3);
  ctx.lineTo(x + 10, y - 8);
  ctx.lineTo(x - 50, y - 8);
  ctx.quadraticCurveTo(x - 60, y - 8, x - 60, y - 18);
  ctx.lineTo(x - 60, y - 90);
  ctx.quadraticCurveTo(x - 60, y - 100, x - 50, y - 100);
  ctx.lineTo(x + 80, y - 100);
  ctx.quadraticCurveTo(x + 90, y - 100, x + 90, y - 90);
  ctx.lineTo(x + 90, y - 18);
  ctx.quadraticCurveTo(x + 90, y - 8, x + 80, y - 8);
  ctx.lineTo(x + 24, y - 8);
  ctx.closePath();
  ctx.fill();

  //отрисовка текста
  ctx.beginPath();
  ctx.fillStyle = 'rgb(237, 237, 237)';
  ctx.font = '18px Arial, Helvetica, sans-serif';
  ctx.fillText(`${row} ряд, ${sit} место`, x + 17, y - 70);
  ctx.fillText(`${price} ₽`, x + 17, y - 38);
};
