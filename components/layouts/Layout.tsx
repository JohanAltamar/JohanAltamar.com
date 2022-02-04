import classNames from "classnames";
import React from "react";
// Components
import Navbar from "../navigation/Navbar";
import OptionsBar from "../navigation/OptionsBar";
import SideBar from "../navigation/SideBar";

interface LayoutProps {
  contentClassName?: string;
  wrapperClassName?: string;
  navbarClassName?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  contentClassName,
  navbarClassName,
  wrapperClassName,
}) => {
  return (
    <div
      className={classNames(
        "main-grid--default main-grid--large",
        wrapperClassName
      )}
    >
      <OptionsBar className="lg:col-start-3 lg:col-span-10" />
      <SideBar
        className={classNames(
          "col-start-1 col-end-3 row-span-full",
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
    </div>
  );
};

export default Layout;
