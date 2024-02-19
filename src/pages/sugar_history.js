import { Helmet } from "react-helmet-async";
//import React, { useState, useEffect } from "react";
import "./history.css";
//import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const SugarHistory = () => {
  
  return (
    <Layout>
      <Helmet>
        <title>Sugar History ♥</title>
        <meta name="description" content="Sugar History" />
      </Helmet>
    </Layout>
  );
};

export default SugarHistory;
