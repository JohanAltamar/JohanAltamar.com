import React from "react";
import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import rehypeRaw from "rehype-raw";

import Layout from "@/components/layouts";
import Chip from "@/components/Chip";
import { Project } from "@/models";
import { Project as ProjectType } from "@/interfaces";
import dbConnect from "@/lib/dbConnext";
import { MdChevronRight } from "react-icons/md";

interface ProjectPageProps {
  project: ProjectType;
}

const ProjectSlugPage: NextPage<ProjectPageProps> = ({ project }) => {
  const { description, img, language, title, translations, content } = project;
  const { asPath } = useRouter();

  return (
    <Layout contentClassName="px-10">
      <Head>
        <title>{title}</title>
        <meta title="description" content={description} />
        <meta httpEquiv="Content-Language" content={language} />
        <meta name="distribution" content="global" />
        {/* Social Networks sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />
        <meta property="og:image" content={img} />
      </Head>
      <small className="flex items-center mt-2">
        <Link href="/projects">
          <a className="underline">projects</a>
        </Link>
        <MdChevronRight className="mx-1" />
        <span>{title}</span>
      </small>
      <article className="md-content">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </article>
      {!!translations?.length && (
        <article className="flex my-5">
          <span>También disponible en:</span>
          <ul>
            {translations?.map((translation) => (
              <Link
                key={translation.language}
                href={`/projects/${translation.link}`}
                passHref
              >
                <Chip className="ml-2">{translation.language}</Chip>
              </Link>
            ))}
          </ul>
        </article>
      )}
    </Layout>
  );
};

export default ProjectSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  await dbConnect();
  const projects = await Project.find({}, "slug -_id");

  return {
    paths: projects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { slug } = params as { slug: string };

    await dbConnect();
    const project = (await Project.findOne({ slug }, "-_id")) as ProjectType;

    if (!project) {
      return {
        redirect: {
          destination: "/projects",
          permanent: false,
        },
      };
    }

    return {
      props: {
        isConnected: true,
        project: JSON.parse(JSON.stringify(project)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};
