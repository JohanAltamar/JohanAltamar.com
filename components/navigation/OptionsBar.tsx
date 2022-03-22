import classNames from "classnames";
import React from "react";
import LanguageSelect from "../LanguageSelect";
import ThemeChanger from "../ThemeChanger";

interface OptionsBarProps {
  className?: string;
}

const OptionsBar: React.FC<OptionsBarProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "sticky top-0 z-10 px-6 flex justify-between bg-lime-200 dark:bg-neutral-900",
        className
      )}
    >
      <LanguageSelect />
      <ThemeChanger />
    </div>
  );
};

export default OptionsBar;
