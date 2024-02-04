import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./fill_information.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const FillInformation = () => {
  const totalSteps = 11;
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextClick = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Fill Information ♥</title>
        <meta name="description" content="Fill Information" />
      </Helmet>

      <Header />
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
                <input type="text" id="input2" placeholder="Your SEX" />
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
              <NavLink to="/res" onClick={handleNextClick} className="btn">{currentStep < totalSteps ? "Next" : "Result"}</NavLink>
            </div>
          )}
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default FillInformation;
