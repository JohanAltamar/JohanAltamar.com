import classNames from "classnames";
import React from "react";
import LanguageSelect from "../LanguageSelect";
import ThemeChanger from "../ThemeChanger";

interface OptionsBarProps {
  className?: string;
}

const OptionsBar: React.FC<OptionsBarProps> = ({ className }) => {
  return (
    <div className={classNames("px-6 flex justify-between", className)}>
      <LanguageSelect />
      <ThemeChanger />
    </div>
  );
};

export default OptionsBar;
