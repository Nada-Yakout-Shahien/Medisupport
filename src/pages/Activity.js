import { Helmet } from "react-helmet-async";
import "./Activity.css";
import React from "react";
import Layout from '../components/Layout';

const Activity = (props) => {

  return (
    <Layout>
      <Helmet>
        <title>Activity ♥</title>
        <meta name="description" content="Activity" />
      </Helmet>

                      {/* section-1 */}

      <div className="dropdown-menu">               
        <select onChange={props.onChange}>
          <option value="Blood Pressure">Blood Pressure</option>
          <option value="Blood Sugar">Blood Sugar</option>
        </select>
      </div> 

      <div className="rate">
        <div className="average">
          <h5>Average</h5>
          <div className="ratio">
            <p>140/90</p> 
            <h5>mmHG</h5>
          </div>
        </div>
        <button>Normal</button>
      </div>
    </Layout>
  );
};

export default Activity;

