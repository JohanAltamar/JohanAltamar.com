import React from "react";

// Types
import type { GetStaticProps, NextPage } from "next";
import type { PostSummary } from "@/api/types";

// Layouts
import Layout from "@/components/layouts/Layout";

// Api
import { getAllPosts } from "@/api/getPosts";
import BlogListItem from "@/components/Blog/BlogListItem";

interface BlogPageProps {
  posts: PostSummary[];
}

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  console.log(posts);
  return (
    <Layout contentClassName="p-10 lg:px-0">
      <h3 className="text-2xl capitalize">Blog</h3>
      <span>{}</span>
      <ul className="article-list">
        {posts.map((post) => (
          <BlogListItem key={post.slug} post={post} />
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return { props: { posts }, revalidate: 1 };
};

export default BlogPage;
