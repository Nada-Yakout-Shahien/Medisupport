import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import React from "react";
import pic_about_left from "../images/pic_about_left.png";
import pic_about_right1 from "../images/pic_about_right1.png";
import pic_about_right2 from "../images/pic_about_right2.png";
import line from "../images/line-about-ourfeatures.png";
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="107"
                    viewBox="0 0 54 107"
                    fill="none"
                  >
                    <path
                      d="M44.3173 105.781L44.3098 105.781C43.2504 105.785 42.2038 105.551 41.2466 105.097C40.2897 104.643 39.4466 103.981 38.7793 103.158C38.7792 103.158 38.7791 103.158 38.7789 103.158L2.11633 57.6141L2.11308 57.6101C1.07015 56.3414 0.5 54.7499 0.5 53.1075C0.5 51.4655 1.06981 49.8745 2.11216 48.6059C2.11247 48.6055 2.11277 48.6051 2.11308 48.6048L40.0652 3.0623L40.0656 3.06181C41.2693 1.61361 42.999 0.702897 44.8741 0.530009C46.7493 0.357121 48.6163 0.936224 50.0645 2.13992C51.5127 3.34362 52.4235 5.07331 52.5963 6.94848C52.7692 8.82351 52.1902 10.6904 50.9867 12.1386C50.9866 12.1387 50.9865 12.1388 50.9864 12.1389L17.0559 52.8252L16.7933 53.14L17.0506 53.4592L49.843 94.1461L49.843 94.1462L49.8482 94.1524C50.7153 95.1932 51.266 96.4606 51.4354 97.8047C51.6047 99.1488 51.3855 100.513 50.8036 101.737C50.2218 102.96 49.3017 103.991 48.1522 104.708C47.0027 105.425 45.6719 105.797 44.3173 105.781Z"
                      fill="white"
                      stroke="#BE0202"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="Ourfeatures"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="109"
                    viewBox="0 0 55 109"
                    fill="none"
                  >
                    <path
                      d="M7.7662 107.842L7.75069 107.841L7.73516 107.841C6.04759 107.845 4.41215 107.257 3.11273 106.18C2.38143 105.574 1.77692 104.829 1.33382 103.989C0.890707 103.149 0.617722 102.229 0.530504 101.283C0.443285 100.337 0.543549 99.3833 0.825549 98.4761C1.10755 97.5689 1.56574 96.7263 2.17389 95.9965L36.7704 54.6042L37.0333 54.2896L36.7763 53.9702L3.41497 12.5001L3.41352 12.4983C2.81358 11.7596 2.36555 10.9095 2.0952 9.997C1.82484 9.08451 1.7375 8.12758 1.83817 7.18122C1.93885 6.23486 2.22556 5.31773 2.68184 4.48254C3.13811 3.64735 3.75495 2.91057 4.4969 2.31455L4.50564 2.30753L4.51405 2.30013C5.26134 1.64261 6.13646 1.14666 7.08451 0.843391C8.03256 0.540123 9.03306 0.436092 10.0232 0.537821C11.0134 0.639549 11.9718 0.944844 12.8384 1.43455C13.705 1.92425 14.461 2.58778 15.059 3.38351L15.064 3.39017L15.0692 3.39666L52.369 49.7319L52.3723 49.7359C53.4346 51.0282 54.0153 52.6493 54.0153 54.3222C54.0153 55.9947 53.4349 57.6154 52.3731 58.9076C52.3728 58.9079 52.3726 58.9082 52.3723 58.9085L13.7617 105.241L13.7609 105.242C13.0364 106.116 12.116 106.807 11.0744 107.259C10.0328 107.711 8.89945 107.911 7.7662 107.842Z"
                      fill="white"
                      stroke="#BE0202"
                    />
                  </svg>
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
