// src/app/movie/[id]/layout.tsx
'use client';

import { UseMovieById } from '@/store/requests/film-by-id/async-actions';
import { generateMetadata } from './metadata';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
const movie = UseMovieById((state) => state.movie);

export const metadata = generateMetadata(movie.name);
