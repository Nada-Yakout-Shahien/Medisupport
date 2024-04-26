import { Helmet } from "react-helmet-async";
import "./Blood_pressure.css";
import React, { useState } from "react";
import { eachDayOfInterval, format } from "date-fns";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

//date show
const generateDays = (startDate, numberOfDays) => {
  const endDate = new Date(startDate.getTime());
  endDate.setDate(startDate.getDate() + numberOfDays - 1);
  return eachDayOfInterval({ start: startDate, end: endDate }).map((day) => ({
    day: format(day, "EEE"),
    date: format(day, "d"),
    fullDate: format(day, "yyyy-MM-dd"),
    color: "var(--Red)",
    textColor: "var(--whiteColor)",
  }));
};

const Bloodpressure = () => {
  //days
  const startDate = new Date(2024, 5, 1);
  const days = generateDays(startDate, 100);

  //on click day
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (fullDate) => {
    setSelectedDay(fullDate);
  };

  //data
  const [systolicBP, setSystolicBP] = useState(110);
  const [diastolicBP, setDiastolicBP] = useState(80);

  const increaseSystolic = () => setSystolicBP((prev) => prev + 1);
  const decreaseSystolic = () => setSystolicBP((prev) => prev - 1);
  const increaseDiastolic = () => setDiastolicBP((prev) => prev + 1);
  const decreaseDiastolic = () => setDiastolicBP((prev) => prev - 1);

  return (
    <Layout>
      <Helmet>
        <title> Blood Pressure♥ </title>{" "}
        <meta name="description" content="Blood Pressure" />
      </Helmet>{" "}
      <div className="BP-page">
        <div className="BP-address">
          <p>Bloode Pressure</p>
        </div>
        <div className="BP-status">
          <p>
            Average <span>140/90</span> mmHG
          </p>
          <button>
            <p>Normal</p>
          </button>
        </div>

        <div className="BP-date">
          {days.map((item, index) => (
            <div key={index} className="day-container">
              <div className="day-name">{item.day}</div>
              <div
                className={`date-container ${
                  selectedDay === item.fullDate ? "selected" : ""
                }`}
                onClick={() => handleDayClick(item.fullDate)}
                style={{ background: item.color }}
              >
                <div className="date-text" style={{ color: item.textColor }}>
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="BP-data">
          <div className="box">
            <div className="address">Input data</div>
            <div className="bp">
              <div className="para">
                <p>Systolic blood pressure</p>
              </div>
              <div className="num">
                <div className="enum">
                  <div className="numb">
                    <p>{systolicBP}</p>
                  </div>
                  <div className="icon">
                    <div className="mini" onClick={decreaseSystolic}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_3839)">
                          <path d="M12 16L6 10H18L12 16Z" fill="#1F1F1F" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_3839">
                            <rect width="24" height="24" rx="5" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="max" onClick={increaseSystolic}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_3843)">
                          <path d="M12 8L18 14H6L12 8Z" fill="#1F1F1F" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_3843">
                            <rect width="24" height="24" rx="5" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bp">
              <div className="para">
                <p>Diastolic blood pressure</p>
              </div>
              <div className="num">
                <div className="enum">
                  <div className="numb">
                    <p>{diastolicBP}</p>
                  </div>
                  <div className="icon">
                    <div className="mini" onClick={decreaseDiastolic}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_3839)">
                          <path d="M12 16L6 10H18L12 16Z" fill="#1F1F1F" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_3839">
                            <rect width="24" height="24" rx="5" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="max" onClick={increaseDiastolic}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_3843)">
                          <path d="M12 8L18 14H6L12 8Z" fill="#1F1F1F" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_3843">
                            <rect width="24" height="24" rx="5" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="butn">
              <NavLink to="/DetailsBP" className="add">
                Add To Record
              </NavLink>{" "}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bloodpressure;
