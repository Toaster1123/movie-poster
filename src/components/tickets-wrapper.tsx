'use client';
import React from 'react';
import { FilmItemType } from '@/@types/main-films';
import { SetFilmHall } from '@/lib/set-film-hall.ts';
import { ChangeSeanse } from '@/store/tickets';
export default function TicketsWrapper({
  children,
  movie,
}: {
  children: React.ReactNode;
  movie: FilmItemType[];
}) {
  const setSeansesArray = ChangeSeanse((state) => state.setSeansesArray);

  React.useEffect(() => {
    setSeansesArray(SetFilmHall(movie));
  }, []);

  return <div>{children}</div>;
}
