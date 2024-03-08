import { Helmet } from "react-helmet-async";
import "./BMI.css";
import React from "react";
import Layout from "../components/Layout";

const BMI = () => {
  return (
    <Layout>
      <Helmet>
        <title>BMI ♥</title>
        <meta name="description" content="BMI" />
      </Helmet>
      <div className="bmi">
        <div className="bmi_r">
          
          <div className="bmir">
            <h2 className="rbmi__r">BMI</h2>
          </div>

          <div className="rbodyr">
            <p className="bmi_p">Gender</p>
          </div>

          <div className="but_bmi">
            <div className="rbutr">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
  <circle cx="15.8242" cy="15" r="15" fill="#BE0202"/>
</svg>
<p>Female</p>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BMI;
