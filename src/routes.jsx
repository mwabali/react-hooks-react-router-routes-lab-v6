import React from "react";
import { Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";

function Layout(){
  return (
    <div>
<NavBar />
<main>
  <Outlet />
</main>
    </div>
  )
}

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />},
      {path:"directors", element:<Directors />},
      {path:"actors", element:<Actors />},
      {path:"movie/:id",element:<Movie />},
    ],
  

  }
   
  ];

export default routes;