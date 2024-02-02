import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./ar_disease.css";
import React from "react";

const ArPressure = () => {
  return (
    <>
      <Helmet>
        <title>Article Pressure ♥</title>
        <meta name="description" content="Article Pressure" />
      </Helmet>
      <Header />
      
      <Footer />
    </>
  );
};

export default ArPressure;

