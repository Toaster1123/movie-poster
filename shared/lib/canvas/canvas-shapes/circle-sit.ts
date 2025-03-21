export const drawCircle = (
  x: number,
  y: number,
  sit: number,
  isClicked: boolean,
  ctx: CanvasRenderingContext2D,
) => {
  //отрисовка бальшого белого второго круга
  ctx.beginPath();
  ctx.clearRect(x, y, 34, 34);
  ctx.strokeStyle = '#64aed9';
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.lineWidth = 7;
  ctx.arc(x + 17, y + 17, 18, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();

  //отрисовка маленького голубого круга
  ctx.beginPath();
  ctx.fillStyle = isClicked ? 'rgba(23, 23, 23, 0.93)' : ' #64aed9';
  ctx.font = 'normal 17px Arial';
  ctx.arc(x + 17, y + 17, 14, 0, Math.PI * 2, true);
  ctx.fill();

  //отрисовка места на садении
  ctx.beginPath();
  ctx.fillStyle = isClicked ? 'white' : 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'normal 18px Arial';
  ctx.fillText(`${sit}`, sit > 9 ? x + 16 : x + 17, y + 18);
};
