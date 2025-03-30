import { redirect } from 'next/navigation';
import { prisma } from '../../prisma/prisma-client';
import { getUserSession } from '../../shared/lib';
import { MovieList, ProfileForm } from '../../shared/components/shared';

export default async function ProfilePage() {
  const session = await getUserSession();

  if (!session) {
    return redirect('/not-auth');
  }

  const user = await prisma.user.findFirst({ where: { id: Number(session?.id) } });

  if (!user) {
    return redirect('/not-auth');
  }
  const testArray = [...Array(0)];
  return (
    <div className="flex-grow h-full bg-gray-100 px-10">
      <div className="flex justify-between my-10">
        <ProfileForm data={user} />
        <div className="flex-grow flex justify-center">
          <div className="">
            <h1 className="text-2xl text-center font-medium">Просмотренные фильмы</h1>
            {testArray.length > 0 ? (
              <div className="flex gap-3">
                {testArray.map((item, id) => (
                  <div key={id} className="">
                    dsd
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-full justify-center items-center">
                <span className="text-lg text-gray-500">
                  Вы eщё не просмотрели ни одиного фильма 😓
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-3xl mb-6 font-medium">Скоро в кино</h1>
        <MovieList isReleased={false} />
      </div>
    </div>
  );
}
