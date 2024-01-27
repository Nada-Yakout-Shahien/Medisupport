import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./sign_up.css";
import React from "react";

const Sign_up  = () => {
  return (
    <>
      <Helmet>
        <title>Sign up ♥</title>
        <meta name="description" content="Sign up" />
      </Helmet>
      <Header />
      
      <Footer />
    </>
  );
};

export default Sign_up;

