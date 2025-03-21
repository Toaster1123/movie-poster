export function drawScreen(width: number, ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.fillStyle = '#d9d9d9';
  ctx.lineWidth = 3.7;
  ctx.moveTo(150, 50);
  ctx.quadraticCurveTo(width / 2, 0, 810, 50);
  ctx.lineTo(780, 67);
  ctx.quadraticCurveTo(width / 2, 30, 180, 67);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#bbb';
  ctx.lineWidth = 3.7;
  ctx.moveTo(152, 48);
  ctx.quadraticCurveTo(width / 2, 0, 808, 48);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = '#b1b1b1';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '12px Arial';
  ctx.fillText('ЭКРАН', width / 2, 65);
}
