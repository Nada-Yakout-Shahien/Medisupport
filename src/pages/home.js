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

      <Header />

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

      <Footer />
    </>
  );
};

export default Home;
