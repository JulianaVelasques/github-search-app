import { Header } from '../components/Header';
import { ProfileCard } from '../components/ProfileCard';
import { Search } from '../components/Search';

export function Home() {
  return (
    <div>
      <Header />
      <Search />
      <ProfileCard />
    </div>
  );
}
