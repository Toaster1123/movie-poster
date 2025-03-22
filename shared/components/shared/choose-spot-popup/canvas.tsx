'use client';
import React, { useEffect, useRef } from 'react';
import { drawAllSpots, drawCircle, drawMessage } from '../../../lib';
import { HallType } from '../../../../@types';
import { changeUserTickets } from '../../../store';

export default function Canvas({ hallData, price }: { hallData: HallType; price: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoveredSeatRef = useRef(null);
  const width = 960;
  const height = hallData.rows * 60;
  const { selectedSeat } = changeUserTickets((state) => state);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (ctx == null) return;
    canvas.width = width;
    canvas.height = height;

    const cleanUp = drawAllSpots(hallData, height, width, price, hoveredSeatRef, canvas, ctx);

    if (hoveredSeatRef.current) {
      const seat = hoveredSeatRef.current;
      drawMessage(seat.x, seat.y, seat.row, seat.colException, price, ctx);
    }

    return () => {
      cleanUp();
    };
  }, [selectedSeat]);

  return <canvas ref={canvasRef} />;
}
