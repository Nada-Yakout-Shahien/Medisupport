import { Helmet } from "react-helmet-async";
import "./Heart_rate.css";
import React from "react";
import Layout from '../components/Layout';

const HeartRate = () => {
  return (
    <Layout>
      <Helmet>
        <title>Heart Rate ♥</title>
        <meta name="description" content="Heart Rate" />
      </Helmet>
      
    </Layout>
  );
};

export default HeartRate;
