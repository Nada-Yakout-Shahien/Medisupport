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
import Welcome from "./pages/Welcome";
import FillInformation from "./pages/fill_information";
import Resultsorry from "./pages/resultsorry";
import Resultcongratulations from "./pages/resultcongratulations";
import ArPressure from "./pages/ar_pressure";
import ArSugar from "./pages/ar_sugar";
import ArBmi from "./pages/ar_bmi";
import ArHeart from "./pages/ar_heart";
import Activity from "./pages/Activity";
import DetailsBS from "./pages/details-bloodsuger";
import ForgetPassword from "./pages/forget_password";
import SugarHistory from "./pages/sugar_history";
import PressurHistory from "./pages/pressur_history";
import BmiHistory from "./pages/bmi_history";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/About_us",
    element: <Aboutus />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Smart_health_metrics",
    element: <SmartHealthMetrics />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Contact_us",
    element: <Contactus />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Reed_articles",
    element: <Reedarticles />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Doctors",
    element: <Doctors />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/heart_rate",
    element: <HeartRate />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/blood_pressure",
    element: <Bloodpressure />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/blood_sugar",
    element: <Bloodsugar />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/bmi",
    element: <BMI />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/welcome",
    element: <Welcome />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/fillinfo",
    element: <FillInformation />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/pressure",
    element: <ArPressure />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/sugar",
    element: <ArSugar />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/ABmi",
    element: <ArBmi />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/heart",
    element: <ArHeart />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Activity",
    element: <Activity />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/DetailsBS",
    element: <DetailsBS />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/SugarHistory",
    element: <SugarHistory />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/PressurHistory",
    element: <PressurHistory />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/BmiHistory",
    element: <BmiHistory />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Resultsorry",
    element: <Resultsorry />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Resultcongratulations",
    element: <Resultcongratulations />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/forget_password",
    element: <ForgetPassword />,
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
