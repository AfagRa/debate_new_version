import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import BlogPage from "./pages/BlogPage";
import SingleNews from "./pages/SingleNews";
import SingleBlog from "./pages/SingleBlog";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/news/:id" element={<SingleNews />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
        </>
    )
)