import { Suspense } from 'react';
import { MovieList, SelectDate } from '../shared/components/shared';

export default function Home() {
  return (
    <div className="px-6 bg-slate-800">
      <Suspense fallback={<div>Загрузка...</div>}>
        <SelectDate className="ml-[13px]" />
      </Suspense>
      <MovieList isReleased={true} className="justify-center" />
    </div>
  );
}
