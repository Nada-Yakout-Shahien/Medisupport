import { Helmet } from "react-helmet-async";
import "./Blood_pressure.css";
import React from "react";
import Layout from "../components/Layout";

const Bloodpressure = () => {
    return (
        <Layout>
            <Helmet>
                <title> Blood Pressure♥ </title>{" "}
                <meta name="description" content="Blood Pressure" />
            </Helmet>{" "}
            <div className="BP-page">
                <div className="BP-address">
                    <p>Bloode Pressure</p>
                </div>
                <div className="BP-status">
                    <p>Average  <span>140/90</span> mmHG</p>
                    <button><p>Normal</p></button>
                </div>
                <div className="BP-datr">

                </div>
                <div className="BP-data">

                </div>
            </div>
        </Layout>
    );
};

export default Bloodpressure;
