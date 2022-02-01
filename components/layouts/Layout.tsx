import classNames from "classnames";
import React from "react";
// Components
import Navbar from "../navigation/Navbar";
import OptionsBar from "../navigation/OptionsBar";

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
        "h-screen grid grid-rows-[40px_1fr_56px]",
        wrapperClassName
      )}
    >
      <OptionsBar />
      <main className={contentClassName}>{children}</main>
      <Navbar className={navbarClassName} />
    </div>
  );
};

export default Layout;
