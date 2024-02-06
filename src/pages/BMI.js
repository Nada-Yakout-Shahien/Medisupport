import { Helmet } from "react-helmet-async";
import "./BMI.css";
import React from "react";
import Layout from '../components/Layout';

const BMI = () => {
  return (
    <Layout>
      <Helmet>
        <title>BMI ♥</title>
        <meta name="description" content="BMI" />
      </Helmet>

    </Layout>
  );
};

export default BMI;
