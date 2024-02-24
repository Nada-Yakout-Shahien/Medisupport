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
                <input className="rnp" type="Password" placeholder="Your Password"/>
                <button className="ttonr"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 12C20 10.19 16.24 8.01499 11.993 7.99999C7.775 7.98499 4 10.178 4 12C4 13.825 7.754 16.006 11.997 16C16.252 15.994 20 13.82 20 12ZM12 18C6.958 18.007 2 15.314 2 12C2 8.68599 6.984 5.98299 12 5.99999C17.016 6.01699 22 8.68599 22 12C22 15.314 17.042 17.993 12 18ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92171 9.17157 9.17156C9.92172 8.42142 10.9391 7.99999 12 7.99999C13.0609 7.99999 14.0783 8.42142 14.8284 9.17156C15.5786 9.92171 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9608 13.4142 10.5858C13.0391 10.2107 12.5304 9.99999 12 9.99999C11.4696 9.99999 10.9609 10.2107 10.5858 10.5858C10.2107 10.9608 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z" fill="#353535"/>
</svg></button>
              </div>
              <div className="lbr4">
                <label htmlFor="">Check Password</label>
                <input type="Password" className="rnp" placeholder="Your Password"/>
                <button className="tronr"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 12C20 10.19 16.24 8.01499 11.993 7.99999C7.775 7.98499 4 10.178 4 12C4 13.825 7.754 16.006 11.997 16C16.252 15.994 20 13.82 20 12ZM12 18C6.958 18.007 2 15.314 2 12C2 8.68599 6.984 5.98299 12 5.99999C17.016 6.01699 22 8.68599 22 12C22 15.314 17.042 17.993 12 18ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92171 9.17157 9.17156C9.92172 8.42142 10.9391 7.99999 12 7.99999C13.0609 7.99999 14.0783 8.42142 14.8284 9.17156C15.5786 9.92171 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9608 13.4142 10.5858C13.0391 10.2107 12.5304 9.99999 12 9.99999C11.4696 9.99999 10.9609 10.2107 10.5858 10.5858C10.2107 10.9608 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z" fill="#353535"/>
</svg></button>
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
