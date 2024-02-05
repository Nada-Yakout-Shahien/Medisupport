import { Helmet } from "react-helmet-async";
import "./Welcome.css";
import riarrow from "../images/ri-arrow-wel.jpg";
import { NavLink } from "react-router-dom";
import Layout from '../components/Layout';

const Welcome = () => {
  return (
    <Layout>
      <Helmet>
        <title>Welcome Medisupport ♥</title>
        <meta name="description" content="Welcome" />
      </Helmet>
      <div className="welcome">
        <div className="wel">
          <h3>Welcome</h3>
          <p className="par">We will help you check on your heart</p>
          <NavLink to="/fillinfo" className="link">
            <p>Get started </p>
            <img src={riarrow} alt="" />
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
