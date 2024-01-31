import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./Reed_articles.css";
import React from "react";

const Reed_articles = () => {
  return (
    <>
      <Helmet>
        <title>Reed articles ♥</title>
        <meta name="description" content="Reed articles" />
      </Helmet>
      <Header />
        
      <Footer />
    </>
  );
};

export default Reed_articles;


