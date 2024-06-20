import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import {
  loginUser,
  saveTokenToLocalStorage,
  loginWithGoogle,
  loginWithFacebook,
} from "../components/apiService";
import logInImage from "../images/logIn.png";
import "./login.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const googleClientId =
  "639786245015-q9agbhq4ekj8vhqu85jbvdg75er66dnh.apps.googleusercontent.com";
const facebookAppId = "763487532477503";
const BASE_URL = "http://127.0.0.1:8000/api";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [iconActive, setIconActive] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setIconActive(!iconActive);
  };

  const handleLoginClick = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const userData = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      const accessToken = await loginUser(userData, setAccessToken);
      saveTokenToLocalStorage(accessToken);
      setAccessToken(accessToken);
      console.log("access_token:", accessToken);
      navigate("/Loading");
      login();
      event.target.reset();
      
    } catch (error) {
      console.error(error);
      alert("Failed to login user. Please try again.");
    }
  };

  const handleLogingoogleClick = async (response) => {
    try {
      const res = await loginWithGoogle("google", response.access_provider_token);
      saveTokenToLocalStorage(res.access_provider_token);
      setAccessToken(res.access_provider_token);
      navigate("/Loading");
      login();
    } catch (error) {
      console.error("Google login failed:", error);
      alert("Failed to login with Google. Please try again.");
    }
  };

  const handleLogingoogleFailure = (error) => {
    console.error("Google login failed:", error);
    alert("Google login failed. Please try again.");
  };

  const handleLoginFacebookClick = async (facebookData) => {
    try {
      const response = await loginWithFacebook(
        "facebook",
        facebookData.access_provider_token
      );
      saveTokenToLocalStorage(response.access_provider_token);
      setAccessToken(response.access_provider_token);
      navigate("/Loading");
      login();
      console.log(response.access_provider_token);
      console.log("Facebook login success");
    } catch (error) {
      console.error("Facebook login failed:", error);
      alert("Failed to login with Facebook. Please try again.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Login ♥</title>
        <meta name="description" content="Login" />
      </Helmet>

      <div className="log">
        <div className="flex1">
          <h2>Log In</h2>
          <form className="forml" onSubmit={handleLoginClick}>
            <div className="lbl">
              <div className="lbl1">
                <label htmlFor="email">Email Address</label>
                <input
                  className="inp"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="lbl2">
                <label htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="inp"
                    placeholder="Your Password"
                    name="password"
                    id="password"
                    required
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
                <div className="disc">
                  It must be a combination of minimum 8 letters, numbers, and
                  symbols.
                </div>
              </div>
            </div>
            <div className="forget">
              <div className="checkbox-container">
                <input type="checkbox" id="custom-checkbox" />
                <label
                  htmlFor="custom-checkbox"
                  className="custom-checkbox-label"
                ></label>
                <label htmlFor="custom-checkbox">Remember Me</label>
              </div>
              <NavLink to="/forget_password" id="for">
                Forget Password?
              </NavLink>
            </div>
            <div>
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
          <div className="btn-log">
            <div className="blog">
              <GoogleOAuthProvider clientId={googleClientId}>
                <GoogleLogin
                  onSuccess={handleLogingoogleClick}
                  onError={handleLogingoogleFailure}
                  style={{ border: "none", backgroundColor: "transparent" }}
                />
              </GoogleOAuthProvider>
            </div>
            <div className="blog">
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
              <FacebookLogin
                appId={facebookAppId}
                callback={handleLoginFacebookClick}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className="facebook-button"
                  >
                    Log in with Facebook
                  </button>
                )}
              />{" "}
            </div>
          </div>
          <hr />
          <div className="sign">
            <p>
              No account yet?{" "}
              <NavLink to="/signup" id="nav">
                {" "}
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
        <div className="flex2">
          <img src={logInImage} alt="log_in" />
        </div>
      </div>
    </>
  );
};

export default Login;
