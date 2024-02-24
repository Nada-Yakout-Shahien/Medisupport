import { Helmet } from "react-helmet-async";
import "./New_Password.css";
import React from "react";
import newpassword from "../images/newpassword.png";
import { NavLink } from "react-router-dom";

const NewPassword = () => {
    return (
      <>
        <Helmet>
          <title>NewPassword ♥</title>
          <meta name="description" content="New_Password" />
        </Helmet>

        <div className="rnewpassword">
        <div classNEmail className="new2">
          <img src={newpassword} alt="newpassword" />
        </div>
        <div className="new1">
            <div className="rnewr">
          <h2>Create New Password</h2>
          
          <p>New password must be different from previously used password</p>
          </div>
          <div className="rrowr">
          <label htmlFor="">Password</label>
                <input className="rnp" type="Password" />
              </div>
              <div className="lbr4">
                <label htmlFor="">Check Password</label>
                <input type="Password" className="rnp" />
          </div>
          <div className="buttorr">
          <NavLink to="#" className="rbtrd">Reset Password</NavLink>
          </div>
        </div>
      </div>
                
        </>
  );
};

export default NewPassword;
