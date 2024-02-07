import React from 'react';
import ScrollToTop from './ScrollToTop';
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header/>
      
      {children}

      <Footer/>
    </>
  );
};

export default Layout;
