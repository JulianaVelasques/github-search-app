import moment from 'moment';
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
    <div className="bg-white dark:bg-back-dark-mode shadow-md rounded-2xl px-6 py-8 md:px-10 md:py-10 text-[13px] md:text-[15px]">
      <div className="flex justify-start items-center md:items-start gap-5 lg:gap-10 mb-8 lg:mb-[-2rem] ">
        <img
          src={data.avatar_url}
          alt="user-avatar"
          width={70}
          className="rounded-full w-[70px] md:w-[117px]"
        />

        <div className="lg:flex lg:flex-row lg:justify-between lg:w-[100%]">
          <div>
            <p className="font-bold text-base text-dark-mode  dark:text-white md:text-[26px] lg:w-72 lg:mb-3 ">
              {data.name}
            </p>
            <p className="text-tertiary-blue mb-1 lg:text-[16px]">
              @{data.login}
            </p>
          </div>

          <p className="text-secondary-font-grey  dark:text-white ">
            {`Joined ${moment(data.created_at).format('d MMMM YYYY')}`}
          </p>
        </div>
      </div>

      <div className="lg:ml-[10rem] lg:mb-6">
        <p className="text-secondary-font-grey  dark:text-white  mb-5">
          {data.bio ? data.bio : 'This profile has no bio.'}
        </p>
      </div>

      <div className="flex items-center justify-around bg-light-mode dark:bg-dark-mode rounded-2xl py-[18px] lg:ml-[10rem]">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[11px] md:text-[13px] text-secondary-font-grey dark:text-white">
            Repo
          </p>
          <p className="text-dark-mode dark:text-white font-bold lg:text-[22px]">
            {data.public_repos}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[11px] md:text-[13px] text-secondary-font-grey dark:text-white">
            Followers
          </p>
          <p className="text-dark-mode dark:text-white font-bold md:text-[22px]">
            {data.followers}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[11px] md:text-[13px] text-secondary-font-grey dark:text-white">
            Following
          </p>
          <p className="text-dark-mode dark:text-white font-bold md:text-[22px]">
            {data.following}
          </p>
        </div>
      </div>

      <div className="lg:ml-[10rem]">
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
