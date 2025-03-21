export function drawSit(x: number, y: number, overflow: boolean, ctx: CanvasRenderingContext2D) {
  const radius = 7;
  const spotLength = 34;

  ctx.beginPath();
  ctx.fillStyle = overflow ? '#a1d8f7' : '#64aed9';
  ctx.lineTo(x + spotLength - radius, y);
  ctx.quadraticCurveTo(x + spotLength, y, x + spotLength, y + radius);
  ctx.lineTo(x + spotLength, y + spotLength - radius);
  ctx.quadraticCurveTo(x + spotLength, y + spotLength, x + spotLength - radius, y + spotLength);
  ctx.lineTo(x + radius, y + spotLength);
  ctx.quadraticCurveTo(x, y + spotLength, x, y + spotLength - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.fill();
}
