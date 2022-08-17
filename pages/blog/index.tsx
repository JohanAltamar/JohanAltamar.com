import React from "react";

// Types
import type { GetStaticProps, NextPage } from "next";
import type { PostSummary } from "@/api/types";
import { Dictionary as DictionaryType } from "@/interfaces";

// Layouts
import Layout from "@/components/layouts/Layout";

// Api
import { getAllPosts } from "@/api/getPosts";
import BlogListItem from "@/components/Blog/BlogListItem";

// Db Connection
import dbConnect from "@/lib/dbConnext";

// Models
import { Dictionary } from "@/models";

interface BlogPageProps {
  posts: PostSummary[];
  dictionary: DictionaryType["content"];
}

const BlogPage: NextPage<BlogPageProps> = ({ dictionary, posts }) => {
  return (
    <Layout contentClassName="p-10 lg:px-0">
      <h3 className="text-2xl capitalize">Blog</h3>
      <p>{dictionary["blog_page_intro"]}</p>
      <ul className="article-list">
        {posts.map((post) => (
          <BlogListItem key={post.slug} post={post} />
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    await dbConnect();
    const posts = await getAllPosts();
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
        posts,
      },
      revalidate: 1,
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default BlogPage;
