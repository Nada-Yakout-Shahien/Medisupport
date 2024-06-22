import { Helmet } from "react-helmet-async";
import "./BMI.css";
import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { saveTokenToLocalStorage } from "../components/apiService";

const BMI = () => {
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(60);
  const [gender, setGender] = useState(true); // false for female, true for male
  const [bmiResult, setBmiResult] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  saveTokenToLocalStorage(accessToken);
  console.log("access_token:", accessToken);

  const handleCalculate = () => {
    const data = {
      age: age,
      height: height,
      weight: weight,
      gender: gender // gender is now a boolean
    };

    console.log("Sending data:", data);

    axios.post('http://127.0.0.1:8000/api/user/bmi/store', data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      setBmiResult(response.data.bmi);
      setError(null);
      navigate("/BMI1"); // navigate after successful response
    })
    .catch(error => {
      console.error('There was an error!', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        if (error.response.status === 401) {
          setError('Unauthorized: Please check your API token.');
        } else if (error.response.status === 422) {
          setError('Invalid data: Please check the input values.');
        } else {
          setError('An error occurred. Please try again.');
        }
      } else if (error.request) {
        setError('No response received from the server. Please try again later.');
      } else {
        setError('Request error: ' + error.message);
      }
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>BMI ♥</title>
        <meta name="description" content="BMI" />
      </Helmet>
      <div className="bmi">
        <div className="bmi_r">
          <div className="bmir">
            <h2 className="rbmi__r">BMI</h2>
          </div>
          <div className="but_bmi_r">
            <div className="rbodyr">
              <p className="bmi_p">Gender</p>
            </div>
            <div className="but_bmi">
              <div
                className={`rbutr ${gender === false ? 'selected' : 'unselected'}`}
                onClick={() => setGender(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                  <circle cx="15.8242" cy="15" r="15" fill={gender === false ? "#BE0202" : "white"} />
                </svg>
                <p>Female</p>
              </div>
              <div
                className={`rrrbur ${gender === true ? 'selected' : 'unselected'}`}
                onClick={() => setGender(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                  <circle cx="15.8242" cy="15" r="15" fill={gender === true ? "#BE0202" : "white"} />
                </svg>
                <p>Male</p>
              </div>
            </div>
            <div className="heightr">
              <div className="heightrp">
                <p>Age(Years)</p>
              </div>
              <div className="heightrp2">
                <p>{age}</p>
              </div>
              <div className="heightrsliper">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="heightrsliper2"
                />
                <p className="heightrsliper5">0</p>
                <p className="heightrsliper6">100</p>
              </div>
            </div>

            <div className="sliper2">
              <div className="sliperp">
                <p>Height(cm)</p>
              </div>
              <div className="sliperp2">
                <p>{height}</p>
              </div>
              <div className="slipersliper">
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="slipersliper2"
                />
                <p className="slipersliper5">0</p>
                <p className="slipersliper6">300</p>
              </div>
            </div>

            <div className="heiher2">
              <div className="heiherp">
                <p>Weight(kg)</p>
              </div>
              <div className="heiherp2">
                <p>{weight}</p>
              </div>
              <div className="heihersliper">
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="heihersliper2"
                />
                <p className="heihersliper5">0</p>
                <p className="heihersliper6">300</p>
              </div>
            </div>
          </div>
          <button onClick={handleCalculate} className="heiherebut">Calculate</button>
          {error && <p className="error-message">{error}</p>}
          {bmiResult && <p className="bmi-result">Your BMI is: {bmiResult}</p>}
        </div>
        <div className="rfotr">
          <p className="rfotr2">Recommended Reading</p>
          <p className="rfotr3">How To Lose Sugar?</p>
          <p className="rfotr4">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
            The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
            <br />
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default BMI;