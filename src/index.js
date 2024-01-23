import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {HelmetProvider} from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
// import Html from "./pages/html";
// import Css from "./pages/css";
// import Javascript from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <h1>Sorry......</h1>,
  },
  // {
  //   path: "/Css",
  //   element: <Css />,
  //   errorElement: <h1>Sorry......</h1>,
  // },
  // {
  //   path: "/Javascript",
  //   element: <Javascript />,
  //   errorElement: <h1>Sorry......</h1>,
  //},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
