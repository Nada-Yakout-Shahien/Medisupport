import { Helmet } from "react-helmet-async";
import "./forget_password.css";
import React from "react";


const ForgetPassword = () => {
    return (
      <>
        <Helmet>
          <title>forget_password ♥</title>
          <meta name="description" content="forget_password" />
        </Helmet>


        <div className="forget">
            <div className="password">
                <div className="first">
                <h1>Forgotten your password?</h1>
                <p>There is nothing to worry about, we'll send you a message to help you reset your password.</p>
                </div>

                <div className="last">
                    <p>Email Address</p>
                    <input type="email" placeholder="Enter personal or work email address"></input>
                </div>

                <div className="button3">
                <input type="submit" value="Send Reset Link" />
                </div>
            </div>
        </div>

        </>
  );
};

export default ForgetPassword;
