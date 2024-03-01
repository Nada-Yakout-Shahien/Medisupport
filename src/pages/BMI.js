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
       <div className="bmi_r">
       <div className="bmir">
         <h2 className="rbmi__r">BMI</h2>
         </div>
       <div className="rbodyr">
        <p className="bmi_p">Gender</p>
       </div>
       
       </div>
       
      
    </Layout>
  );
};

export default BMI;
