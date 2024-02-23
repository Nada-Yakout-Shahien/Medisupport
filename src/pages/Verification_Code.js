import { Helmet } from "react-helmet-async";
import "./Verification_Code.css";
import React from "react";
import { NavLink } from "react-router-dom";
import picture from "../images/picture.png";

const VerificationCode = () => {
    return (
      <>
        <Helmet>
          <title>VerificationCode ♥</title>
          <meta name="description" content="Verification_Code" />
        </Helmet>

        <div className="rverification">
        <div classNEmail className="ver2">
          <img src={picture} alt="verication" />
        </div>
        <div className="ver1">
            <div className="rrorr">
          <h2>Verification Code</h2>
          
          <p>Please enter the verification code that we’ve sent to your phone.</p>
          </div>
          <div className="rowr">
            <input  type="number"/>
            <input type="number"/>
            <input type="number"/>
            <input type="number"/>
          </div>
          <NavLink to="#" className="rbtsd">Verify</NavLink>
          
        </div>

      </div>
                
        </>
  );
};

export default VerificationCode;
