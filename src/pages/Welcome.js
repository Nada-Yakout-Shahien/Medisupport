import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./Welcome.css";
import riarrow from "../images/ri-arrow-wel.jpg";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Helmet>
        <title>Welcome Medisupport ♥</title>
        <meta name="description" content="Welcome" />
      </Helmet>
          
      <Header />
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
      <Footer />
    </>
  );
}

export default Welcome;
