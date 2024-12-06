'use client';
import Date from '@/components/date';
import FilmItem from '@/components/film-item';
import { UseMovie } from '@/store/requests/main-film-req/async-actions';
import { useEffect } from 'react';
import ContentLoader from 'react-content-loader';

export default function Home() {
  const { fetchItems, movie, loading } = UseMovie((state) => state);
  useEffect(() => {
    fetchItems();
  }, []);
  if (loading) {
    return [...Array(8)].map((_, i) => {
      <ContentLoader
        speed={2}
        key={i}
        width={265}
        gradientRatio={30}
        height={800}
        viewBox="0 0 265 800"
        backgroundColor="#bfbfbf"
        foregroundColor="#ebebeb">
        <rect x="13" y="424" rx="10" ry="10" width="235" height="44" />
        <rect x="13" y="496" rx="10" ry="10" width="235" height="44" />
        <rect x="13" y="629" rx="10" ry="10" width="67" height="44" />
        <rect x="13" y="690" rx="10" ry="10" width="67" height="44" />
        <rect x="180" y="629" rx="10" ry="10" width="67" height="44" />
        <rect x="97" y="631" rx="10" ry="10" width="67" height="44" />
        <rect x="10" y="10" rx="10" ry="10" width="245" height="374" />
      </ContentLoader>;
    });
  }

  return (
    <div className="px-10 ">
      <Date />
      <div className="flex flex-wrap ">
        {movie.map((item, id) => {
          if (!item) {
            return null;
          }
          return (
            <div key={id} className="w-[265px] mr-4 mb-11 rounded-lg bg-white">
              <FilmItem
                id={item.id}
                image={item.poster.url}
                title={item.name}
                genres={item.genres}
                age={item.ageRating}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
