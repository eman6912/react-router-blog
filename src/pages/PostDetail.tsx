import { Link, useNavigate, useParams } from "react-router";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="not-found">
        <span className="error-code">404</span>
        <h1>Post not found</h1>
        <p>We couldn't find the article you're looking for.</p>

        <Link to="/posts" className="primary-button">
          Browse posts
        </Link>
      </section>
    );
  }

  return (
    <article className="article-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Go back
      </button>

      <div className="article-header">
        <span className="category">{post.category}</span>

        <h1>{post.title}</h1>

        <div className="article-meta">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="article-content">
        <p className="article-lead">{post.excerpt}</p>

        <p>{post.content}</p>

        <p>
          The goal isn't simply to learn individual tools. It's to understand
          how these ideas work together and use them to build meaningful
          applications.
        </p>
      </div>

      <Link to="/posts" className="secondary-button">
        ← Back to all posts
      </Link>
    </article>
  );
}