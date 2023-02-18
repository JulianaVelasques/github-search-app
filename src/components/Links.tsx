import Location from '../assets/icon-location.svg';
import Company from '../assets/icon-company.svg';
import Website from '../assets/icon-website.svg';
import Twitter from '../assets/icon-twitter.svg';

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
        <img src={Location} alt="" />
        <p>{location ? location : 'Not available'}</p>
      </div>

      <div className="flex gap-5  mt-4">
        <img src={Website} alt="" />
        <a href={github} className="block overflow-hidden text-ellipsis">
          {github}
        </a>
      </div>

      <div className="flex gap-5  mt-4">
        <img src={Twitter} alt="" />
        <p>{twitterUsername ? twitterUsername : 'Not available'}</p>
      </div>

      <div className="flex gap-5  mt-4">
        <img src={Company} alt="" />
        <p>{company ? company : 'Not available'}</p>
      </div>
    </div>
  );
}
