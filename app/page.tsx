import { MovieList, SelectDate } from '../shared/components/shared';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="px-6 bg-slate-800">
      <Suspense>
        <SelectDate className="ml-[13px]" />
      </Suspense>
      <MovieList />
    </div>
  );
}
