import { Helmet } from "react-helmet-async";
import "./results.css";
import Layout from '../components/Layout';

const Resultcongratulations = () => {
  return (
    <Layout>
      <Helmet>
        <title>Result Congratulations ♥</title>
        <meta name="description" content="Result Congratulations" />
      </Helmet>

      <div className="res">
        
        <h3></h3>
        <p></p>
      </div>
    </Layout>
  );
};

export default Resultcongratulations;
