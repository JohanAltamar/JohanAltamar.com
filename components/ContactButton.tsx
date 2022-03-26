import { useUIcontext } from "@/context/UIstore/UIcontext";
import t, { Languages } from "@/i18n";
import Tooltip from "@reach/tooltip";
import classNames from "classnames";
import { useRouter } from "next/router";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

const ContactButton = ({ className }: { className?: string }) => {
  const { setShowContactModal } = useUIcontext();

  const { locale, push, pathname } = useRouter();
  const lang = locale as Languages;

  const handleContactClick = () => {
    if (pathname === "/contact") return;

    setShowContactModal!(pathname);
    push(`/contact`);
  };

  return (
    <Tooltip label={t("contact", lang)}>
      <button
        className={classNames(
          "hover:cursor-pointer hover:text-red-600 dark:hover:text-lime-500 transition-colors duration-200",
          className
        )}
        onClick={handleContactClick}
      >
        <FaEnvelope />
      </button>
    </Tooltip>
  );
};

export default ContactButton;
