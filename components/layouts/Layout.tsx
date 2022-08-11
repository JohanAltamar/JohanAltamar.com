import React from "react";
import Head from "next/head";
import classNames from "classnames";
import { useRouter } from "next/router";
// Components
import ContactButton from "../ContactButton";
import Navbar from "../navigation/Navbar";
import OptionsBar from "../navigation/OptionsBar";
import SideBar from "../navigation/SideBar";

interface LayoutProps {
  contentClassName?: string;
  wrapperClassName?: string;
  navbarClassName?: string;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  contentClassName,
  navbarClassName,
  wrapperClassName,
  title = "",
}) => {
  const { pathname } = useRouter();

  return (
    <div
      className={classNames(
        "main-grid--default main-grid--large max-h-screen overflow-auto",
        wrapperClassName
      )}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <OptionsBar className="lg:col-start-3 lg:col-span-10" />
      <SideBar
        className={classNames(
          "sticky top-0 col-start-1 col-end-3 row-span-full max-h-screen",
          navbarClassName
        )}
      />
      <main
        className={classNames(
          "col-span-full lg:col-start-4 lg:col-end-12 xl:col-start-5 xl:col-end-11",
          contentClassName
        )}
      >
        {children}
      </main>
      <Navbar className={navbarClassName} />
      <ContactButton
        className={classNames(
          "lg:hidden fixed bottom-20 right-0 flex justify-center items-center h-10 aspect-square rounded-l-lg bg-red-600 hover:bg-red-500 dark:bg-lime-800 dark:hover:bg-lime-700 text-white hover:text-white dark:text-gray-300 dark:hover:text-white text-xl",
          {
            hidden: pathname === "/contact",
          }
        )}
      />
    </div>
  );
};

export default Layout;
