import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex mt-auto   w-full p-7 pb-2 text-white text-xs bg-[#222629]">
      <div className="flex  w-full justify-between px-5">
        <div className="flex">
          <img src="/logo.svg" height={58} width={58} alt="" />
          <div className="pl-6 flex flex-col mt-4 justify-center">
            <p> © 2007-2024 ООО «Проекторий». </p>
            <p> Разработано в КодМастерс. Все права защищены.</p>
            <p>
              Все сеансы начинаются с рекламно-информационного блока. Точную продолжительность
              сеансов можно уточнить в кинотеатре.
            </p>
          </div>
        </div>
        <div className="text-lg">
          <Link href={'/about'}>
            <p className="hover:text-stone-300  text-white cursor-pointer">О нас</p>
          </Link>
          <Link href={'/contacts'}>
            <p className="hover:text-stone-300  text-white cursor-pointer">Контакты</p>
          </Link>

          <p className="cursor-pointer">+7 (903) 636-02-52</p>
        </div>
      </div>
    </footer>
  );
}
