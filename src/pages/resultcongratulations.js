import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./results.css";

const Resultcongratulations = () => {
  return (
    <>
      <Helmet>
        <title>Result Congratulations ♥</title>
        <meta name="description" content="Result Congratulations" />
      </Helmet>

      <Header />
      <div className="res">
        
        <h3></h3>
        <p></p>
      </div>
      <Footer />
    </>
  );
};

export default Resultcongratulations;
