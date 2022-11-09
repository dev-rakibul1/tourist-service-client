import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "../context/PrivateRouter";
import Root from "../layout/Root";
import Error from "../pages/error/Error";
import Blog from "./../pages/blog/Blog";
import Booking from "./../pages/booking/Booking";
import Home from "./../pages/home/Home";
import Login from "./../pages/login/Login";
import PagesDetails from "./../pages/pagesDetails/PagesDetails";
import SingleDetailsServices from "./../pages/pagesDetails/SingleDetailsServices";
import Profile from "./../pages/profile/Profile";
import Register from "./../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blog",
        element: <Blog />,
        loader: () => fetch("http://localhost:5000/blog"),
      },
      {
        path: "/serviceDetails/:id",
        element: <PagesDetails />,
        loader: () => fetch("http://localhost:5000/tourist-all-services"),
      },
      {
        path: "/tourist-all-services/:id",
        element: (
          <PrivateRouter>
            <SingleDetailsServices />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tourist-all-services/${params.id}`),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRouter>
            <Booking />
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
