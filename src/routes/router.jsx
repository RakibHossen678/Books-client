import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop";
import About from "../Components/About";
import Blog from "../Components/Blog";
import SingleBook from "../Components/SingleBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/book/:id",
        element: <SingleBook></SingleBook>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/book/${params.id}`),
      },
    ],
  },
]);

export default router;
