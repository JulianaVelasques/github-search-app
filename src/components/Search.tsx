import SearchIcon from '../assets/icon-search.svg';

export function Search() {
  return (
    <div className="bg-white flex justify-around items-center rounded-2xl py-2 px-4 shadow-md">
      <img src={SearchIcon} alt="seach icon" />

      <input className="w-[184px]" type="text" name="search" />

      <button className="bg-tertiary-blue text-white rounded-xl px-5 py-3">
        Search
      </button>
    </div>
  );
}
