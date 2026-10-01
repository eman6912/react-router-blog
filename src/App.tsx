import { Route, Routes } from "react-router";
import SiteLayout from "./components/siteLayout";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostDetail from "./pages/PostDetail";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:slug" element={<PostDetail />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}