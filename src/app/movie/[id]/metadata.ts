import type { Metadata } from 'next';

export async function generateMetadata(movieName?: string): Promise<Metadata> {
  return {
    title: `${movieName || ''} — Кинотеатр «Проекторий»`,
  };
}
