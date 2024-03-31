import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Components/Error";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
