import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "./../pages/blog/Blog";
import Booking from "./../pages/booking/Booking";
import Home from "./../pages/home/Home";
import PagesDetails from "./../pages/pagesDetails/PagesDetails";
import SingleDetailsServices from "./../pages/pagesDetails/SingleDetailsServices";

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
      {
        path: "/tourist-all-services/:id",
        element: <SingleDetailsServices />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tourist-all-services/${params.id}`),
      },
      {
        path: "/booking/:id",
        element: <Booking />,
      },
    ],
  },
]);

export default router;
