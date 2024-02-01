import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./fill_information.css";
import { NavLink } from "react-router-dom";

const FillInformation = () => {
  return (
    <>
      <Helmet>
        <title>Fill Information ♥</title>
        <meta name="description" content="Fill Information" />
      </Helmet>
          
      {/* <Header /> */}
        <div className="info">
          <h3>Please fill in the information</h3>
          <div className="form1">

          </div>
          <div className="form2">

          </div>
          {/* <NavLink to="">Result</NavLink> */}
        </div>
      {/* <Footer /> */}
    </>
  );
}

export default FillInformation;
