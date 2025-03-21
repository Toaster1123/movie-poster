export const drawSideCount = (
  y: number,
  height: number,
  width: number,
  ctx: CanvasRenderingContext2D,
) => {
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.font = 'normal 18px Arial';
  ctx.fillText(`${y + 1}`, width / 8, (1 + y) * 44 + height / 8 + 8);
  ctx.fillText(`${y + 1}`, 840, (1 + y) * 44 + height / 8 + 8);
};
