import Profile from '../assets/profile.svg';
import { Links } from './Links';

export function ProfileCard() {
  return (
    <div className="bg-white dark:bg-back-dark-mode shadow-md rounded-2xl px-6 py-8 text-[13px]">
      <div className="flex justify-start items-center gap-5 mb-8">
        <img src={Profile} alt="" />

        <div>
          <p className="font-bold text-base text-dark-mode  dark:text-white ">
            The Octocat
          </p>
          <p className="text-tertiary-blue mb-1">@octocat</p>

          <p className="text-secondary-font-grey  dark:text-white ">
            Joined 25 Jan 2011
          </p>
        </div>
      </div>

      <div>
        <p className="text-secondary-font-grey  dark:text-white  mb-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>

      <div className="flex items-center justify-around bg-light-mode dark:bg-dark-mode rounded-2xl py-[18px]">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[11px] text-secondary-font-grey dark:text-white">
            Repo
          </p>
          <p className="text-dark-mode dark:text-white font-bold">8</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[11px] text-secondary-font-grey dark:text-white">
            Followers
          </p>
          <p className="text-dark-mode dark:text-white font-bold">3938</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[11px] text-secondary-font-grey dark:text-white">
            Following
          </p>
          <p className="text-dark-mode dark:text-white font-bold">0</p>
        </div>
      </div>

      <div>
        <Links />
      </div>
    </div>
  );
}
