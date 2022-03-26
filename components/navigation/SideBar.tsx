import React from "react";
import Link from "next/link";
import classNames from "classnames";
// Components
import Footer from "./Footer";
// Icons
import { FaHome, FaLaptopCode, FaRegAddressBook } from "react-icons/fa";
import { useRouter } from "next/router";
// i18n
import t, { Languages } from "@/i18n";

interface SideBarProps {
  className?: string;
}

export enum Route {
  HOME = "/",
  ABOUT = "/about",
  PROJECTS = "/projects",
}

const SideBar: React.FC<SideBarProps> = ({ className }) => {
  const router = useRouter();
  const lang = router.locale! as Languages;

  const isActive = (path: string) => {
    const rootPath = `/${router.pathname.split("/")[1]}`;
    return rootPath === path;
  };

  return (
    <nav
      className={classNames(
        "bg-lime-500 dark:bg-stone-900 hidden lg:flex lg:flex-col lg:justify-between",
        className
      )}
    >
      <header className="h-10 flex items-center justify-center">JADev</header>
      <div>
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
      </div>
      <Footer />
    </nav>
  );
};

export default SideBar;

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
        "w-full flex justify-start items-center py-2 px-6 border-l-4 text-stone-900 hover:bg-lime-600 dark:hover:bg-stone-800 transition-colors border-lime-500 hover:border-lime-600 dark:border-stone-900 dark:hover:border-stone-800 dark:text-white",
        {
          "!border-red-600 !text-red-700 hover:bg-lime-500 dark:hover:bg-stone-900 dark:!border-lime-600 dark:!text-lime-600":
            active,
        }
      )}
      name={title}
      {...otherProps}
    >
      <span className="text-xl mr-2">{children}</span>
      <span className="text-sm uppercase mt-0.5">{title}</span>
    </button>
  </Link>
);
