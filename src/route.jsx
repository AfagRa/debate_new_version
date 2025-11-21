import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import BlogPage from "./pages/BlogPage";
import App from "./App";
import BlogDetailPage from "./pages/BlogDetailPage";
import NewsDetailPage from "./pages/NewsDetailPage";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>  
      <Route index element={<HomePage />} />
      <Route path="news" element={<NewsPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="news/:id" element={<NewsDetailPage />} />
      <Route path="blog/:id" element={<BlogDetailPage />} />
    </Route>
  )
);