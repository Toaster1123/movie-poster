export const Footer = () => {
  return (
    <footer className="flex text-white text-xs bg-[#222629]">
      <div className="max-md:px-3 max-lg:px-5 max-lg:py-4 flex w-full justify-between items-center px-10 py-5">
        <div className="flex items-center">
          <img
            src="/logo.png"
            className="max-md:mr-2 max-md:w-12 max-md:h-12 max-lg:mr-5 w-[58px] h-[58px] mr-10"
          />
          <div className="max-md:text-[10px] flex flex-col justify-center mr-6">
            <p> © 2007-2024 ООО «Проекторий». </p>
            <p> Разработано в КодМастерс. Все права защищены.</p>
            <p>
              Все сеансы начинаются с рекламно-информационного блока. Точную продолжительность
              сеансов можно уточнить в кинотеатре.
            </p>
          </div>
        </div>
        <div className="max-md:text-base text-lg">
          <a href={'/about'}>
            <p className="hover:text-stone-300 text-white cursor-pointer">О нас</p>
          </a>
          <a href={'/contacts'}>
            <p className="hover:text-stone-300 text-white cursor-pointer">Контакты</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
