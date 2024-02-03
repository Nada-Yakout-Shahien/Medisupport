import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./ar_disease.css";
import React from "react";
import Pimg from "../images/ar_img_p.png"

const ArPressure = () => {
  return (
    <>
      <Helmet>
        <title>Article Pressure ♥</title>
        <meta name="description" content="Article Pressure" />
      </Helmet>
      <Header />
      <div className="bg_article">
        <h3 className="address">Blood pressure</h3>
        <img className="P_img" src={Pimg} alt="" />
        <div className="topic">
          <p className="s_topic"></p>
          <p className="s_topic"></p>
          <p className="s_topic"></p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ArPressure;

