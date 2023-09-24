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
      <button
        className="bg-blue-300 px-2 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600 transition-colors duration-300"
        data-glf-cuid="d6743905-0dc1-444f-9489-3533c2b9266f"
        data-glf-ruid="256aa3bb-ab43-486a-8626-fb394cdb9db4"
      >
        Ver Menú
      </button>
      <button
        className="bg-blue-300 px-2 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600 transition-colors duration-300"
        data-glf-cuid="d6743905-0dc1-444f-9489-3533c2b9266f"
        data-glf-ruid="256aa3bb-ab43-486a-8626-fb394cdb9db4"
        data-glf-reservation="true"
      >
        Reservar Mesa
      </button>
      <ThemeChanger />
    </div>
  );
};

export default OptionsBar;
