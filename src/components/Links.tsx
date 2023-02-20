import { Location, Company, Website, Twitter } from './Icons';

interface dataLink {
  location?: string;
  company?: string;
  github?: string;
  twitterUsername?: string;
}

export function Links({
  location,
  company,
  github,
  twitterUsername,
}: dataLink) {
  console.log('location', location);

  return (
    <div className="text-secondary-font-grey dark:text-white">
      <div className="flex gap-6 mt-6">
        <Location
          className={
            location
              ? 'fill-secondary-font-grey dark:fill-white'
              : 'fill-slate-400'
          }
        />
        <p className={!location ? 'text-slate-400' : ''}>
          {location ? location : 'Not available'}
        </p>
      </div>

      <div className="flex gap-5  mt-4">
        <Website className="fill-secondary-font-grey dark:fill-white" />
        <a
          href={github}
          className="block overflow-hidden text-ellipsis hover:underline"
        >
          {github}
        </a>
      </div>

      <div className="flex gap-5  mt-4">
        <Twitter
          className={
            twitterUsername
              ? 'fill-secondary-font-grey dark:fill-white'
              : 'fill-slate-400'
          }
        />
        <p className={!twitterUsername ? 'text-slate-400' : ''}>
          {twitterUsername ? twitterUsername : 'Not available'}
        </p>
      </div>

      <div className="flex gap-5  mt-4">
        <Company
          className={
            company
              ? 'fill-secondary-font-grey dark:fill-white'
              : 'fill-slate-400'
          }
        />
        <p className={!company ? 'text-slate-400' : ''}>
          {company ? company : 'Not available'}
        </p>
      </div>
    </div>
  );
}
