'use client';
import { useSession } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';
import { CircleUser } from 'lucide-react';

interface Props {
  openModal: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({ className, openModal }) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="h-8 w-16 bg-gray-200 rounded-lg animate-pulse" />;
  }
  return (
    <div className={className}>
      {session ? (
        <Link href={'/profile'}>
          <div className="flex items-center gap-2 text-white p-1 px-3 cursor-pointer rounded-lg">
            <CircleUser size={20} />
            Профиль
          </div>
        </Link>
      ) : (
        <div
          onClick={() => openModal()}
          className="text-white text-sm p-1 px-3 cursor-pointer rounded-lg bg-lime-600 hover:bg-lime-700">
          Войти
        </div>
      )}
    </div>
  );
};
