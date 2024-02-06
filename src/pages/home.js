import { Helmet } from "react-helmet-async";
import heart from "../images/heart.png";
import heartrate from "../images/heart-rate.png";
import bloodpressure from "../images/blood-pressure.png";
import bloodsugar from "../images/blood-sugar.png";
import bmi from "../images/bmi.png";
import arrow from "../images/ri-arrow-for-article.svg";
import { NavLink } from "react-router-dom";
import "./home.css";
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Medisupport HOME ♥</title>
        <meta name="description" content="HOME" />
      </Helmet>

      {/* homesec1 */}
      <div className="welcome-sec">
      <div className="homesec1">
        <div className="leftpart">
          <img src={heart} alt="" />
        </div>
        <div className="rightpart">
          <h2>
            Welcome to <span className="medi">MediSupport</span> Website
          </h2>
          <h3>Heart disease prediction</h3>
          <p>
            Proin quis cras euismod sit et metus risus ut. Semper nam vel morbi
            sit cursus tincidunt massa et a. Dolor odio parturient cursus justo
            nunc enim, a, sit facilisi. Eleifend at ac lacus, ullamcorper mauris
            eget tortor mollis.
          </p>
          <NavLink to="/welcome" className="btn">
            Record Now
          </NavLink>
        </div>
      </div>
      </div>
      {/* homesec2*/}
      <div className="smarthealth-sec">
        <div className="nameh">
          <h3>Smart Health Metrics</h3>
          <NavLink to="/Smart_health_metrics" className="trans">
            <p>See all</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <g clip-path="url(#clip0_1_2137)">
                <path
                  d="M27.6272 18.3333L18.4637 9.39329L20.8793 7.03662L34.1667 20L20.8793 32.9633L18.4637 30.6066L27.6272 21.6666H6.83337V18.3333H27.6272Z"
                  fill="#1F1F1F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2137">
                  <rect width="41" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
        </div>
        <div className="childh">
          <div className="recording">
            <div className="infh">
              <h4>Heart Rate</h4>
              <div className="num">
                <h3>65</h3>
                <p className="ex">PBM</p>
              </div>
            </div>
            <img src={heartrate} alt="" />
          </div>
          <div className="recording">
            <div className="infh">
              <h4>Blood Pressure</h4>
              <div className="num">
                <h3>140/90</h3>
                <p className="ex">mmHg</p>
              </div>
            </div>
            <img src={bloodpressure} alt="" />
          </div>
          <div className="recording">
            <div className="infh">
              <h4>Blood Sugar</h4>
              <div className="num">
                <h3>120</h3>
                <p className="ex">mg/dl</p>
              </div>
            </div>
            <img src={bloodsugar} alt="" />
          </div>
          <div className="recording">
            <div className="infh">
              <h4>BMI</h4>
              <div className="num">
                <h3>80</h3>
                <p className="ex">kg</p>
              </div>
            </div>
            <img src={bmi} alt="" />
          </div>
        </div>
      </div>
      {/* homesec3 */}
      <div className="articles-sec">
        <div className="word">
          Articles
          <NavLink to="/Reed_articles" className="trans">
            <p>See all</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <g clip-path="url(#clip0_1_2137)">
                <path
                  d="M27.6272 18.3333L18.4637 9.39329L20.8793 7.03662L34.1667 20L20.8793 32.9633L18.4637 30.6066L27.6272 21.6666H6.83337V18.3333H27.6272Z"
                  fill="#1F1F1F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2137">
                  <rect width="41" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
        </div>
        <div className="diss">
          <div className="disease">
            <p>Blood pressure</p>
            <NavLink to="/pressure">
              <img src={arrow} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="diss">
          <div className="disease">
            <p>Blood sugar</p>
            <NavLink to="/sugar">
              <img src={arrow} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="diss">
          <div className="disease">
            <p>BMI</p>
            <NavLink to="/bmi">
              <img src={arrow} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="diss">
          <div className="disease">
            <p>Heart</p>
            <NavLink to="/heart">
              <img src={arrow} alt="" />
            </NavLink>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Home;
