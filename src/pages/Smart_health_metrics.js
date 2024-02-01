import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import React from "react";
import "./Smart_health_metrics.css";
import heartrate from "../images/heart-rate.png";
import bloodpressure from "../images/blood-pressure.png";
import bloodsugar from "../images/blood-sugar.png";
import bmi from "../images/bmi.png";
import { NavLink } from "react-router-dom";

const SmartHealthMetrics = () => {
  return (
    <>
      <Helmet>
        <title>Smart health metrics ♥</title>
        <meta name="description" content="Smart_health_metrics" />
      </Helmet>

      {/* <Header /> */}
      <div className="disease">
        <h3>Smart Health Metrics</h3>
        <div className="child">
          <div className="recording">
            <img src={heartrate} alt="" />
            <div className="inf">
              <h4>Heart Rate</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut{" "}
              </p>
              <NavLink to="/heart_rate" className="btn">Recording Now</NavLink>
            </div>
          </div>
          <div className="recording">
            <img src={bloodpressure} alt="" />
            <div className="inf">
              <h4>Blood Pressure</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut{" "}
              </p>
              <NavLink to="/blood_pressure" className="btn">Recording Now</NavLink>
            </div>
          </div>
          <div className="recording">
            <img src={bloodsugar} alt="" />
            <div className="inf">
              <h4>Blood Sugar</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut{" "}
              </p>
              <NavLink to="/blood_sugar" className="btn">Recording Now</NavLink>
            </div>
          </div>
          <div className="recording">
            <img src={bmi} alt="" />
            <div className="inf">
              <h4>BMI</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut{" "}
              </p>
              <NavLink to="/bmi" className="btn">Recording Now</NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SmartHealthMetrics;
