import React from "react";
import Link from "next/link";

// Types
import { PostSummary } from "@/api/types";

const BlogListItem = ({ post }: { post: PostSummary }) => {
  const publishDate = new Date(post.date).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <li className="my-10">
      <small>
        <strong>{publishDate}</strong>
      </small>
      <h2 className="text-xl hover:underline text-green-800  dark:text-green-200 transition-all duration-300">
        <Link href={`/blog/${post.slug}`}>
          <a style={{ boxShadow: "none" }}>{post.title}</a>
        </Link>
      </h2>
      <p>{post.description}</p>
    </li>
  );
};

export default BlogListItem;
