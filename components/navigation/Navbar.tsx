import React from "react";
import Link from "next/link";
import classNames from "classnames";
// Icons
import { FaHome, FaLaptopCode, FaRegAddressBook } from "react-icons/fa";
import { useRouter } from "next/router";
// i18n
import t, { Languages } from "@/i18n";

interface navbarProps {
  className?: string;
}

export enum Route {
  HOME = "/",
  ABOUT = "/about",
  PROJECTS = "/projects",
}

const Navbar: React.FC<navbarProps> = ({ className }) => {
  const router = useRouter();
  const lang = router.locale! as Languages;

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <nav
      className={classNames(
        "sticky bottom-0 bg-lime-500 dark:bg-stone-900 flex lg:hidden",
        className
      )}
    >
      <NavOption
        title={t("home", lang)}
        active={isActive(Route.HOME)}
        href={Route.HOME}
      >
        <FaHome />
      </NavOption>
      <NavOption
        title={t("about me", lang)}
        active={isActive(Route.ABOUT)}
        href={Route.ABOUT}
      >
        <FaRegAddressBook />
      </NavOption>
      <NavOption
        title={t("projects", lang)}
        active={isActive(Route.PROJECTS)}
        href={Route.PROJECTS}
      >
        <FaLaptopCode />
      </NavOption>
    </nav>
  );
};

export default Navbar;

interface NavOptionProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  href: string;
  active?: boolean;
}

const NavOption: React.FC<NavOptionProps> = ({
  children,
  title,
  href,
  active = false,
  ...otherProps
}) => (
  <Link href={href} passHref>
    <button
      className={classNames(
        "flex-1 flex flex-col justify-center items-center border-t-4 text-stone-900 hover:bg-lime-600 dark:hover:bg-stone-800 border-lime-500 hover:border-lime-600 dark:border-stone-900 dark:hover:border-stone-800 dark:text-white",
        {
          "!border-red-600 !text-red-700 hover:bg-lime-500 dark:hover:bg-stone-900 dark:!border-lime-600 dark:!text-lime-600":
            active,
        }
      )}
      name={title}
      {...otherProps}
    >
      <span className="text-xl">{children}</span>
      <span className="text-sm uppercase mt-0.5">{title}</span>
    </button>
  </Link>
);
