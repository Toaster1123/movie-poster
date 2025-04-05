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
        className="max-sm:text-sm cursor-pointer flex rounded-2xl py-2 px-4 items-center bg-[#31373b] my-4 text-white">
        <CircleChevronLeft className="max-sm:h-6 max-sm:w-6 h-7 w-7" />
        <p className="ml-1">Назад</p>
      </div>
    </div>
  );
};
