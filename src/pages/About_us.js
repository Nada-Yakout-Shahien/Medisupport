import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import React from "react";
import pic_about_left from "../images/pic_about_left.png";
import pic_about_right1 from "../images/pic_about_right1.png";
import pic_about_right2 from "../images/pic_about_right2.png";
import "./About_us.css";

const Aboutus = () => {
  return (
    <>
      <Helmet>
        <title>About us ♥</title>
        <meta name="description" content="Aboutus" />
      </Helmet>

      <Header />

      <div className="about-us-container">
        <section className="about-us-section">
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
        </section>
        <section className="about-us-section2">
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
                <span className="medi-text2">Medisupport</span> is more than just
                an app; it's a partner in your health journey. Whether you're
                proactively managing your well-being or dealing with specific
                health concerns, we're here to support you every step of the
                way. Welcome to a healthier, informed, and empowered life with{" "}
                <span className="medi-text2">Medisupport</span>.
              </p>
              <p className="dparag">
                Stay well, stay informed, and take control of your health with{" "}
                <span className="medi-text3">Medisupport.</span>
              </p>
            </div>
            <img src={pic_about_right2} alt="pic_about_right1" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;
