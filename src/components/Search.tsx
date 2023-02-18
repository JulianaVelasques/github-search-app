import SearchIcon from '../assets/icon-search.svg';

export function Search() {
  return (
    <div className=" bg-white dark:bg-back-dark-mode flex justify-around items-center rounded-2xl py-2 pr-[0.2rem] pl-2 shadow-md mb-4">
      <img src={SearchIcon} alt="seach icon" width={20} />

      <input
        className="w-[184px] focus:outline-none text-[13px] dark:bg-back-dark-mode"
        type="text"
        name="search"
        placeholder="Search GitHub username…"
      />

      <button className="bg-tertiary-blue text-white rounded-xl px-5 py-3">
        Search
      </button>
    </div>
  );
}
