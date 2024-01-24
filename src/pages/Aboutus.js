import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";

import React from 'react';

const Aboutus = () => {
  return (
    <>
      <Helmet>
        <title>About us</title>
        <meta name="description" content="Aboutus" />
      </Helmet>

      <Header />
      
    

      <Footer />
    </>
  );
}

export default Aboutus;
