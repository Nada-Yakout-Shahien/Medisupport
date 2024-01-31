import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./Blood_pressure.css";
import React from "react";

function Bloodpressure(){
  return (
    <>
      <Helmet>
        <title>Blood Pressure ♥</title>
        <meta name="description" content="Blood Pressure" />
      </Helmet>

      <Header />
      
      <Footer />
    </>
  );
};

export default Bloodpressure;
