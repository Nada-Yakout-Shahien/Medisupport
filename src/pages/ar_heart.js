import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./ar_disease.css";
import React from "react";

const ArHeart = () => {
  return (
    <>
      <Helmet>
        <title>Article Heart ♥</title>
        <meta name="description" content="Article Heart" />
      </Helmet>
      <Header />
      
      <Footer />
    </>
  );
};

export default ArHeart;

