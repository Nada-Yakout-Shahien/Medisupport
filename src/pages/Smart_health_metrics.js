import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import React from "react";

const SmartHealthMetrics = () => {
  return (
    <>
      <Helmet>
        <title>Smart health metrics ♥</title>
        <meta name="description" content="Smart_health_metrics" />
      </Helmet>

      <Header />

      <Footer />
    </>
  );
};

export default SmartHealthMetrics;
