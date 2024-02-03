import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./Activity.css";
import React from "react";

const Activity = () => {
  return (
    <>
      <Helmet>
        <title>Activity ♥</title>
        <meta name="description" content="Activity" />
      </Helmet>
      <Header />
      
      <Footer />
    </>
  );
};

export default Activity;

