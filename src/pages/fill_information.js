import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./fill_information.css";
import { NavLink } from "react-router-dom";
import Layout from '../components/Layout';

const FillInformation = () => {
  const totalSteps = 11;
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextClick = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  //default menu
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Your SEX");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <Helmet>
        <title>Fill Information ♥</title>
        <meta name="description" content="Fill Information" />
      </Helmet>

      <div className="info">
        <h3>Please fill in the information</h3>
        <div className="forms">
          <div className="form1">
            {currentStep >= 1 && (
              <div className="infolbl">
                <label htmlFor="input1">Age</label>
                <input type="text" id="input1" placeholder="Your age" />
                {currentStep === 1 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
            {currentStep >= 2 && (
              <div className="infolbl">
                <label htmlFor="input2">SEX</label>
                <div className="menu" onClick={toggleMenu}>
                  <div className={`txt ${selectedOption === 'Your SEX' ? 'option-default' : 'option-selected'}`}>
                  {selectedOption}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                  >
                    <path
                      d="M11.0818 13.3139L15.3588 8.36388C15.4385 8.26837 15.5339 8.19219 15.6393 8.13978C15.7447 8.08737 15.8581 8.05979 15.9728 8.05863C16.0875 8.05748 16.2013 8.08278 16.3075 8.13306C16.4137 8.18334 16.5101 8.25759 16.5913 8.35149C16.6724 8.44538 16.7365 8.55703 16.78 8.67993C16.8234 8.80282 16.8453 8.9345 16.8443 9.06728C16.8433 9.20006 16.8195 9.33128 16.7742 9.45329C16.7289 9.57529 16.6631 9.68564 16.5806 9.77788L11.6927 15.4349C11.5307 15.6224 11.3109 15.7277 11.0818 15.7277C10.8527 15.7277 10.633 15.6224 10.471 15.4349L5.58312 9.77788C5.50059 9.68564 5.43477 9.57529 5.38948 9.45329C5.3442 9.33128 5.32037 9.20006 5.31937 9.06728C5.31837 8.9345 5.34023 8.80282 5.38368 8.67993C5.42712 8.55703 5.49128 8.44538 5.57241 8.35149C5.65353 8.25759 5.75 8.18334 5.85619 8.13306C5.96238 8.08278 6.07615 8.05748 6.19088 8.05863C6.3056 8.05979 6.41898 8.08737 6.5244 8.13978C6.62981 8.19219 6.72516 8.26837 6.80486 8.36388L11.0818 13.3139Z"
                      fill="black"
                    />
                  </svg>
                  {isOpen && (
                    <div className="dropdown-content">
                      <div onClick={() => handleOptionClick("Male")} >
                        Male
                      </div>
                      <div onClick={() => handleOptionClick("Female")} >
                        Female
                      </div>

                    </div>
                  )}
                </div>
                {currentStep === 2 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
            {currentStep >= 3 && (
              <div className="infolbl">
                <label htmlFor="input3">Fasting Blood Sugar Level</label>
                <input
                  type="text"
                  id="input3"
                  placeholder="Your Fasting Blood Sugar Level"
                />
                {currentStep === 3 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
            {currentStep >= 4 && (
              <div className="infolbl">
                <label htmlFor="input4">Cholesterol Levels</label>
                <input
                  type="text"
                  id="input4"
                  placeholder="Your Cholesterol Levels"
                />
                {currentStep === 4 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
            {currentStep >= 5 && (
              <div className="infolbl">
                <label htmlFor="input5">Resting Blood Pressure</label>
                <input
                  type="text"
                  id="input5"
                  placeholder="Your Resting Blood Pressure"
                />
                {currentStep === 5 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="form2">
            {currentStep >= 6 && (
              <div className="infolbl">
                <label htmlFor="input6" className="">
                  Exercise Induced Angina
                </label>
                <input
                  type="text"
                  id="input6"
                  placeholder="Your Exercise Induced Angina"
                />
                {currentStep === 6 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
            {currentStep >= 7 && (
              <div className="infolbl">
                <label htmlFor="input7">Maximum Heart Rate Achieved</label>
                <input
                  type="text"
                  id="input7"
                  placeholder="Your Maximum Heart Rate Achieved"
                />
                {currentStep === 7 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
            {currentStep >= 8 && (
              <div className="infolbl">
                <label htmlFor="input8">
                  Resting Electrocardiographic Results (ECG)
                </label>
                <input
                  type="text"
                  id="input8"
                  placeholder="Your Resting Electrocardiographic Results (ECG)"
                />
                {currentStep === 8 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
            {currentStep >= 9 && (
              <div className="infolbl">
                <label htmlFor="input9">
                  ST Depression Induced by Exercise
                </label>
                <input
                  type="text"
                  id="input9"
                  placeholder="Your ST Depression Induced by Exercise"
                />
                {currentStep === 9 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
            {currentStep >= 10 && (
              <div className="infolbl">
                <label htmlFor="input10">
                  Number of Major Vessels Colored by Fluoroscopy
                </label>
                <input
                  type="text"
                  id="input10"
                  placeholder="Your Number of Major Vessels Colored by Fluoroscopy"
                />
                {currentStep === 10 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="form3">
          {currentStep >= 11 && (
            <div className="infolbl">
              <label htmlFor="input11">Thalassemia</label>
              <input type="text" id="input11" placeholder="Your Thalassemia" />
              <NavLink to="/res" onClick={handleNextClick} className="btn">
                {currentStep < totalSteps ? "Next" : "Result"}
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FillInformation;
