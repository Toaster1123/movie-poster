'use client';
import Date from '@/components/date';
import TicketsPicker from '@/components/tickets-picker';
import { UseMovieById } from '@/store/requests/film-by-id/async-actions';
import { CircleChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default async function Movie({ params }: { params: { id: number } }) {
  const { fetchItems, movie, loading } = UseMovieById((state) => state);
  useEffect(() => {
    const req = async () => {
      const req = await fetchItems(params.id);
    };
    req();
  }, []);

  console.log(movie);
  const router = useRouter();
  return (
    <div className="bg-gray-200">
      <div
        onClick={() => {
          router.back();
        }}
        className="mx-9 cursor-pointer flex items-center my-4 text-white">
        <CircleChevronLeft size={28} />
        <p className="ml-1">Назад</p>
      </div>
      <div>
        <div>
          <img className="w-[265px] h-[374px] " src={'image'} alt="картинка" />
        </div>
        <div>
          <div className=""></div>
          <div className="">{'title'}</div>
          <Date />
          <TicketsPicker />
        </div>
      </div>
    </div>
  );
}
