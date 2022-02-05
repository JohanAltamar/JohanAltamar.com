import React from "react";
import Portal from "@reach/portal";
// Components
import Input from "@/components/form/Input";
import TextArea from "@/components/form/TextArea";
// Contexts
import { useUIcontext } from "@/context/UIstore/UIcontext";
// i18n
import t, { Languages } from "@/i18n";
import { useRouter } from "next/router";
// Pages
import ProjectsPage from "./projects";
import AboutPage from "./about";
import HomePage from ".";
// Template
import Layout from "@/components/layouts/Layout";
import classNames from "classnames";

const ContactPage = () => {
  const { showContactModal } = useUIcontext();

  return showContactModal ? (
    <>
      {showContactModal === "/projects" && <ProjectsPage />}
      {showContactModal === "/about" && <AboutPage />}
      {showContactModal === "/" && <HomePage />}
      <ContactModal />
    </>
  ) : (
    <Layout contentClassName="p-10 lg:px-0">
      <PageContent pageMode />
    </Layout>
  );
};

export default ContactPage;

const ContactModal = () => {
  return (
    <Portal>
      <div className="absolute top-0 w-screen h-screen flex items-center justify-center bg-lime-400/50 dark:bg-stone-600/30">
        <div className="min-h-[50%] min-w-[80%] shadow-xl shadow-black/30 dark:shadow-none rounded-lg p-10 bg-white dark:bg-stone-700">
          <PageContent />
        </div>
      </div>
    </Portal>
  );
};

const PageContent = ({ pageMode = false }: { pageMode?: boolean }) => {
  const { locale, back } = useRouter();
  const lang = locale as Languages;

  return (
    <>
      <header className="capitalize">
        <h3
          className={classNames("text-center text-xl", {
            "!text-2xl !text-left": pageMode,
          })}
        >
          {t("contact info", lang)}
        </h3>
      </header>
      <main>
        <p
          className={classNames("my-3 text-gray-600 dark:text-gray-400", {
            "!mt-0": pageMode,
          })}
        >
          {t("contact_message_pt1", lang)}
          <a
            className="text-red-600 hover:text-red-700 visited:text-red-800 dark:text-lime-500 dark:hover:text-lime-300 dark:visited:text-lime-600"
            href="mailto:contacto@johanaltamar.com"
          >
            contacto@johanaltamar.com
          </a>
          {t("contact_message_pt2", lang)}
        </p>
        <form className="mt-6 grid grid-cols-2 gap-4">
          <Input
            required
            className="col-span-full sm:col-span-1"
            label={t("full name", lang)}
            placeholder="John Doe"
          />
          <Input
            required
            className="col-span-full sm:col-span-1"
            label={t("subject", lang)}
            placeholder="Job Offer"
          />
          <Input
            required
            className="col-span-full"
            label={t("email", lang)}
            placeholder="example@gmail.com"
          />
          <TextArea
            required
            className="col-span-full"
            label={t("message", lang)}
            placeholder="Write the message here"
          />
        </form>
        <span className="text-center block mb-4 text-gray-600 dark:text-gray-400 text-sm">
          {t("form_message", lang)}
        </span>
      </main>
      <footer className={classNames("text-right", { "mt-6": pageMode })}>
        {!pageMode && (
          <button
            className="mr-3 hover:bg-lime-300 dark:hover:bg-stone-600 text-lime-600 hover:text-lime-800 dark:text-white font-bold py-2 px-4 rounded-full"
            onClick={back}
          >
            {t("close", lang)}
          </button>
        )}
        <button className="bg-lime-400 hover:bg-lime-500 dark:bg-lime-800 dark:hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
          {t("send", lang)}
        </button>
      </footer>
    </>
  );
};
