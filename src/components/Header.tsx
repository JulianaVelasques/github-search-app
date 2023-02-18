import { useState } from 'react';
import Moon from '../assets/icon-moon.svg';
import Sun from '../assets/icon-sun.svg';

export function Header() {
  const [mode, setMode] = useState('');

  const changeMode = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'light';
      setMode(localStorage.theme);
    } else if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'dark';
      setMode(localStorage.theme);
    }
  };

  return (
    <header className="flex justify-between items-center mb-9 ">
      <h1 className="text-primary-font-dark dark:text-white font-bold text-[26px] ">
        Devfinder
      </h1>

      <div className="flex items-center gap-4" onClick={changeMode}>
        {mode === 'dark' ? (
          <>
            <p className="text-[13px] font-bold tracking-[2.5px] text-secondary-font-grey">
              DARK
            </p>{' '}
            <img src={Moon} alt="moon icon" />
          </>
        ) : (
          <>
            <p className="text-[13px] font-bold tracking-[2.5px] text-secondary-font-grey dark:text-white ">
              LIGHT
            </p>{' '}
            <img src={Sun} alt="sun icon" />
          </>
        )}
      </div>
    </header>
  );
}
