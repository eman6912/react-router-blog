import { Link } from "react-router";
import { posts } from "../data/posts";
import PostCard from "../components/postcard";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">WELCOME TO MY BLOG</span>

          <h1>
            Ideas worth
            <span> exploring.</span>
          </h1>

          <p>
            Thoughts, lessons, and experiences about React, TypeScript,
            development, and continuous learning.
          </p>

          <div className="hero-actions">
            <Link to="/posts" className="primary-button">
              Explore posts →
            </Link>

            <Link to="/about" className="secondary-button">
              About me
            </Link>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="decoration-circle" />
          <span>01</span>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LATEST WRITING</span>
            <h2>Featured thoughts</h2>
          </div>

          <Link to="/posts" className="view-all">
            View all →
          </Link>
        </div>

        <div className="posts-grid">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}