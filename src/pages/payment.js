import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./payment.css";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import pay from "../images/payment.png";
import axios from "axios";

const Payment = () => {
  //password
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [iconActive, setIconActive] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setIconActive(!iconActive);
  };

  const [amount, setAmount] = useState("");
  const [walletNumber, setWalletNumber] = useState("");
  const [pin, setPin] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("URL_TO_YOUR_PAYMENT_API", {
        amount,
        walletNumber,
        pin,
        otp,
      });

      if (response.data.success) {
        alert("Payment successful!");
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  return (
    <Layout>
      <Helmet>
        <title>Payment ♥</title>
        <meta name="description" content="Payment" />
      </Helmet>
      <div className="payment">
        <div className="payment_img">
          <img src={pay} alt="payment-page" />
        </div>
        <form className="payment-form" onSubmit={handleSubmit}>
          <h3>Payment</h3>
          <div className="form">
            <div className="lblc">
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                type="number"
                placeholder="250 L.E"
                required
                value={amount}
                onChange={handleInputChange(setAmount)}
              />
            </div>
            <div className="lblc">
              <label htmlFor="walletNumber">Wallet Number</label>
              <input
                id="walletNumber"
                type="tel"
                placeholder="Enter Wallet Number"
                required
                value={walletNumber}
                onChange={handleInputChange(setWalletNumber)}
              />
            </div>
            <div className="lblc">
              <label htmlFor="pin">Personal Identification Number (PIN)</label>
              <div className="password-input-container">
                <input
                  id="pin"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter PIN"
                  required
                  value={pin}
                  onChange={handleInputChange(setPin)}
                  className="password-input"
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
            <div className="lblc">
              <label htmlFor="otp">One Time Password (OTP)</label>
              <div className="password-input-container">
                <input
                  id="otp"
                  placeholder="Enter OTP"
                  required
                  value={otp}
                  onChange={handleInputChange(setOtp)}
                  className="password-input"
                  type={passwordVisible ? "text" : "password"}
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
            <div className="send">
              <button type="button" className="resend">
                Resend OTP Again
              </button>
              <button type="submit" className="btn">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Payment;
