import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import React from "react";
import  "./Smart_health_metrics.css";


const SmartHealthMetrics = () => {
  return (
    <>
      <Helmet>
        <title>Smart health metrics ♥</title>
        <meta name="description" content="Smart_health_metrics" />
      </Helmet>

      <Header />
      <div className="disease">
        <h3>Smart Health Metrics</h3>
        <div className="child">
          <div className="recording">
            
          </div>
          <div className="recording">

          </div>
          <div className="recording">

          </div>
          <div className="recording">

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SmartHealthMetrics;
