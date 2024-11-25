import FilmItem from '@/components/film-item';
import Date from '@/components/main/date';

export default function Home() {
  return (
    <div className="px-10">
      <Date />
      <FilmItem />
    </div>
  );
}
