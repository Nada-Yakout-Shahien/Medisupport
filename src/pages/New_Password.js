import { Helmet } from "react-helmet-async";
import "./New_Password.css";
import newpassword from "../images/newpassword.png";
import { NavLink, useHistory } from "react-router-dom";
import React, { useState } from 'react';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('https://yourapi.com/reset_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        history.push('/done_new_pass');
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong, please try again.');
      }
    } catch (error) {
      setError('Network error, please try again later.');
    }
  };

  return (
    <>
      <Helmet>
        <title>NewPassword ♥</title>
        <meta name="description" content="New_Password" />
      </Helmet>

      <div className="rnewpassword">
        <div className="new2">
          <img src={newpassword} alt="newpassword" />
        </div>
        <div className="new1">
          <div className="rnewr">
            <h2>Create New Password</h2>
            <p>New password must be different from previously used password</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="rrowr">
              <label htmlFor="password">Password</label>
              <input
                className="rnp"
                type="password"
                id="password"
                placeholder="Your Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="lbr4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="rnp"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="buttorr">
              <button type="submit" className="rbtrd">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;