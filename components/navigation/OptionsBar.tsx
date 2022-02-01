import React from "react";
import LanguageSelect from "../LanguageSelect";
import ThemeChanger from "../ThemeChanger";

const OptionsBar = () => {
  return (
    <div className="px-6 flex justify-between">
      <LanguageSelect />
      <ThemeChanger />
    </div>
  );
};

export default OptionsBar;
