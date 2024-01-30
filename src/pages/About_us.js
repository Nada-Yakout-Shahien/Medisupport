import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import React from "react";
import pic_about_left from "../images/pic_about_left.png";
import pic_about_right1 from "../images/pic_about_right1.png";
import pic_about_right2 from "../images/pic_about_right2.png";
import line from "../images/line-about-ourfeatures.png";
import right from "../images/right-arrow.png";
import left from "../images/left-arrow.png";

import { useState } from "react";
import "./About_us.css";

const Aboutus = () => {
  const [scrollX, setScrollX] = useState(0);

  const maxScrollLeft = 0;
  const maxScrollRight = -1230;

  const scrollRight = () => {
    setScrollX(scrollX - 374 > maxScrollRight ? scrollX - 374 : maxScrollRight);
  };

  const scrollLeft = () => {
    setScrollX(scrollX + 374 < maxScrollLeft ? scrollX + 374 : maxScrollLeft);
  };

  const showRightArrow = scrollX > maxScrollRight;
  const showLeftArrow = scrollX < maxScrollLeft;

  return (
    <>
      <Helmet>
        <title>About us ♥</title>
        <meta name="description" content="Aboutus" />
      </Helmet>

      <Header />

      <div className="about-us-container">
        <div className="about-us-section">
          <div className="left-part">
            <h2>About Us</h2>
            <p>
              Welcome to <span className="medi-text">Medisupport</span>, where
              we envision a world where health is effortlessly accessible and
              actively managed. Our commitment is to empower individuals on
              their journey to well-being by providing a comprehensive health
              management platform that seamlessly integrates technology with
              personalized care.
            </p>
            <img src={pic_about_left} alt="pic-about-left" />
          </div>
          <div className="right-part">
            <img src={pic_about_right1} alt="pic_about_right1" />
            <h2>Our Mission</h2>
            <p>
              At <span className="medi-text">Medisupport</span>, our mission is
              to revolutionize healthcare by putting you at the center of your
              well-being. We believe that everyone deserves proactive and
              personalized health management. Through cutting-edge technology,
              data-driven insights, and a user-friendly interface, we strive to
              make health monitoring and management an intuitive part of your
              daily life.
            </p>
          </div>
        </div>
        <div className="about-us-section2">
          <div className="parent">
            <h2>What Sets Us Apart</h2>
            <p>
              -Holistic Health Approach:We go beyond measuring basic metrics.
              <span className="medi-text2">Medisupport</span> is designed to
              provide a 360-degree view of your health, from heart rate and
              blood pressure to BMI and predictive heart disease analysis.
              <br />
              <hr />
              -Expert Guidance:Connect with experienced healthcare professionals
              right from the app. Book appointments, chat with doctors, and
              receive personalized advice tailored to your unique health
              profile.
              <br />
              <hr />
              -Education and Information:Stay informed and engaged with our
              library of health articles. We believe that knowledge is a
              powerful tool for making informed decisions about your well-being.
              <br />
              <hr />
              -Visual Insights:Understand your health data better through
              intuitive diagrams. Visual representations of your blood pressure,
              sugar levels, BMI, and heart rate empower you to grasp your health
              at a glance.
            </p>
          </div>
          <div className="down-part">
            <div>
              <h2>Your Health, Your Journey</h2>
              <p>
                <span className="medi-text2">Medisupport</span> is more than
                just an app; it's a partner in your health journey. Whether
                you're proactively managing your well-being or dealing with
                specific health concerns, we're here to support you every step
                of the way. Welcome to a healthier, informed, and empowered life
                with <span className="medi-text2">Medisupport</span>.
              </p>
              <p className="dparag">
                Stay well, stay informed, and take control of your health with{" "}
                <span className="medi-text3">Medisupport.</span>
              </p>
            </div>
            <img src={pic_about_right2} alt="pic_about_right1" />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="6"
          viewBox="0 0 1440 6"
          fill="none"
        >
          <path
            d="M0 1L1439.99 4.98339"
            stroke="#BE0202"
            stroke-opacity="0.5"
          />
        </svg>
        <div className="about-us-section3">
          <div className="title">
            <img src={line} alt="" />
            <h3>Our Features</h3>
          </div>
          <div className="container">
            <div className="arrow-container">
              {showLeftArrow && (
                <button className="arrow left" onClick={scrollLeft}>
                  <img src={left} alt="" />
                </button>
              )}
            </div>
            <div
              className="Ourfeatures"
              style={{ transform: `translateX(${scrollX}px)` }}
            >
              <div className="feature">
                <p>
                  Monitoring the health status of patients with hypertension and
                  diabetes by entering some data about the disease and
                  displaying the results in the form of diagrams. Additionally,
                  determining the patient's BMI by entering their weight and
                  height and providing medical advice to assist them.
                </p>
              </div>
              <div className="feature">
                <p>
                  Assess your heart health using PPG camera technology, where
                  the patient places their finger on the rear camera to measure
                  heartbeats. To benefit from this feature, download our
                  dedicated app.
                </p>
              </div>
              <div className="feature">
                <p>
                  Reminder the patient of their medication schedule. However,
                  this feature is available in our dedicated application. Please
                  download it to benefit from this feature.
                </p>
              </div>
              <div className="feature">
                <p>
                  Providing specialized doctors where patients can book
                  appointments online or visit the doctor by providing their
                  address and phone number. Additionally, there is a private
                  chat for communication between the doctor and the patient.
                </p>
              </div>
              <div className="feature">
                <p>
                  Providing medical articles for patients to read, helping them
                  to become more aware and informed about their medical
                  condition.
                </p>
              </div>
              <div className="feature">
                <p>
                  Predicting heart disease using artificial intelligence by
                  inputting specific patient data.
                </p>
              </div>
            </div>
            <div className="arrow-container">
              {showRightArrow && (
                <button className="arrow right" onClick={scrollRight}>
                  <img src={right} alt="" />
                </button>
              )}
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="6"
          viewBox="0 0 1440 6"
          fill="none"
        >
          <path
            d="M0 1L1439.99 4.98339"
            stroke="#BE0202"
            stroke-opacity="0.5"
          />
        </svg>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;
