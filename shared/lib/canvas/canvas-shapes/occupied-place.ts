export const drawOccupiedPlace = (x: number, y: number, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.fillStyle = '#8a8a8a';
  ctx.arc(x + 17, y + 17, 5, 0, Math.PI * 2);
  ctx.fill();
};
