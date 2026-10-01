import { Link } from "react-router";
import type { Post } from "../data/posts";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-card-top">
        <span className="category">{post.category}</span>
        <span className="read-time">{post.readTime}</span>
      </div>

      <h2>{post.title}</h2>

      <p>{post.excerpt}</p>

      <div className="post-card-bottom">
        <span>{post.date}</span>

        <Link to={`/posts/${post.slug}`} className="read-link">
          Read article →
        </Link>
      </div>
    </article>
  );
}