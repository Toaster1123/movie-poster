import { CircleChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BtnBack() {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
      className="mx-9 cursor-pointer flex items-center my-4 text-white">
      <CircleChevronLeft size={28} />
      <p className="ml-1">Назад</p>
    </div>
  );
}
