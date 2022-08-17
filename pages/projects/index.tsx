import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Tooltip from "@reach/tooltip";
// Icons
import { FaChrome, FaGithub } from "react-icons/fa";
// Template
import Layout from "@/components/layouts/Layout";
// Styles
import "@reach/tooltip/styles.css";
// Db Connection
import dbConnect from "@/lib/dbConnext";
// Models
import { Dictionary, Project } from "@/models";
// Types
import {
  Project as ProjectType,
  Dictionary as DictionaryType,
} from "@/interfaces";

interface ProjectsPageProps {
  projects: ProjectType[];
  dictionary: DictionaryType["content"];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({
  dictionary,
  projects,
}) => {
  const handleButtonClick = (url: string) => (ev: React.MouseEvent) => {
    ev.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <Layout contentClassName="p-10 lg:px-0">
      <h3 className="text-2xl capitalize">{dictionary.projects}</h3>
      <p className="text-gray-600 dark:text-gray-400 capitalize">
        {dictionary["some projects I built"]}
      </p>
      <section className="my-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} passHref>
            <div className="p-6 shadow-xl dark:shadow-none shadow-black/30 hover:shadow-black/40 rounded-lg bg-white hover:bg-black/5 dark:bg-stone-800 dark:hover:bg-stone-700 hover:cursor-pointer transition-all duration-200">
              <header className="flex justify-between items-center">
                <h6 className="text-2xl">{project.title}</h6>
                <div className="flex">
                  <Tooltip label={dictionary["view online"]}>
                    <button
                      className="text-xl p-1.5 hover:text-red-500 dark:hover:text-lime-500 transition-colors duration-200"
                      onClick={handleButtonClick(project.demo_url)}
                    >
                      <FaChrome />
                    </button>
                  </Tooltip>
                  <Tooltip label={dictionary["view repo"]}>
                    <button
                      className="text-xl p-1.5 hover:text-red-500 dark:hover:text-lime-500 transition-colors duration-200"
                      onClick={handleButtonClick(project.repo_url)}
                    >
                      <FaGithub />
                    </button>
                  </Tooltip>
                </div>
              </header>
              <div className="relative">
                <p className="truncated-text text-gray-600 dark:text-gray-400 leading-6 max-h-12 overflow-y-hidden">
                  {project.description}
                </p>
              </div>
              <div className="my-2">
                <p className="capitalize font-medium">
                  {dictionary["main features"]}
                </p>
                <ul className="list-disc px-4">
                  {project.features.map((feature) => (
                    <li key={feature} className="capitalize">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <ul className="flex w-4/5 flex-wrap text-sm text-gray-600 dark:text-gray-400">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="capitalize mr-1 last:mr-0">
                      {technology}
                    </li>
                  ))}
                </ul>
                <span className="capitalize px-2 py-0.5 rounded-lg bg-lime-500 text-red-700 dark:bg-stone-600 dark:text-lime-500">
                  {project.type}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    await dbConnect();
    const projects: ProjectType[] = await Project.find({ language: locale });
    const dictionary: DictionaryType | null = await Dictionary.findOne({
      language: locale,
    });

    if (!dictionary) {
      throw new Error("No dictionary found");
    }

    return {
      props: {
        isConnected: true,
        projects: JSON.parse(JSON.stringify(projects)),
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
