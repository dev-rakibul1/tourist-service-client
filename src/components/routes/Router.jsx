import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "./../pages/blog/Blog";
import Home from "./../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/", element: <Blog /> },
    ],
  },
]);

export default router;
