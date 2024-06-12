import { Helmet } from "react-helmet-async";
import "./Verification_Code.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import picture from "../images/picture.png";
import axios from "axios";

const VerificationCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const verificationCode = code.join("");
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/user/verfiy-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: verificationCode }),
      });

      if (response.ok) {
        const data = await response.json();
        // handle successful verification, e.g., navigate to the new password page
        navigate("/New_Password");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Verification failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Verification Code ♥</title>
        <meta name="description" content="Verification_Code" />
      </Helmet>

      <div className="rverification">
        <div className="ver2">
          <img src={picture} alt="verification" />
        </div>
        <div className="ver1">
          <div className="rrorr">
            <h2>Verification Code</h2>
            <p>Please enter the verification code that we’ve sent to your phone.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="rowr">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="number"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  required
                />
              ))}
            </div>
            {error && <p className="error">{error}</p>}
            <div className="buttonr">
              <button type="submit" className="rbtsd">Verify</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerificationCode;