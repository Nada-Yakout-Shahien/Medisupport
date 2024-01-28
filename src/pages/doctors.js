import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./doctors.css";
import React from "react";

const Doctors = () => {
  return (
    <>
      <Helmet>
        <title>Doctors ♥</title>
        <meta name="description" content="Doctors" />
      </Helmet>

      <Header />
      
      <Footer />
    </>
  );
};

export default Doctors;
