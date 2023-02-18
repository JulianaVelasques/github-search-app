import Location from '../assets/icon-location.svg';
import Company from '../assets/icon-company.svg';
import Website from '../assets/icon-website.svg';
import Twitter from '../assets/icon-twitter.svg';

export function Links() {
  return (
    <div className="text-secondary-font-grey dark:text-white">
      <div className="flex gap-5 mt-6">
        <img src={Location} alt="" />
        <p>San Francisco</p>
      </div>

      <div className="flex gap-5  mt-4">
        <img src={Website} alt="" />
        <a href="https://github.blog">https://github.blog</a>
      </div>

      <div className="flex gap-5  mt-4">
        <img src={Twitter} alt="" />
        <a href="">Not available</a>
      </div>

      <div className="flex gap-5  mt-4">
        <img src={Company} alt="" />
        <p>@github</p>
      </div>
    </div>
  );
}
