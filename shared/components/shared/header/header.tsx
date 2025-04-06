'use client';
import { usePathname } from 'next/navigation';
import { headerLinks } from '../../../constants';
import { AuthModal } from '../auth-modal';
import { LinkItem, ProfileButton } from './components';
import { authModalState } from '../../../store';
import { useHeaderNotifications } from 'shared/hooks';
import { useEffect, useState } from 'react';
import { AlignJustify } from 'lucide-react';

export const Header = () => {
  const { openModal, setOpenModal } = authModalState((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  useHeaderNotifications();
  return (
    <header className="flex justify-between py-5 sm:px-10 px-3 bg-[#222629]">
      <div className="sm:hidden">
        <AlignJustify
          size={32}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl focus:outline-none"
        />
      </div>
      <div className="sm:flex sm:gap-4 hidden flex-row">
        {headerLinks.map((item, id) => (
          <LinkItem key={id} link={item.link} name={item.name} path={path} />
        ))}
      </div>
      {isMenuOpen && (
        <div className="max-sm:block hidden absolute top-14 left-0 w-1/2 bg-[#222629] z-50 gap-4">
          {headerLinks.map(({ name, link }, id) => (
            <LinkItem key={id} link={link} name={name} path={path} />
          ))}
        </div>
      )}
      {openModal && <AuthModal onClose={() => setOpenModal(false)} />}
      <ProfileButton openModal={() => setOpenModal(true)} />
    </header>
  );
};
