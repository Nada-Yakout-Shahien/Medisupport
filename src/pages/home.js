import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>HOME</title>
        <meta name="description" content="HOME" />
      </Helmet>

      <Header />

      {/* <div className="welcome">
        <img src="" alt="" />
        <h3>Welcome to MediSupport Website</h3>
        <h4>Heart disease prediction</h4>
        <p>Proin quis cras euismod sit et metus risus ut. Semper nam vel morbi sit cursus tincidunt massa et a. Dolor odio parturient cursus justo nunc enim, a, sit facilisi. Eleifend at ac lacus, ullamcorper mauris eget tortor mollis.</p>
        <button>Record Now</button>
      </div> */}

      <Footer />
    </>
  );
};

export default Home;