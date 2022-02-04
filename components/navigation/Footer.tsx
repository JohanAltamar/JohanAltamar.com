import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Tooltip from "@reach/tooltip";
// Icons
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
// i18n
import t, { Languages } from "@/i18n";
import { useRouter } from "next/router";
interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const { locale } = useRouter();
  const lang = locale as Languages;

  return (
    <footer
      className={classNames(
        "h-14 flex items-center justify-center text-xl",
        className
      )}
    >
      <Tooltip label={t("view Github", lang)}>
        <a
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-600 dark:hover:text-lime-500 transition-colors duration-200"
          href="https://github.com/JohanAltamar"
        >
          <FaGithub />
        </a>
      </Tooltip>
      <Tooltip label={t("view LinkedIn", lang)}>
        <a
          target="_blank"
          rel="noreferrer"
          className="mx-4 hover:text-red-600 dark:hover:text-lime-500 transition-colors duration-200"
          href="https://www.linkedin.com/in/johan-altamar/"
        >
          <FaLinkedin />
        </a>
      </Tooltip>
      <Link href="/contact" scroll={false} passHref>
        <Tooltip label={t("contact", lang)}>
          <a className="hover:cursor-pointer hover:text-red-600 dark:hover:text-lime-500 transition-colors duration-200">
            <FaEnvelope />
          </a>
        </Tooltip>
      </Link>
    </footer>
  );
};

export default Footer;
