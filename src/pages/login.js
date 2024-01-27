import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./login.css";
import React from "react";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login ♥</title>
        <meta name="description" content="Login" />
      </Helmet>
      <Header />
      
      <Footer />
    </>
  );
};

export default Login;


