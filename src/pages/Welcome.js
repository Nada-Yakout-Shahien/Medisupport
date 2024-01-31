import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./Welcome.css";

const Welcome = () => {
  return (
    <>
      <Helmet>
        <title>Welcome Medisupport ♥</title>
        <meta name="description" content="Welcome" />
      </Helmet>
          
      <Header />
        
      

      <Footer />
    </>
  );
}

export default Welcome;
