import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./Blood_sugar.css";
import React from "react";

function Bloodsugar(){
  return (
    <>
      <Helmet>
        <title>Blood Sugar ♥</title>
        <meta name="description" content="Blood Sugar" />
      </Helmet>

      <Header />
      
      <Footer />
    </>
  );
};

export default Bloodsugar;
