import { Helmet } from "react-helmet-async";
import "./history.css";
//import { NavLink } from "react-router-dom";
import Layout from '../components/Layout';

const SugarHistory = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sugar History ♥</title>
        <meta name="description" content="Sugar History" />
      </Helmet>
      <div className="history">
        <h3></h3>
        <div className="bloodhis">

        </div>
        <div className="his">
          
        </div>
      </div>
    </Layout>
  );
}

export default SugarHistory;
