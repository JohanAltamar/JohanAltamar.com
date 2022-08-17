import React from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark-dimmed.css";

// Types
import type { GetStaticProps, NextPage } from "next";
import type { Post as IPost } from "@/api/types";
import { Dictionary as DictionaryType } from "@/interfaces";

// Layouts
import Layout from "@/components/layouts/Layout";

// Api
import { getAllPosts, getPostBySlug } from "@/api/getPosts";
import dbConnect from "@/lib/dbConnext";
import { Dictionary } from "@/models";

hljs.registerLanguage("language-js", javascript);

interface PostPageProps {
  post: IPost;
  dictionary: DictionaryType["content"];
}

const BlogPostPage: NextPage<PostPageProps> = ({ dictionary, post }) => {
  React.useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Layout
      contentClassName="p-10 lg:px-0"
      title={`${post?.title} - Johan Altamar`}
    >
      <div className="blog-post-page">
        <h1 className="text-2xl capitalize">{post?.title}</h1>
        <span>
          {new Date(post?.date).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
        <img src={post?.coverImage} />
        <div dangerouslySetInnerHTML={{ __html: post?.bodyHtml || "" }}></div>
        {post?.mirrors.length > 0 && (
          <p>
            {dictionary["blog_post_comments"]}:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={post?.mirrors[0]?.postUrl}
            >
              {post?.mirrors[0]?.site}
            </a>
          </p>
        )}
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    await dbConnect();
    const slug = context.params?.slug;
    const post = await getPostBySlug(`${slug}`);
    const dictionary: DictionaryType | null = await Dictionary.findOne({
      language: context.locale,
    });

    if (!dictionary) {
      throw new Error("No dictionary found");
    }
    return post
      ? { props: { post, dictionary: dictionary.content }, revalidate: 1 }
      : { notFound: true };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default BlogPostPage;
