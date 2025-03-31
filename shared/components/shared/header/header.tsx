'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { headerLinks } from '../../../constants';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { AuthModal } from '../auth-modal';
import { ProfileButton } from './components';
import { authModalState } from '../../../store';

export const Header = () => {
  const { openModal, setOpenModal } = authModalState((state) => state);
  const path = usePathname();
  const searchParams = useSearchParams();

  const router = useRouter();
  useEffect(() => {
    let toastMessage = '';
    if (searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправленна на почту';
    }
    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!';
    }

    if (toastMessage && router) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 300);
    }
  }, []);
  return (
    <header className="flex justify-between py-3 px-10 bg-[#222629]">
      <div className="flex-row flex">
        {headerLinks.map((name, id) => {
          return (
            <Link key={id} href={name.link}>
              <div
                className={`mr-4  text-white  text-lg border-b-[4px] border-transparent hover:border-b-lime-500 ${
                  name.link == path && 'border-b-lime-500'
                } `}>
                {name.name}
              </div>
            </Link>
          );
        })}
      </div>
      <AuthModal onClose={() => setOpenModal(false)} open={openModal} />
      <ProfileButton openModal={() => setOpenModal(true)} />
    </header>
  );
};
