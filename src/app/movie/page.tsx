'use client';
import { CircleChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function Movie() {
  const router = useRouter();

  return (
    <div>
      <div
        onClick={() => {
          router.back();
        }}
        className="cursor-pointer flex items-center my-2 text-white">
        <CircleChevronLeft size={28} />
        <p className="ml-1">Назад</p>
      </div>
    </div>
  );
}
