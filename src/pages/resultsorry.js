import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./results.css";

const Resultsorry = () => {
  return (
    <>
      <Helmet>
        <title>Result Sorry ♥</title>
        <meta name="description" content="Result Sorry" />
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

export default Resultsorry;
