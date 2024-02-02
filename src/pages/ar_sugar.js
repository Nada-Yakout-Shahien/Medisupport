import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./ar_disease.css";
import React from "react";

const ArSugar = () => {
  return (
    <>
      <Helmet>
        <title>Article Sugar ♥</title>
        <meta name="description" content="Article Sugar" />
      </Helmet>
      <Header />
      
      <Footer />
    </>
  );
};

export default ArSugar;

