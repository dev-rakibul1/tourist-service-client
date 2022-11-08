import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "./../pages/blog/Blog";
import Home from "./../pages/home/Home";
import PagesDetails from "./../pages/pagesDetails/PagesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/serviceDetails/:id",
        element: <PagesDetails />,
        loader: () => fetch("http://localhost:5000/tourist-all-services"),
      },
    ],
  },
]);

export default router;
