import { Helmet } from "react-helmet-async";
import "./forget_password.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  //const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate=useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/user/forgot-password", { email }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }});
      //setMessage(response.data.message);
      console.log(response)
      setError("")
      navigate("/Verification_Code")
    } catch (error) {
      setError("There was an error sending the reset link. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Forget Password ♥</title>
        <meta name="description" content="forget_password" />
      </Helmet>

      <section className="forgetpassword_wrapper">
        <div className="forgetpassword_card">
          <div className="rforgetr">
            <h2 className="forgetpassword_title">Forgotten your password?</h2>
            <p className="forgetpassword_desc">
              There is nothing to worry about, we'll send you a message to help
              you reset your password.
            </p>
          </div>

          <div className="form_box">
            <form onSubmit={handleSubmit}>
              <div className="input_box">
                <label className="remailr">Email Address</label>

                <input
                  className="remair"
                  type="email"
                  placeholder="Enter personal or work email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>

                <button type="submit" className="rbtr">
                  Send Reset Link
                </button>
              </div>
            </form>
           {/*{message && <p className="success_message">{message}</p>}*/}
            {error && <p className="error_message">{error}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;
