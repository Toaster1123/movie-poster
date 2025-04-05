import { Suspense } from 'react';
import { MovieList, SelectDate } from '../shared/components/shared';

export default function Home() {
  return (
    <div className="bg-slate-800">
      <Suspense fallback={<div>Загрузка...</div>}>
        <SelectDate className="sm:px-[36px] max-sm:px-2 py-5" />
      </Suspense>
      <MovieList isReleased={true} className="justify-center sm:px-6" />
    </div>
  );
}
