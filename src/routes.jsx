import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

// Shared Layout with NavBar on EVERY page
function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "actors",
        element: <Actors />,
      },
      {
        path: "directors",
        element: <Directors />,
      },
      {
        path: "movie/:id",
        element: <Movie />,
      },
    ],
  },
];

export default routes;