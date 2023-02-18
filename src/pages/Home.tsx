import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { ProfileCard } from '../components/ProfileCard';
import { Search } from '../components/Search';

import api from '../service/api';

export function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get('/JulianaVelasques')
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  console.log('daaata', data);

  return (
    <div>
      <Header />
      <Search />
      <ProfileCard data={data} />
    </div>
  );
}
