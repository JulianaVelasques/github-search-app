import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { ProfileCard } from '../components/ProfileCard';
import { Search } from '../components/Search';

import api from '../service/api';

export function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    getData('JulianaVelasques');
  }, []);

  const getData = (username: string | undefined) => {
    api
      .get(`/${username}`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  };

  return (
    <div>
      <Header />
      <Search getUsername={getData} />
      <ProfileCard data={data} />
    </div>
  );
}
