'use client';

export const YandexMap = () => {
  const mapUrl = `https://yandex.ru/map-widget/v1/?ll=61.249373%2C55.022825&z=16&pt=61.249373,55.022825,pm2rdm`;

  return (
    <div className="h-[240px] sm:h-[300px] md:h-[400px] w-full">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  );
};
