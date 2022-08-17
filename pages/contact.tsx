import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Portal from "@reach/portal";
// Components
import Input from "@/components/form/Input";
import TextArea from "@/components/form/TextArea";
// Contexts
import { useUIcontext } from "@/context/UIstore/UIcontext";
// Pages
import ProjectsPage from "./projects";
import AboutPage from "./about";
import HomePage from ".";
// Template
import Layout from "@/components/layouts/Layout";
// Db Connection
import dbConnect from "@/lib/dbConnext";
// Models
import { Dictionary } from "@/models";
// Types
import type { GetStaticProps, NextPage } from "next";
import type { Dictionary as DictionaryType } from "@/interfaces";

interface ContactPageProps {
  dictionary: DictionaryType["content"];
}

const ContactPage: NextPage<ContactPageProps> = ({ dictionary }) => {
  const { showContactModal } = useUIcontext();

  return showContactModal ? (
    <>
      {showContactModal === "/projects" && (
        <ProjectsPage dictionary={dictionary} projects={[]} />
      )}
      {showContactModal === "/about" && <AboutPage />}
      {showContactModal === "/" && <HomePage />}
      <ContactModal dictionary={dictionary} />
    </>
  ) : (
    <Layout contentClassName="p-10 lg:px-0">
      <PageContent pageMode dictionary={dictionary} />
    </Layout>
  );
};

export default ContactPage;

const ContactModal = ({
  dictionary,
}: {
  dictionary: DictionaryType["content"];
}) => {
  return (
    <Portal>
      <div className="absolute top-0 w-screen h-screen flex items-center justify-center bg-lime-400/50 dark:bg-stone-600/30">
        <div className="min-h-[50%] min-w-[80%] shadow-xl shadow-black/30 dark:shadow-none rounded-lg p-10 bg-white dark:bg-stone-700">
          <PageContent dictionary={dictionary} />
        </div>
      </div>
    </Portal>
  );
};

const PageContent = ({
  pageMode = false,
  dictionary,
}: {
  dictionary: DictionaryType["content"];
  pageMode?: boolean;
}) => {
  const { back } = useRouter();

  return (
    <>
      <header className="capitalize">
        <h3
          className={classNames("text-center text-xl", {
            "!text-2xl !text-left": pageMode,
          })}
        >
          {dictionary["contact info"]}
        </h3>
      </header>
      <main>
        <p
          className={classNames("my-3 text-gray-600 dark:text-gray-400", {
            "!mt-0": pageMode,
          })}
        >
          {dictionary["contact_message_pt1"]}
          <a
            className="text-red-600 hover:text-red-700 visited:text-red-800 dark:text-lime-500 dark:hover:text-lime-300 dark:visited:text-lime-600"
            href="mailto:contacto@johanaltamar.com"
          >
            contacto@johanaltamar.com
          </a>
          {dictionary["contact_message_pt2"]}
        </p>
        <form className="mt-6 grid grid-cols-2 gap-4">
          <Input
            required
            className="col-span-full sm:col-span-1"
            label={dictionary["full name"]}
            placeholder="John Doe"
          />
          <Input
            required
            className="col-span-full sm:col-span-1"
            label={dictionary["subject"]}
            placeholder="Job Offer"
          />
          <Input
            required
            className="col-span-full"
            label={dictionary["email"]}
            placeholder="example@gmail.com"
          />
          <TextArea
            required
            className="col-span-full"
            label={dictionary["message"]}
            placeholder="Write the message here"
          />
        </form>
        <span className="text-center block mb-4 text-gray-600 dark:text-gray-400 text-sm">
          {dictionary["form_message"]}
        </span>
      </main>
      <footer className={classNames("text-right", { "mt-6": pageMode })}>
        {!pageMode && (
          <button
            className="mr-3 hover:bg-lime-300 dark:hover:bg-stone-600 text-lime-600 hover:text-lime-800 dark:text-white font-bold py-2 px-4 rounded-full"
            onClick={back}
          >
            {dictionary["close"]}
          </button>
        )}
        <button className="bg-lime-400 hover:bg-lime-500 dark:bg-lime-800 dark:hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
          {dictionary["send"]}
        </button>
      </footer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    await dbConnect();
    const dictionary: DictionaryType | null = await Dictionary.findOne({
      language: locale,
    });

    if (!dictionary) {
      throw new Error("No dictionary found");
    }

    return {
      props: {
        isConnected: true,
        dictionary: dictionary.content,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};
