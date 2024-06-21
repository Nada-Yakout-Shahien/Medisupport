import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import "./fill_information.css";
import Layout from "../components/Layout";
import { predict } from "../components/apiService";

const FillInformation = () => {
  const totalSteps = 17;
  const [currentStep, setCurrentStep] = useState(1);
  const [dropdowns, setDropdowns] = useState(
    Array.from({ length: totalSteps }, () => ({
      isOpen: false,
      selectedOption: "Your info",
    }))
  );
  const formRefs = useRef([]);

  useEffect(() => {
    formRefs.current[currentStep - 1]?.scrollIntoView({ behavior: "smooth" });
  }, [currentStep]);

  const handleDropdownClick = (index) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown, i) => ({
        ...dropdown,
        isOpen: i === index ? !dropdown.isOpen : false,
      }))
    );
  };

  const handleOptionClick = (index, option) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown, i) => ({
        ...dropdown,
        selectedOption: i === index ? option : dropdown.selectedOption,
        isOpen: i === index ? false : dropdown.isOpen,
      }))
    );
  };

  const renderSelectOption = (label, id, options, index) => (
    <div className="infolbl" ref={(el) => (formRefs.current[index] = el)}>
      <label htmlFor={id}>{label}</label>
      <div className="menu" onClick={() => handleDropdownClick(index)}>
        <div
          className={`txt ${
            dropdowns[index].selectedOption === "Your info"
              ? "option-default"
              : "option-selected"
          }`}
        >
          {dropdowns[index].selectedOption === "Your info"
            ? options[0]
            : dropdowns[index].selectedOption}
        </div>
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
        {dropdowns[index].isOpen && (
          <div className="dropdown-content">
            {options.map((option, optionIndex) => (
              <div
                key={option}
                onClick={() =>
                  optionIndex > 0 && handleOptionClick(index, option)
                }
                className={optionIndex === 0 ? "option-disabled" : ""}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {currentStep === index + 1 && (
        <button type="button" className="btn" onClick={handleNextClick}>
          Next
        </button>
      )}
    </div>
  );

  const renderInputField = (label, id, placeholder, index) => (
    <div className="infolbl" ref={(el) => (formRefs.current[index] = el)}>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} placeholder={placeholder} required />
      {currentStep === index + 1 && (
        <button type="button" className="btn" onClick={handleNextClick}>
          Next
        </button>
      )}
    </div>
  );

  const handleNextClick = () => {
    const currentForm = formRefs.current[currentStep - 1];
    const inputs = currentForm.querySelectorAll("input, select");

    let isValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
      }
      if (input.tagName === "INPUT" && input.type === "text") {
        const numericPattern = /^[0-9]+$/;
        if (!numericPattern.test(input.value.trim())) {
          isValid = false;
          input.setCustomValidity("Please enter a valid numeric input.");
          input.reportValidity();
        } else {
          input.setCustomValidity("");
        }
      }
      if (input.tagName === "SELECT") {
        if (input.value === "Your info") {
          isValid = false;
          input.setCustomValidity(
            "Please select an option other than 'Your info'."
          );
          input.reportValidity();
        } else {
          input.setCustomValidity("");
        }
      }
    });

    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleresultClick = async (event) => {
    event.preventDefault();
    const currentForm = formRefs.current[totalSteps - 1];

    if (!currentForm || !(currentForm instanceof HTMLFormElement)) {
      console.error("Form element not found or invalid.");
      return;
    }

    const inputs = currentForm.querySelectorAll("input, select");

    let isValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
      }
      if (input.tagName === "INPUT" && input.type === "text") {
        const numericPattern = /^[0-9]+$/;
        if (!numericPattern.test(input.value.trim())) {
          isValid = false;
          input.setCustomValidity("Please enter a valid numeric input.");
          input.reportValidity();
        } else {
          input.setCustomValidity("");
        }
      }
      if (input.tagName === "SELECT") {
        if (input.value === "Your info") {
          isValid = false;
          input.setCustomValidity(
            "Please select an option other than 'Your info'."
          );
          input.reportValidity();
        } else {
          input.setCustomValidity("");
        }
      }
    });

    if (isValid) {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const formData = new FormData(currentForm);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data: ", data);
        const result = await predict(data, accessToken);
        console.log("Prediction Result: ", result);
      } catch (error) {
        console.error("Error while predicting:", error);
      }
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Fill Information ♥</title>
        <meta name="description" content="Fill Information" />
      </Helmet>

      <div className="info">
        <h3>Please fill in the information</h3>
        <form ref={(el) => (formRefs.current[totalSteps - 1] = el)}>
          <div className="form1">
            {currentStep >= 1 &&
              renderInputField("BMI", "BMI", "Enter your BMI", 0)}
            {currentStep >= 2 &&
              renderSelectOption(
                "Sex",
                "Sex",
                ["Select your sex", "Male", "Female"],
                1
              )}
            {currentStep >= 3 &&
              renderInputField(
                "Physical Health",
                "PhysicalHealth",
                "Enter your Physical Health",
                2
              )}
            {currentStep >= 4 &&
              renderInputField(
                "Mental Health",
                "MentalHealth",
                "Enter your Mental Health",
                3
              )}
            {currentStep >= 5 &&
              renderInputField(
                "Sleep Time",
                "SleepTime",
                "Enter your Sleep Time",
                4
              )}
            {currentStep >= 6 &&
              renderSelectOption(
                "Race",
                "Race",
                [
                  "Select your Race",
                  "American Indian/Alaskan Native",
                  "Asian",
                  "Black",
                  "Hispanic",
                  "White",
                  "Other",
                ],
                5
              )}
            {currentStep >= 7 &&
              renderSelectOption(
                "Diabetic",
                "Diabetic",
                [
                  "Select your Diabetic",
                  "No",
                  "No, borderline diabetes",
                  "Yes",
                  "Yes (during pregnancy)",
                ],
                6
              )}
            {currentStep >= 8 &&
              renderSelectOption(
                "Gen Health",
                "GenHealth",
                [
                  "Your Gen Health",
                  "Poor",
                  "Fair",
                  "Good",
                  "Very Good",
                  "Excellent",
                ],
                7
              )}
          </div>

          <div className="form2">
            {currentStep >= 9 &&
              renderSelectOption(
                "Age Category",
                "AgeCategory",
                [
                  "Enter your Age Category",
                  "18-24",
                  "25-29",
                  "30-34",
                  "35-39",
                  "40-44",
                  "45-49",
                  "50-54",
                  "55-59",
                  "60-64",
                  "65-69",
                  "70-74",
                  "75-79",
                  "80 or older",
                ],
                8
              )}

            {currentStep >= 10 &&
              renderSelectOption(
                "Smoking",
                "Smoking",
                ["Select do you smoke?", "Yes", "No"],
                9
              )}
            {currentStep >= 11 &&
              renderSelectOption(
                "Alcohol Drinking",
                "AlcoholDrinking",
                ["Select do you drink Alcohol?", "Yes", "No"],
                10
              )}
            {currentStep >= 12 &&
              renderSelectOption(
                "Stroke",
                "Stroke",
                ["Select have you had a stroke?", "Yes", "No"],
                11
              )}
            {currentStep >= 13 &&
              renderSelectOption(
                "Diff Walking",
                "DiffWalking",
                ["Enter do you have Diff Walking?", "Yes", "No"],
                12
              )}
            {currentStep >= 14 &&
              renderSelectOption(
                "Physical Activity",
                "PhysicalActivity",
                ["Enter do you have Physical Activity?", "Yes", "No"],
                13
              )}
            {currentStep >= 15 &&
              renderSelectOption(
                "Asthma",
                "Asthma",
                ["Enter do you have Asthma?", "Yes", "No"],
                14
              )}
            {currentStep >= 16 &&
              renderSelectOption(
                "Kidney Disease",
                "KidneyDisease",
                ["Enter do you have Kidney Disease?", "Yes", "No"],
                15
              )}
          </div>

          <div className="form3">
            {currentStep >= 17 &&
              renderSelectOption(
                "Skin Cancer",
                "SkinCancer",
                ["Do you have Skin Cancer?", "Yes", "No"],
                16
              )}
            <button type="submit" className="btn" onClick={handleresultClick}>
              {currentStep < totalSteps ? "Next" : "Result"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default FillInformation;
