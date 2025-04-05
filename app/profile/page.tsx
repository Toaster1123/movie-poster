import { redirect } from 'next/navigation';
import { prisma } from '../../prisma/prisma-client';
import { getUserSession } from '../../shared/lib';
import { MovieList, ProfileForm } from '../../shared/components/shared';
import { TOrderItem } from '../../@types';
import { PurchasedTickets } from '../../shared/components/shared/purchased-tickets';

export default async function ProfilePage() {
  const session = await getUserSession();

  if (!session) {
    return redirect('/not-auth');
  }

  const user = await prisma.user.findFirst({ where: { id: Number(session?.id) } });

  if (!user) {
    return redirect('/not-auth');
  }
  const movies = await prisma.order.findMany({
    where: { userId: user.id },
    include: {
      movie: {
        select: {
          name: true,
        },
      },
    },
  });
  const tickets = movies.map((item) => {
    return {
      name: item.movie.name,
      date: item.createAt,
      tickets: JSON.parse(item.items as string) as TOrderItem[],
    };
  });

  return (
    <div className="md:px-10 sm:px-6 px-3 flex-grow h-full bg-gray-100">
      <div className="flex flex-wrap justify-between my-10">
        <ProfileForm data={user} />
        <PurchasedTickets allTickets={tickets} />
      </div>
      <div className="lg:mx-10 md:mx-4 mt-10">
        <h1 className="text-3xl mb-6 font-medium">Скоро в кино</h1>
        <MovieList isReleased={false} className="max-sm:p-0 max-sm:justify-center " />
      </div>
    </div>
  );
}
