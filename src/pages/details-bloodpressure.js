import { Helmet } from "react-helmet-async";
import "./Blood_pressure.css";
//import React, { useState } from "react";
import Layout from "../components/Layout";
//import { NavLink } from "react-router-dom";
const DetailsBloodpressure = () => {
  return (
    <Layout>
      <Helmet>
        <title>Details Blood Pressure♥ </title>{" "}
        <meta name="description" content="Details Blood Pressure" />
      </Helmet>{" "}
      <div className="detailsbp">
          
      </div>
    </Layout>
  );
}

export default DetailsBloodpressure;
