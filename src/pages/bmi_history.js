import { Helmet } from "react-helmet-async";
import "./history.css";
//import { NavLink } from "react-router-dom";
import Layout from '../components/Layout';

const BmiHistory = () => {
  return (
    <Layout>
      <Helmet>
        <title>Bmi History ♥</title>
        <meta name="description" content="Bmi History" />
      </Helmet>
      
    </Layout>
  );
}

export default BmiHistory;

