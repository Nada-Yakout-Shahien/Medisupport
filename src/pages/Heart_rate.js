import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./Heart_rate.css";
import React from "react";

const HeartRate = () => {
  return (
    <>
      <Helmet>
        <title>Heart Rate ♥</title>
        <meta name="description" content="Heart Rate" />
      </Helmet>

      <Header />
      
      <Footer />
    </>
  );
};

export default HeartRate;
