import { createBrowserRouter, Link } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../layouts/Root/Root";
import Courses from "../components/Courses/Courses";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import CourseCards from "../components/Courses/CourseCards/CourseCards";
import CourseDetails from "../components/Courses/CourseDetails/CourseDetails";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/free-solid-svg-icons";
import Checkout from "../components/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/course"),
        children: [
          {
            path: "/courses/:id",
            element: <CourseCards></CourseCards>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/course-category/${params.id}`),
          },
        ],
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({params}) =>   fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: "*",
        element: (
          <div className="text-center m-5">
            <FontAwesomeIcon icon={faFaceDizzy} className="fs-1" />
            <h3 className="fs-1">
              Oops!! An Error Occured. <span className="text-danger">404!</span>
            </h3>
            <div className="mt-5">
              <h3 className="fs-3 text-danger">
                The page you're looking for is not Found.
              </h3>{" "}
            </div>
            <div className="mt-5">
              <Link to="/">
                <Button variant="dark">Let's Go back To the Home Page</Button>
              </Link>{" "}
            </div>
          </div>
        ),
      },
    ],
  },
]);
