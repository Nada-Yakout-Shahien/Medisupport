import { Helmet } from "react-helmet-async";
import "./sign_up.css";
import React, { useState } from "react";
import sign from "../images/sign.png";
import { NavLink } from "react-router-dom";
import {
  registerUser,
  loginWithGoogle,
  loginWithFacebook,
} from "../components/apiService";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

const Sign_up = () => {
  //password
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [iconActive, setIconActive] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setIconActive(!iconActive);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const userData = {
        name: formData.get("name"),
        last_name: formData.get("last_name"),
        email: formData.get("email"),
        password: formData.get("password"),
        password_confirmation: formData.get("password"),
      };
      // Send userData directly without JSON.stringify
      await registerUser(userData);
      // Reset form fields after successful submission
      event.target.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to register user. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(
        "provider",
        "ya29.a0AfB_byCJwGBqfylm1ult8BtYR5GzyaxUDHu27cDCBfPjt0JqbdSFI2_RDut1Nnsuc7HpzVtkpe8USKLR7_SCGj9J_3fozqvjKbTTA75gJN8uIDdbB8mztSijWlHZHrAQqW16ijVNCxxC2q9FStgGhqf2-i8yI0sO5QaCgYKASwSARISFQHGX2MiXudLJV5WeJWwQkjtwr-c_Q0169"
      );

      // Redirect or handle success accordingly
    } catch (error) {
      console.error(error);
      alert("Failed to login with Google. Please try again.");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook(
        "provider",
        "ya29.a0AfB_byCJwGBqfylm1ult8BtYR5GzyaxUDHu27cDCBfPjt0JqbdSFI2_RDut1Nnsuc7HpzVtkpe8USKLR7_SCGj9J_3fozqvjKbTTA75gJN8uIDdbB8mztSijWlHZHrAQqW16ijVNCxxC2q9FStgGhqf2-i8yI0sO5QaCgYKASwSARISFQHGX2MiXudLJV5WeJWwQkjtwr-c_Q0169"
      );
      // Redirect or handle success accordingly
    } catch (error) {
      console.error(error);
      alert("Failed to login with Facebook. Please try again.");
    }
  };
  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google login response here
  };
  const responseFacebook = (response) => {
    console.log(response);
    // Handle Facebook login response here
  };

  return (
    <>
      <Helmet>
        <title>Sign up ♥</title>
        <meta name="description" content="Sign up" />
      </Helmet>
      <div className="sig">
        <form className="flex1" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="lbl">
            <div className="name">
              <div className="lbl">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  placeholder="FName"
                  required
                  id="name"
                  name="name"
                />
              </div>
              <div className="lbl2">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  placeholder="LName"
                  required
                  id="last_name"
                  name="last_name"
                />
              </div>
            </div>
          </div>
          <div className="forml">
            <div className="lbl">
              <div className="lbl1">
                <label htmlFor="email">Email Address</label>
                <input
                  className="inp"
                  type="text"
                  placeholder="Your Email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="lbl2">
                <label htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="inp"
                    placeholder="Your Password"
                    id="password"
                    name="password"
                  />
                  <svg
                    onClick={togglePasswordVisibility}
                    className={`toggle-password-visibility ${
                      iconActive ? "active" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                  >
                    <path d="M20 12.5C20 10.69 16.24 8.51499 11.993 8.49999C7.775 8.48499 4 10.678 4 12.5C4 14.325 7.754 16.506 11.997 16.5C16.252 16.494 20 14.32 20 12.5ZM12 18.5C6.958 18.507 2 15.814 2 12.5C2 9.18599 6.984 6.48299 12 6.49999C17.016 6.51699 22 9.18599 22 12.5C22 15.814 17.042 18.493 12 18.5ZM12 16.5C10.9391 16.5 9.92172 16.0786 9.17157 15.3284C8.42143 14.5783 8 13.5609 8 12.5C8 11.4391 8.42143 10.4217 9.17157 9.67156C9.92172 8.92142 10.9391 8.49999 12 8.49999C13.0609 8.49999 14.0783 8.92142 14.8284 9.67156C15.5786 10.4217 16 11.4391 16 12.5C16 13.5609 15.5786 14.5783 14.8284 15.3284C14.0783 16.0786 13.0609 16.5 12 16.5ZM12 14.5C12.5304 14.5 13.0391 14.2893 13.4142 13.9142C13.7893 13.5391 14 13.0304 14 12.5C14 11.9696 13.7893 11.4608 13.4142 11.0858C13.0391 10.7107 12.5304 10.5 12 10.5C11.4696 10.5 10.9609 10.7107 10.5858 11.0858C10.2107 11.4608 10 11.9696 10 12.5C10 13.0304 10.2107 13.5391 10.5858 13.9142C10.9609 14.2893 11.4696 14.5 12 14.5Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="check">
              <label htmlFor="custom-checkbox">
                <input type="checkbox" id="custom-checkbox" />
                <span
                  for="custom-checkbox"
                  class="custom-checkbox-label"
                ></span>
                <p className="tex">
                  Vestibulum faucibus odio vitae arcu auctor lectus.
                </p>
              </label>
            </div>
            <input type="submit" name="" value="Sign Up" className="btn" />
          </div>
          <div className="btn-log">
            <GoogleLogin
              clientId="159237658249-prbgkv3mt6a9ichu2dikct14qc781tn4.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <FacebookLogin
              appId="763487532477503"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="facebook-login-button"
              icon={<i className="fab fa-facebook-f"></i>}
              textButton="Log in with Facebook"
            />
          </div>
          <hr />
          <div className="sign">
            <p>
              No account yet?{" "}
              <NavLink to="/login" id="nav">
                Log In
              </NavLink>
            </p>
          </div>
        </form>
        <div className="flex2">
          <img src={sign} alt="sign_up" />
        </div>
      </div>
    </>
  );
};

export default Sign_up;
