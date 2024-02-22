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



        <section className="forgetpassword_wrapper">
            <div className="forgetpassword_card">

        
                <div className="rforgetr">
                <h2 className="forgetpassword_title" >Forgotten your password?</h2>
                <p className="forgetpassword_desc">There is nothing to worry about, we'll send you a message to help you reset your password.</p>
                </div>

                <div className="form_box">
                <form>
                <div className="input_box">
                  <label className="remailr">Email Address</label>
                    
                    <input className="remair" type="email" placeholder="Enter personal or work email address"></input>

                    
                </div>
                </form>
                <input type="submit" name="" value="Send Reset Link" className="rbtr" />
                </div>
                </div>
                </section>

                
        </>
  );
};

export default ForgetPassword;
