"use client";

import { MdDarkMode } from "react-icons/md";
import { useTheme } from "./theme-context";
import { TbSunFilled } from "react-icons/tb";

export const Theme = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      className="fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg 
                 transition-all duration-300 bg-accent text-background"
      onClick={toggleTheme}
    >
      {darkMode ? <MdDarkMode /> : <TbSunFilled />}
    </button>
  );
};
