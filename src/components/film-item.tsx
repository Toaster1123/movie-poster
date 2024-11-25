export default function FilmItem() {
  return (
    <div className="w-[265px] rounded-2xl overflow-hidden">
      <div>
        <img
          src="https://s1ru1.kinoplan24.ru/840/04060605069f46a6e482cc79/21295.jpg?mode=fit&width=512&height=512"
          alt="картинка "
          width={265}
          height={374}
        />
      </div>
      <div className="bg-white rounded-b-2xl pl-3">
        <p className="text-2xl font-black py-2">Зять</p>
        <div className=" flex">
          <div className="bg-gray-200 py-1 px-2 rounded-md ">16+</div>
          <div className="bg-gray-200 py-1 px-2 rounded-md ml-1">комедия</div>
        </div>
        <div className="flex flex-wrap">
          {[...Array(4)].map((item, id) => {
            return (
              <div key={id} className="cursor-pointer py-3 w-fit mr-3">
                <p className="text-white py-1 px-3 bg-[#86c232] font-black text-lg">10:45</p>
                <div className="flex text-sm justify-around border-[1px] border-[#86c232]">
                  <p>3D</p>
                  <p>300₽</p>
                </div>
                <p className="text-center pt-1">Зал 3</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
