import React from "react";
import { useRouter } from "next/router";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import { Languages } from "@/i18n";
import { FaAngleDown } from "react-icons/fa";

const LanguageSelect = () => {
  const { replace, pathname, asPath, locale } = useRouter();

  const handleSelect = (lang: Languages) => () => {
    replace({ pathname }, asPath, { locale: lang });
  };

  return (
    <Menu>
      <MenuButton className="h-full flex justify-between items-center w-16 px-2 hover:bg-black/20 dark:hover:bg-white/10 dark:active:bg-white/20 transition-colors duration-200">
        {locale === "es" ? "🇪🇸" : "🇺🇸"}
        <span aria-hidden>
          <FaAngleDown />
        </span>
      </MenuButton>
      <MenuList className="w-16 text-center bg-white dark:bg-stone-900">
        <MenuItem
          className="h-10 flex items-center justify-center dark:bg-stone-900 hover:bg-black/20 dark:hover:bg-white/10 dark:active:bg-white/20 transition-colors duration-200 p-1.5 hover:cursor-pointer"
          onSelect={handleSelect("es")}
        >
          🇪🇸
        </MenuItem>
        <MenuItem
          className="h-10 flex items-center justify-center dark:bg-stone-900 hover:bg-black/20 dark:hover:bg-white/10 dark:active:bg-white/20 transition-colors duration-200 p-1.5 hover:cursor-pointer"
          onSelect={handleSelect("en")}
        >
          🇺🇸
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSelect;
