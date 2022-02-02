import React from "react";
import classNames from "classnames";
// Icons
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer
    className={classNames(
      "h-14 flex items-center justify-center text-xl",
      className
    )}
  >
    <a
      target="_blank"
      rel="noreferrer"
      className="hover:text-red-600 dark:hover:text-lime-500 transition-colors duration-200"
      href="https://github.com/JohanAltamar"
    >
      <FaGithub />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      className="mx-4 hover:text-red-600 dark:hover:text-lime-500 transition-colors duration-200"
      href="https://www.linkedin.com/in/johan-altamar/"
    >
      <FaLinkedin />
    </a>
    <Link href="/contact" scroll={false}>
      <a className="hover:text-red-600 dark:hover:text-lime-500 transition-colors duration-200">
        <FaEnvelope />
      </a>
    </Link>
  </footer>
);

export default Footer;
