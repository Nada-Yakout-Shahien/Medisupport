import { Helmet } from "react-helmet-async";
import "./Verification_Code.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import picture from "../images/picture.png";
import axios from "axios";

const VerificationCode = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem ("resetemail");
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/user/verfiy-code",
        { otp: otp.join(""), email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      setMessage(response.data.message);
      console.log(response);
      setError("");
      navigate("/New_Password"); // Navigate to the reset password page
    } catch (error) {
      setLoading(false);
      setError("Invalid OTP. Please try again.");
      setMessage("");
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
            <p>
              Please enter the verification code that we’ve sent to your phone.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="rowr">
              {otp.map((data, index) => (
                <input
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            <div className="buttonr">
              <button type="submit" className="rbtsd" disabled={loading}>
                {loading ? "Loading..." : "Verify"}
              </button>
            </div>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}
        </div>
      </div>
    </>
  );
};

export default VerificationCode;