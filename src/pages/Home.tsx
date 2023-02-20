import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { ProfileCard } from '../components/ProfileCard';
import { Search } from '../components/Search';

import api from '../service/api';

export function Home() {
  const [data, setData] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    getData('JulianaVelasques');
  }, []);

  const getData = (username: string | undefined) => {
    api
      .get(`/${username}`)
      .then((response) => {
        setStatus('');
        setData(response.data);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
        setStatus(err.response.data.message);
      });
  };

  return (
    <div className="w-[327px] md:w-[573px] lg:w-[730px] mx-auto my-0 ">
      <Header />
      <Search getUsername={getData} status={status} />
      <ProfileCard data={data} />
    </div>
  );
}
