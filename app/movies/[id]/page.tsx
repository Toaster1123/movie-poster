import { prisma } from '../../../prisma/prisma-client';
import { BtnBack, FilmPage } from '../../../shared/components/shared';

export async function generateMetadata({ params }: { params: Promise<{ id: number }> }) {
  const id = Number((await params).id);
  const name = await prisma.movie.findFirst({
    where: {
      id,
    },
    select: {
      name: true,
    },
  });
  return {
    title: name?.name + ' — Кинотеатр «Проекторий»',
  };
}

export default async function Movie({ params }: { params: Promise<{ id: number }> }) {
  return (
    <div className="lg:px-10 md:px-6 px-2 flex-grow h-full bg-gray-100">
      <BtnBack />
      <FilmPage id={(await params).id} />
    </div>
  );
}
