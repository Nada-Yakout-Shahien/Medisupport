import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./ar_disease.css";
import React from "react";

const ArBmi = () => {
  return (
    <>
      <Helmet>
        <title>Article Bmi ♥</title>
        <meta name="description" content="Article Bmi" />
      </Helmet>
      <Header />
      
      <Footer />
    </>
  );
};

export default ArBmi;


