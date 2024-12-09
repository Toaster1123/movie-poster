import Date from '@/components/date';
import SeanceCard from '@/components/seance-card';
import { fetchData } from '@/lib/fetch-films';

export default async function Seances() {
  const movie = await fetchData();

  return (
    <div className="bg-gray-100">
      <div className="bg-gray-300 px-10">
        <Date />
      </div>
      <div className="mx-10">
        {[...Array(7)].map((item, id) => (
          <div className={`${id > 0 && 'border-t-[1px]  border-slate-300'}`}>
            <SeanceCard
              key={id}
              id={6462565}
              title={'Название'}
              age={12}
              genres={[
                {
                  name: 'приключения',
                },
                {
                  name: 'мелодрама',
                },
              ]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
