import { posts } from "../data/posts";
import PostCard from "../components/postcard";

export default function PostsPage() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <span className="eyebrow">THE ARCHIVE</span>
        <h1>All Posts</h1>
        <p>
          Explore everything I've written about development, learning, and
          personal growth.
        </p>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}