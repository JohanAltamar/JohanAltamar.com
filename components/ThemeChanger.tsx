import React from "react";
import { useTheme } from "next-themes";
// Icons
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className="h-full w-20 flex items-center justify-between px-2 py-1 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white dark:bg-lime-700 dark:hover:bg-lime-600 dark:active:bg-lime-500 transition-colors"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <LightMode /> : <DarkMode />}
      </button>
    </div>
  );
};

export default ThemeChanger;

const LightMode = () => (
  <>
    <MdOutlineLightMode className="mr-1" />
    <span>Light</span>
  </>
);

const DarkMode = () => (
  <>
    <MdOutlineDarkMode className="mr-1" />
    <span>Dark</span>
  </>
);
