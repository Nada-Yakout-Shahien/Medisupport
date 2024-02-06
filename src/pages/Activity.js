import { Helmet } from "react-helmet-async";
import "./Activity.css";
import React from "react";
import Layout from '../components/Layout';

const Activity = () => {
  return (
    <Layout>
      <Helmet>
        <title>Activity ♥</title>
        <meta name="description" content="Activity" />
      </Helmet>

    </Layout>
  );
};

export default Activity;

