import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./fill_information.css";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { predict } from "../components/apiService";

const FillInformation = () => {
  const totalSteps = 17;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    BMI: "",
    Sex: "",
    PhysicalHealth: "",
    MentalHealth: "",
    SleepTime: "",
    Race: "",
    Diabetic: "",
    GenHealth: "",
    AgeCategory: 0,
    Smoking: "",
    AlcoholDrinking: "",
    Stroke: "",
    DiffWalking: "",
    PhysicalActivity: "",
    Asthma: "",
    KidneyDisease: "",
    SkinCancer: "",
  });
  const navigate = useNavigate();
  const formRefs = useRef(
    Array.from({ length: totalSteps }, () => React.createRef())
  );

  useEffect(() => {
    if (
      formRefs.current[currentStep - 1] &&
      formRefs.current[currentStep - 1].current
    ) {
      formRefs.current[currentStep - 1].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentStep]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    let updatedValue = value;

    // Convert specific fields to integer if necessary
    if (
      id === "AgeCategory" ||
      id === "Race" ||
      id === "Diabetic" ||
      id === "GenHealth" ||
      id === "Sex" ||
      id === "Smoking" ||
      id === "AlcoholDrinking" ||
      id === "Stroke" ||
      id === "DiffWalking" ||
      id === "PhysicalActivity" ||
      id === "Asthma" ||
      id === "KidneyDisease" ||
      id === "SkinCancer"
    ) {
      updatedValue = parseInt(value, 10);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: updatedValue,
    }));
  };

  const handleNextClick = () => {
    setCurrentStep((prevStep) => {
      const nextStep = prevStep + 1;
      if (formRefs.current[nextStep - 1]?.current) {
        formRefs.current[nextStep - 1].current.scrollIntoView({
          behavior: "smooth",
        });
      }
      return nextStep;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const prediction = await predict(formData);
      console.log("Prediction result:", prediction);

      if (prediction === 0) {
        navigate("/Resultsorry");
      } else if (prediction === 1) {
        navigate("/Resultcongratulations");
      } else {
        console.error("Invalid prediction result:", prediction);
      }
    } catch (error) {
      console.error("Error during prediction:", error);
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
        <form className="content" onSubmit={handleSubmit}>
          <div className="forms">
            <div className="form1">
              {currentStep >= 1 && (
                <div className="infolbl" ref={formRefs.current[0]}>
                  <label htmlFor="BMI">BMI</label>
                  <input
                    type="number"
                    id="BMI"
                    placeholder="Enter your BMI"
                    value={formData.BMI}
                    onChange={handleChange}
                    required
                  />
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
                <div className="infolbl" ref={formRefs.current[1]}>
                  <label htmlFor="Sex">Sex</label>
                  <select
                    id="Sex"
                    value={formData.Sex}
                    onChange={handleChange}
                    required
                  >
                    <option value={-1}>Select your sex</option>
                    <option value={1}>Male</option>
                    <option value={0}>Female</option>
                  </select>
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
                <div className="infolbl" ref={formRefs.current[2]}>
                  <label htmlFor="PhysicalHealth">Physical Health</label>
                  <input
                    type="text"
                    id="PhysicalHealth"
                    placeholder="Enter your Physical Health"
                    value={formData.PhysicalHealth}
                    onChange={handleChange}
                    required
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
                <div className="infolbl" ref={formRefs.current[3]}>
                  <label htmlFor="MentalHealth">Mental Health</label>
                  <input
                    type="text"
                    id="MentalHealth"
                    placeholder="Enter your Mental Health"
                    value={formData.MentalHealth}
                    onChange={handleChange}
                    required
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
                <div className="infolbl" ref={formRefs.current[4]}>
                  <label htmlFor="SleepTime">Sleep Time</label>
                  <input
                    type="text"
                    id="SleepTime"
                    placeholder="Enter your Sleep Time"
                    value={formData.SleepTime}
                    onChange={handleChange}
                    required
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

              {currentStep >= 6 && (
                <div className="infolbl" ref={formRefs.current[5]}>
                  <label htmlFor="Race">Race</label>
                  <select
                    id="Race"
                    value={formData.Race}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your Race</option>
                    <option value={1}>American Indian/Alaskan Native</option>
                    <option value={2}>Asian</option>
                    <option value={3}>Black</option>
                    <option value={4}>Hispanic</option>
                    <option value={5}>White</option>
                    <option value={6}>Other</option>
                  </select>

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
                <div className="infolbl" ref={formRefs.current[6]}>
                  <label htmlFor="Diabetic">Diabetic</label>
                  <select
                    id="Diabetic"
                    value={formData.Diabetic}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your Diabetic</option>
                    <option value="0">No</option>
                    <option value="1">No, borderline diabetes</option>
                    <option value="2">Yes</option>
                    <option value="3">Yes (during pregnancy)</option>
                  </select>
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
                <div className="infolbl" ref={formRefs.current[7]}>
                  <label htmlFor="GenHealth">Gen Health</label>
                  <select
                    id="GenHealth"
                    value={formData.GenHealth}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Your Gen Health</option>
                    <option value="0">Poor</option>
                    <option value="1">Fair</option>
                    <option value="2">Good</option>
                    <option value="3">Very Good</option>
                    <option value="4">Excellent</option>
                  </select>
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
            </div>

            <div className="form2">
              {currentStep >= 9 && (
                <div className="infolbl" ref={formRefs.current[8]}>
                  <label htmlFor="AgeCategory">Age Category</label>
                  <select
                    id="AgeCategory"
                    value={formData.AgeCategory}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Enter your Age Category</option>
                    <option value="1">18-24</option>
                    <option value="2">25-29</option>
                    <option value="3">30-34</option>
                    <option value="4">35-39</option>
                    <option value="5">40-44</option>
                    <option value="6">45-49</option>
                    <option value="7">50-54</option>
                    <option value="8">55-59</option>
                    <option value="9">60-64</option>
                    <option value="10">65-69</option>
                    <option value="11">70-74</option>
                    <option value="12">75-79</option>
                    <option value="13">80 or older</option>
                  </select>

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
                <div className="infolbl" ref={formRefs.current[9]}>
                  <label htmlFor="Smoking">Smoking</label>
                  <select
                    id="Smoking"
                    value={formData.Smoking}
                    onChange={handleChange}
                    required
                  >
                    <option value={-1}>Your Smoking</option>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
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

              {currentStep >= 11 && (
                <div className="infolbl" ref={formRefs.current[10]}>
                  <label htmlFor="AlcoholDrinking">Alcohol Drinking</label>
                  <select
                    id="AlcoholDrinking"
                    value={formData.AlcoholDrinking}
                    onChange={handleChange}
                    required
                  >
                    <option value={-1}>Your Alcohol Drinking</option>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
                  {currentStep === 11 && (
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

              {currentStep >= 12 && (
                <div className="infolbl" ref={formRefs.current[11]}>
                  <label htmlFor="Stroke">Stroke</label>
                  <select
                    id="Stroke"
                    value={formData.Stroke}
                    onChange={handleChange}
                    required
                  >
                    <option value={-1}>Your Stroke</option>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
                  {currentStep === 12 && (
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

              {currentStep >= 13 && (
                <div className="infolbl" ref={formRefs.current[12]}>
                  <label htmlFor="DiffWalking">Difficulty Walking</label>
                  <select
                    id="DiffWalking"
                    value={formData.DiffWalking}
                    onChange={handleChange}
                    required
                  >
                    <option value={-1}>Your Difficulty Walking</option>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
                  {currentStep === 13 && (
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

              {currentStep >= 14 && (
                <div className="infolbl" ref={formRefs.current[13]}>
                  <label htmlFor="PhysicalActivity">Physical Activity</label>
                  <select
                    id="PhysicalActivity"
                    value={formData.PhysicalActivity}
                    onChange={handleChange}
                    required
                  >
                    <option value={-1}>Your Physical Activity</option>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
                  {currentStep === 14 && (
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

              {currentStep >= 15 && (
                <div className="infolbl" ref={formRefs.current[14]}>
                  <label htmlFor="Asthma">Asthma</label>
                  <select
                    id="Asthma"
                    value={formData.Asthma}
                    onChange={handleChange}
                    required
                  >
                    <option value={-1}>Your Asthma</option>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
                  {currentStep === 15 && (
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

              {currentStep >= 16 && (
                <div className="infolbl" ref={formRefs.current[15]}>
                  <label htmlFor="KidneyDisease">Kidney Disease</label>
                  <select
                    id="KidneyDisease"
                    value={formData.KidneyDisease}
                    onChange={handleChange}
                    required
                  >
                    <option value={-1}>Your Kidney Disease</option>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
                  {currentStep === 16 && (
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
            {currentStep >= 17 && (
              <div className="infolbl" ref={formRefs.current[16]}>
                <label htmlFor="SkinCancer">Skin Cancer</label>
                <select
                  id="SkinCancer"
                  value={formData.SkinCancer}
                  onChange={handleChange}
                  required
                >
                  <option value={-1}>Your Skin Cancer</option>
                  <option value={1}>Yes</option>
                  <option value={0}>No</option>
                </select>
                {currentStep === 17 && (
                  <button type="submit" className="btn">
                    Submit
                  </button>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default FillInformation;
