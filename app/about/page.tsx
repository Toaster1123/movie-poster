import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="py-1 bg-gray-300">
        <div className="md:mx-10 sm:mx-6 mx-3 bg-gray-200 rounded-xl shadow-xl my-4 p-6">
          <strong className="sm:text-xl text-lg"> Кинотеатр Проекторий </strong>
          <p>улица Ленина, 15/1</p>
        </div>
      </div>
      <div className="md:px-10 sm:px-6 px-3 py-7 bg-gray-100">
        <strong className="md:text-3xl sm:text-2xl text-xl">О кинотеатре</strong>
        <div className="sm:mt-4 w-full h-auto mt-2">
          <Image src="/photo-cinema.jpg" alt="кинотеатр" fill className="object-cover" />
        </div>

        <p className="my-4">
          Наш пятизальнй кинотеатр располагается на улице Ленина, рядом с парком Бывалых Купидонов.
          Здесь вы можете посмотреть не только популярные блокбастеры, но и постановки известных
          мировых театров. Наши вежливые бармены готовят для вас вкуснейший попкорн, а в ожидании
          сеанса, вы и ваш ребенок сможете скоротать время в игровой зоне видео аттракционов. Мы
          устанавливаем приемлемые цены от 200 до 450 рублей, а владельцы нашей «Карты Киномана» и
          вовсе имеют возможность посещать отдельные сеансы бесплатно. <br />
          Приходите к нам смотреть кино!
        </p>
        <div className="sm:mt-4 w-full h-auto mt-2">
          <Image
            src="https://ai-previews.123rf.com/ai-txt2img/600nwm/7be3a471-3243-4755-bb62-4aae273f6df5.jpg"
            alt="Happy people"
            fill
            className="object-cover"
          />
        </div>
        <p>Будте счасливы вместе с нами!</p>
      </div>
      <hr className="border-0 bg-gray-500 h-0.5 w-full" />
      <div className="md:px-10 sm:px-6 px-3 text-[15px] pt-2 bg-gray-100">
        <strong>ООО &quot;ТПК&quot;</strong>
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
