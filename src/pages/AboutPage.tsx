import { Link } from "react-router";

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-intro">
        <span className="eyebrow">ABOUT THE BLOG</span>

        <h1>
          Learning,
          <span> building,</span>
          <br />
          sharing.
        </h1>
      </div>

      <div className="about-content">
        <p>
          Notes & Ideas is a small space for documenting the journey of
          learning software development.
        </p>

        <p>
          From React and TypeScript to the lessons that come from building
          real projects, this blog focuses on turning concepts into practical
          knowledge.
        </p>

        <Link to="/posts" className="primary-button">
          Read the posts →
        </Link>
      </div>
    </section>
  );
}