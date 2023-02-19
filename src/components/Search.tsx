import { useRef, useState } from 'react';
import SearchIcon from '../assets/icon-search.svg';

export function Search({
  getUsername,
}: {
  getUsername: (name: string | undefined) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: any) => {
    e.preventDefault();
    let inputValue = inputRef.current?.value;

    getUsername(inputValue);

    inputRef.current!.value = '';
  };

  return (
    <div className=" bg-white dark:bg-back-dark-mode flex justify-around items-center rounded-2xl py-2 pr-[0.2rem] pl-2 shadow-md mb-4">
      <img src={SearchIcon} alt="seach icon" width={20} />

      <input
        className="w-[184px] focus:outline-none text-[13px] dark:bg-back-dark-mode dark:text-white"
        type="text"
        name="search"
        placeholder="Search GitHub username…"
        ref={inputRef}
      />

      <button
        className="bg-tertiary-blue text-white rounded-xl px-5 py-3"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}
