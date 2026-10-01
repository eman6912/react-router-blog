import { NavLink, Outlet } from "react-router";

export default function SiteLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="nav-container">
          <NavLink to="/" className="logo">
            <span className="logo-mark">N</span>
            <span>Notes & Ideas</span>
          </NavLink>

          <nav className="main-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Posts
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© 2026 Notes & Ideas</p>
        <p>Built with React + TypeScript</p>
      </footer>
    </div>
  );
}