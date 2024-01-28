import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./login.css";
import React from "react";
import log from "../images/logIn.png";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login ♥</title>
        <meta name="description" content="Login" />
      </Helmet>
      <Header />
      <div className="log">
        <div className="flex1">
          <h2>Log In</h2>
          <div className="lbl">
            <div className="lbl1">
              <label htmlFor="">Email Address</label>
              <input className="inp" type="text" />
            </div>
            <div className="lbl2">
              <label htmlFor="">Password</label>
              <input type="text" className="inp"/>
              <div className="disc">
                It must be a combination of minimum 8 letters, numbers, and
                symbols.
              </div>
            </div>
          </div>
          <div className="parent">
            <label className="lbl3" htmlFor="">
              <div className="check">
                <input type="checkbox" name="" id="check" />
              </div>
              <div className="rem">Remember me</div>
            </label>
            <div className="forget">Forgot Password?</div>
          </div>
        </div>
        <div classNEmail Addressame="flex2">
          <img src={log} alt="log_in" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
