import Moon from '../assets/icon-moon.svg';

export function Header() {
  return (
    <header className="flex justify-between items-center mb-9">
      <h1 className="text-primary-font-dark font-bold text-[26px] ">
        Devfinder
      </h1>

      <div className="flex items-center gap-4">
        <p className="text-[13px] font-bold tracking-[2.5px] text-secondary-font-grey">
          DARK
        </p>
        <img src={Moon} alt="moon icon" />
      </div>
    </header>
  );
}
