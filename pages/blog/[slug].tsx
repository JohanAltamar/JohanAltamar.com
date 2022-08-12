import React from "react";

// Types
import type { GetStaticProps, NextPage } from "next";
import type { Post as IPost } from "@/api/types";

// Layouts
import Layout from "@/components/layouts/Layout";

// Api
import { getAllPosts, getPostBySlug } from "@/api/getPosts";

interface PostPageProps {
  post: IPost;
}

const BlogPostPage: NextPage<PostPageProps> = ({ post }) => {
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
  const slug = context.params?.slug;
  const post = await getPostBySlug(`${slug}`);
  return post ? { props: { post }, revalidate: 1 } : { notFound: true };
};

export default BlogPostPage;
