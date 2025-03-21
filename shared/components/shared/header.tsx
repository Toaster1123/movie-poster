'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const categories = [
  { name: 'Афиша', link: '/' },
  { name: 'Сеансы', link: '/seances' },
  { name: 'О нас', link: '/about' },
  { name: 'Контакты', link: '/contacts' },
];
export const Header = () => {
  const path = usePathname();
  return (
    <header className="flex justify-between py-3 px-10 bg-[#222629]">
      <div className="flex-row flex">
        {categories.map((name, id) => {
          return (
            <Link key={id} href={name.link}>
              <div
                className={`mr-4  text-white  text-lg border-b-[4px]  border-transparent hover:border-b-lime-500 ${
                  name.link == path && 'border-b-lime-500'
                } `}>
                {name.name}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="text-white text-sm p-1 px-3 cursor-pointer   rounded-lg bg-lime-600 hover:bg-lime-700">
        Войти
      </div>
    </header>
  );
};
