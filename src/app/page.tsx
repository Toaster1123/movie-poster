import FilmItem from '@/components/film-item';
import Date from '@/components/main/date';

export default function Home() {
  return (
    <div className="px-10">
      <Date />
      <div className="flex flex-wrap ">
        {[...Array(7)].map((item, id) => {
          return (
            <div key={id}>
              <FilmItem />
            </div>
          );
        })}
      </div>
    </div>
  );
}
