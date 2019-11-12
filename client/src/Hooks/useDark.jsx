import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDark = (initialValue) => {
  const [darkValue, setDarkValue] = useLocalStorage("darkMode", initialValue);
  const handleChangeDark = (updatedValue) => setDarkValue(updatedValue);

  useEffect(() => {
    const A = document.querySelector('.App');
    const h = document.querySelector('header');
    const f = document.querySelector('footer');
    const a = document.querySelectorAll('a');
    if (darkValue === true) {
      A.classList.add('dark-mode');
      h.classList.add('header-dark');
      f.classList.add('footer-dark');
      a.forEach((e) => {
        e.classList.add('dark')
      });
    } else {
      A.classList.remove('dark-mode');
      h.classList.remove('header-dark');
      f.classList.remove('footer-dark');
      a.forEach((e) => {
        e.classList.remove('dark')
      });
    }
  }, [darkValue]);

  return [darkValue, setDarkValue, handleChangeDark];
};