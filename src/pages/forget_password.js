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


        <section className="forgetp">
            <div className="forgetpassword">
                
                <h1 className="forgetpassword_title">Forgotten your password?</h1>
                <p className="forgetpassword_desc">There is nothing to worry about, we'll send you a message to help you reset your password.</p>
                

                <div className="form_box">
                <form>
                <div className="input_box">
                  <label htmlFor="">Email Address</label>
                    
                    <input type="email" placeholder="Enter personal or work email address"></input>
                </div>
                </form>
                </div>
                </div>
                </section>

                
        </>
  );
};

export default ForgetPassword;
