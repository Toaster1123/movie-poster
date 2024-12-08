export default function About() {
  return (
    <div>
      <div className="py-1  bg-gray-300">
        <div className=" bg-gray-200 mx-10 rounded-xl shadow-xl my-4 p-6">
          <strong className="text-xl"> Кинотеатр Проекторий </strong>
          <p>улица Ленина, 15/1</p>
        </div>
      </div>
      <div className="py-7 mx-10">
        <strong className="text-3xl  ">О кинотеатре</strong>
        <img className=" h-[600px] w-[1200px] mt-4" src="/photo-cinema.jpg" alt="кинотеатр" />

        <p className="my-4 ">
          Наш пятизальнй кинотеатр располагается на улице Ленина, рядом с парком Бывалых Купидонов.
          Здесь вы можете посмотреть не только популярные блокбастеры, но и постановки известных
          мировых театров. Наши вежливые бармены готовят для вас вкуснейший попкорн, а в ожидании
          сеанса, вы и ваш ребенок сможете скоротать время в игровой зоне видео аттракционов. Мы
          устанавливаем приемлемые цены от 200 до 450 рублей, а владельцы нашей «Карты Киномана» и
          вовсе имеют возможность посещать отдельные сеансы бесплатно. <br />
          Приходите к нам смотреть кино!
        </p>
        <div className="flex justify-center">
          <img
            className="my-4 h-[500px]"
            src="https://ai-previews.123rf.com/ai-txt2img/600nwm/7be3a471-3243-4755-bb62-4aae273f6df5.jpg"
            alt="Happy people"
          />
          {/* https://ai-previews.123rf.com/ai-txt2img/600nwm/630997ef-0a32-42cc-b427-15174fd648ef.jpg */}
        </div>
        <p>Будте счасливы вместе с нами!</p>
      </div>
      <hr className="bg-black h-0.5  mx-10" />
      <div className="text-[15px] my-2 mx-10">
        <strong>ООО "ТПК"</strong>
        <p>ИНН 4025460769</p>
        <p>КПП 402501001</p>
        <p>ОГРН 1224000002676</p>
        <p>улица Ленина, 15/1, посёлок Саргазы, Сосновский район, Челябинская область</p>
        <p>
          Почтовый адрес 456531, Челябинская область, Сосновский район, посёлок Саргазы,улица
          Ленина, 15/1, оф. 201
        </p>
        <p>ОКПО 79240701</p>
        <p>ОКОГУ 4210014</p>
        <p>ОКАТО 29415000000</p>
        <p>ОКВЭД 59.14, 73.12, 73.11, 68.20.29, 68.20.2, 59.13, 59.12, 59.13</p>
        <p>ОКФС 16</p>
        <p>ОКОПФ 12300</p>
      </div>
    </div>
  );
}