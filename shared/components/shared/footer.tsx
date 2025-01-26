export const Footer = () => {
  return (
    <footer className="flex mt-auto   w-full p-7 pb-2 text-white text-xs bg-[#222629]">
      <div className="flex  w-full justify-between px-5">
        <div className="flex items-center">
          <img src="/logo.png" className="w-[58px] h-[58px]" />
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
          <a href={'/about'}>
            <p className="hover:text-stone-300  text-white cursor-pointer">О нас</p>
          </a>
          <a href={'/contacts'}>
            <p className="hover:text-stone-300  text-white cursor-pointer">Контакты</p>
          </a>
          <p className="cursor-pointer">+7 (903) 636-02-52</p>
        </div>
      </div>
    </footer>
  );
};
