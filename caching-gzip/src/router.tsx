import { createBrowserRouter, Link } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>Main page</h1>
        <Link to="/about">about page</Link>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <h1>About page</h1>
        <Link to="/">main page</Link>
      </>
    ),
  },
]);
