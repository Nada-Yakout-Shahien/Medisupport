import { Helmet } from "react-helmet-async";
import "./history.css";
//import { NavLink } from "react-router-dom";
import Layout from '../components/Layout';


const PressurHistory = () => {
  return (
    <Layout>
      <Helmet>
        <title>Pressur History ♥</title>
        <meta name="description" content="Pressur History" />
      </Helmet>
      
    </Layout>
  );
}

export default PressurHistory;


