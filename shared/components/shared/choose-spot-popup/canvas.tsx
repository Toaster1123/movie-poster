'use client';
import React, { useEffect, useRef } from 'react';
import { drawAllSpots } from '../../../lib';
import { HallType } from '../../../../@types';
import { changeUserTickets } from '../../../store';

export default function Canvas({ hallData, price }: { hallData: HallType; price: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 960;
  const height = hallData.rows * 60;
  const { selectedSeat } = changeUserTickets.getState();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) throw new Error('Could not get context');
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (ctx == null) throw new Error('Could not get context');
    canvas.width = width;
    canvas.height = height;
    drawAllSpots(hallData, height, width, price, canvas, ctx);
  }, [selectedSeat]);
  return <canvas ref={canvasRef} />;
}
