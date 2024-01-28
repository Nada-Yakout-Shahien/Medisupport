
import { Helmet } from "react-helmet-async";
import "./sign_up.css";
import React from "react";
import sign from "../images/sign.png"
import { NavLink } from "react-router-dom";

const Sign_up  = () => {
  return (
    <>
      <Helmet>
        <title>Sign up ♥</title>
        <meta name="description" content="Sign up" />
      </Helmet>
      <div className="sig">
        <div className="flex1">
          <h2>Sign Up</h2>
          <div className="lbl">

          <div className="name">
              <div className="lbl1">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="FName" required id="nam"/>
              </div>
              <div className="lbl1">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="LName" required  id="nam"/>
              </div>
            </div>

            <div className="lbl1">
              <label htmlFor="">Email Address</label>
              <input className="inp" type="text" />
            </div>
            <div className="lbl2">
              <label htmlFor="">Password</label>
              <input type="Password" className="inp" />
            
            </div>
          </div>

          <div class="forget">
            <label for="">
              <input type="checkbox" id="custom-checkbox" />
              <label
                for="custom-checkbox"
                class="custom-checkbox-label"
              ></label>
              <p className="tex">Vestibulum faucibus odio vitae arcu auctor lectus.</p>
            </label>
          </div>
          <input type="submit" name="" value="Sign Up" className="btn" />

          <div className="btn-log">
            <div>
              <button className="blog">
                <div className="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M23.7666 10.1498H22.8V10.1H12V14.9H18.7818C17.7924 17.6942 15.1338 19.7 12 19.7C8.0238 19.7 4.8 16.4762 4.8 12.5C4.8 8.5238 8.0238 5.3 12 5.3C13.8354 5.3 15.5052 5.9924 16.7766 7.1234L20.1708 3.7292C18.0276 1.7318 15.1608 0.5 12 0.5C5.373 0.5 0 5.873 0 12.5C0 19.127 5.373 24.5 12 24.5C18.627 24.5 24 19.127 24 12.5C24 11.6954 23.9172 10.91 23.7666 10.1498Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M1.38281 6.9146L5.32541 9.806C6.39221 7.1648 8.97581 5.3 11.9992 5.3C13.8346 5.3 15.5044 5.9924 16.7758 7.1234L20.17 3.7292C18.0268 1.7318 15.16 0.5 11.9992 0.5C7.39001 0.5 3.39281 3.1022 1.38281 6.9146Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M11.9994 24.5C15.099 24.5 17.9154 23.3138 20.0448 21.3848L16.3308 18.242C15.126 19.1546 13.6284 19.7 11.9994 19.7C8.87821 19.7 6.22801 17.7098 5.22961 14.9324L1.31641 17.9474C3.30241 21.8336 7.33561 24.5 11.9994 24.5Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M23.7666 10.1499H22.8V10.1001H12V14.9001H18.7818C18.3066 16.2423 17.4432 17.3997 16.3296 18.2427C16.3302 18.2421 16.3308 18.2421 16.3314 18.2415L20.0454 21.3843C19.7826 21.6231 24 18.5001 24 12.5001C24 11.6955 23.9172 10.9101 23.7666 10.1499Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <p className="text"> Log in with Google</p>
              </button>
            </div>
            <div>
              <button className="blog" id="face">
                <div className="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M9.04525 6.365V9.113H7.03125V12.473H9.04525V22.459H13.1792V12.474H15.9543C15.9543 12.474 16.2142 10.863 16.3403 9.101H13.1962V6.803C13.1962 6.46 13.6462 5.998 14.0922 5.998H16.3463V2.5H13.2822C8.94225 2.5 9.04525 5.863 9.04525 6.365Z"
                      fill="#006FFF"
                    />
                  </svg>
                </div>
                <p className="text"> Log in with Facebook</p>
              </button>
            </div>
          </div>
          <hr />
          <div className="sign">
            <p>No account yet? <NavLink to="/login" id="nav">Log In</NavLink></p>
          </div>
        </div>

        <div classNEmail Addressame="flex2">
          <img src={sign} alt="sign_up" />
        </div>
      </div>
    </>
  );
};

export default Sign_up;

