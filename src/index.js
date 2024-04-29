import React from "react";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from './components/ProtectedRoute';
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
import Doctors from "./pages/Doctors";
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
import Profile from "./pages/Profile";
import DetailsBS from "./pages/details-bloodsuger";
import ForgetPassword from "./pages/forget_password";
import SugarHistory from "./pages/sugar_history";
import PressurHistory from "./pages/pressur_history";
import BmiHistory from "./pages/bmi_history";
import BookingD from "./pages/Booking-Details";
import DetailsBloodpressure from "./pages/details-bloodpressure";
import DoneNewPass from "./pages/done_new_pass";
import NewPassword from "./pages/New_Password";
import VerificationCode from "./pages/Verification_Code";
import Loading from "./pages/loading";
import Payment from "./pages/payment";
import Chat from "./pages/chat";
import BookingOffline from "./pages/Booking_Offline";
import BookingOnline from "./pages/Booking_Online";
import BMI1 from "./pages/BMI1";

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
    element: (
      <ProtectedRoute>
        <Aboutus />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Smart_health_metrics",
    element: (
      <ProtectedRoute>
        <SmartHealthMetrics />
      </ProtectedRoute>
    ),
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
    element: (
      <>
        <Contactus />
      </>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Reed_articles",
    element: (
      <ProtectedRoute>
        <Reedarticles />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Doctors",
    element: (
      <ProtectedRoute>
        <Doctors />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/heart_rate",
    element: (
      <ProtectedRoute>
        <HeartRate />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/blood_pressure",
    element: (
      <ProtectedRoute>
        <Bloodpressure />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/blood_sugar",
    element: (
      <ProtectedRoute>
        <Bloodsugar />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/bmi",
    element: (
      <ProtectedRoute>
        <BMI />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/welcome",
    element: (
      <ProtectedRoute>
        <Welcome />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/fillinfo",
    element: (
      <ProtectedRoute>
        <FillInformation />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/pressure",
    element: (
      <ProtectedRoute>
        <ArPressure />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/sugar",
    element: (
      <ProtectedRoute>
        <ArSugar />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/ABmi",
    element: (
      <ProtectedRoute>
        <ArBmi />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/heart",
    element: (
      <ProtectedRoute>
        <ArHeart />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Activity",
    element: (
      <ProtectedRoute>
        <Activity />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/DetailsBS",
    element: (
      <ProtectedRoute>
        <DetailsBS />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/SugarHistory",
    element: (
      <ProtectedRoute>
        <SugarHistory />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/PressurHistory",
    element: (
      <ProtectedRoute>
        <PressurHistory />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/BmiHistory",
    element: (
      <ProtectedRoute>
        <BmiHistory />
      </ProtectedRoute>
    ),
    path: "/bmi_History",
    element: <BmiHistory />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Resultsorry",
    element: (
      <ProtectedRoute>
        <Resultsorry />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Resultcongratulations",
    element: (
      <ProtectedRoute>
        <Resultcongratulations />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/forget_password",
    element: (
      <ProtectedRoute>
        <ForgetPassword />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Booking",
    element: (
      <ProtectedRoute>
        <BookingD />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/DetailsBP",
    element: (
      <ProtectedRoute>
        <DetailsBloodpressure />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Verification_Code",
    element: (
      <ProtectedRoute>
        <VerificationCode />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/New_Password",
    element: (
      <ProtectedRoute>
        <NewPassword />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/done_New_Pass",
    element: (
      <ProtectedRoute>
        <DoneNewPass />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Loading",
    element: (
      <ProtectedRoute>
        <Loading />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Payment",
    element: (
      <ProtectedRoute>
        <Payment />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path: "/Chat",
    element: (
      <ProtectedRoute>
        <Chat />
      </ProtectedRoute>
    ),
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
  {
    path:"/Book",
    element:<BookingOffline/>,
    errorElement:<h1>Sorry, No page to display....</h1>
  },
  {
    path:"/BookOn",
    element:<BookingOnline/>,
    errorElement:<h1>Sorry, No page to display....</h1>
  },
  {
    path: "/BMI1",
    element: <BMI1 />,
    errorElement: <h1>Sorry, No page to display....</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
