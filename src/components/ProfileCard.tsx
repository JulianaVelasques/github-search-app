import moment from 'moment';
import Profile from '../assets/profile.svg';
import { Links } from './Links';

interface dataProfile {
  data: {
    name?: string;
    avatar_url?: string;
    followers?: number;
    following?: number;
    public_repos?: number;
    login?: string;
    bio?: string;
    location?: string;
    company?: string;
    html_url?: string;
    twitter_username?: string;
    created_at?: Date;
  };
}

export function ProfileCard({ data }: dataProfile) {
  return (
    <div className="bg-white dark:bg-back-dark-mode shadow-md rounded-2xl px-6 py-8 text-[13px]">
      <div className="flex justify-start items-center gap-5 mb-8">
        <img src={data.avatar_url} alt="" width={70} className="rounded-full" />

        <div>
          <p className="font-bold text-base text-dark-mode  dark:text-white ">
            {data.name}
          </p>
          <p className="text-tertiary-blue mb-1">@{data.login}</p>

          <p className="text-secondary-font-grey  dark:text-white ">
            {`Joined ${moment(data.created_at).format('d MMMM YYYY')}`}
          </p>
        </div>
      </div>

      <div>
        <p className="text-secondary-font-grey  dark:text-white  mb-5">
          {data.bio ? data.bio : 'This profile has no bio.'}
        </p>
      </div>

      <div className="flex items-center justify-around bg-light-mode dark:bg-dark-mode rounded-2xl py-[18px]">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[11px] text-secondary-font-grey dark:text-white">
            Repo
          </p>
          <p className="text-dark-mode dark:text-white font-bold">
            {data.public_repos}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[11px] text-secondary-font-grey dark:text-white">
            Followers
          </p>
          <p className="text-dark-mode dark:text-white font-bold">
            {data.followers}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[11px] text-secondary-font-grey dark:text-white">
            Following
          </p>
          <p className="text-dark-mode dark:text-white font-bold">
            {data.following}
          </p>
        </div>
      </div>

      <div>
        <Links
          location={data.location}
          github={data.html_url}
          company={data.company}
          twitterUsername={data.twitter_username}
        />
      </div>
    </div>
  );
}
