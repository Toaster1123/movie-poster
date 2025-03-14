import { MovieList, SelectDate } from '../shared/components/shared';

export default function Home() {
  return (
    <div className="px-6 bg-slate-800">
      <SelectDate className="ml-[13px]" />
      <MovieList />
    </div>
  );
}
