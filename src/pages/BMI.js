import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./BMI.css";
import React from "react";

function BMI(){
  return (
    <>
      <Helmet>
        <title>BMI ♥</title>
        <meta name="description" content="BMI" />
      </Helmet>

      <Header />
      
      <Footer />
    </>
  );
};

export default BMI;
