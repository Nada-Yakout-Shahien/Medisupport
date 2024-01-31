import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Aboutus from "./pages/About_us";
import SmartHealthMetrics from "./pages/Smart_health_metrics";
import Contactus from "./pages/Contact_us";
import Login from "./pages/login";
import Signup from "./pages/sign_up";
import Reedarticles from "./pages/Reed_articles";
import Doctors from "./pages/doctors";
import HeartRate from "./pages/Heart_rate";
import Bloodpressure from "./pages/Blood_pressure";
import Bloodsugar from "./pages/Blood_sugar";
import BMI from "./pages/BMI";

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
  {
    path: "/About_us",
    element: <Aboutus />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/Smart_health_metrics",
    element: <SmartHealthMetrics />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/Contact_us",
    element: <Contactus />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/Reed_articles",
    element: <Reedarticles />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/Doctors",
    element: <Doctors />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/heart_rate",
    element: <HeartRate />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/blood_pressure",
    element: <Bloodpressure />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/blood_sugar",
    element: <Bloodsugar />,
    errorElement: <h1>Sorry......</h1>,
  },
  {
    path: "/bmi",
    element: <BMI />,
    errorElement: <h1>Sorry......</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
