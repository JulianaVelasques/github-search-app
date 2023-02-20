import { useRef } from 'react';
import SearchIcon from '../assets/icon-search.svg';

export function Search({
  getUsername,
  status,
}: {
  getUsername: (name: string | undefined) => void;
  status: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: any) => {
    e.preventDefault();
    let inputValue = inputRef.current?.value;

    getUsername(inputValue);
  };

  return (
    <div className=" bg-white dark:bg-back-dark-mode flex justify-around md:justify-between items-center rounded-2xl py-2 pr-[0.2rem] pl-2 md:pl-8 md:pr-2 shadow-md mb-4">
      <div className="flex gap-6 ">
        <img src={SearchIcon} alt="seach icon" width={20} />
        <input
          className="w-[184px] md:w-[254px] focus:outline-none text-[13px] dark:bg-back-dark-mode dark:text-white"
          type="text"
          name="search"
          placeholder="Search GitHub username…"
          ref={inputRef}
        />
      </div>

      {status === 'Not Found' && (
        <p className="absolute text-[10px] text-red-600 font-bold right-[9rem] md:right-[15rem]">
          {' '}
          Not results{' '}
        </p>
      )}

      <button
        className="bg-tertiary-blue text-white rounded-xl px-5 py-3"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}
