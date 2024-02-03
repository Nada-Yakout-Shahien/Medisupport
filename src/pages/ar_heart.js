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
      <div className="bg_article">
        <h3 className="address">Heart</h3>
        <img className="P_img" src="" alt="" />
        <div className="topic">
          <p className="s_topic"></p>
          <p className="s_topic"></p>
          <p className="s_topic"></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArHeart;

