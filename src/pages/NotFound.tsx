import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="error-code">404</span>

      <h1>Lost in the pages.</h1>

      <p>
        The page you're looking for doesn't exist or may have moved.
      </p>

      <Link to="/" className="primary-button">
        ← Back home
      </Link>
    </section>
  );
}