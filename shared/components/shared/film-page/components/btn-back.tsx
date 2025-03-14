'use client';
import { CircleChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const BtnBack = () => {
  const router = useRouter();
  return (
    <div className="flex items-center">
      <div
        onClick={() => {
          router.back();
        }}
        className="mx-11 cursor-pointer flex rounded-2xl py-2 px-4  items-center bg-[#31373b] my-4 text-white">
        <CircleChevronLeft size={28} />
        <p className="ml-1">Назад</p>
      </div>
    </div>
  );
};
