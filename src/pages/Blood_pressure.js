import { Helmet } from "react-helmet-async";
import "./Blood_pressure.css";
import React, { useState } from "react";
import { eachDayOfInterval, format } from "date-fns";
import Layout from "../components/Layout";

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
            <div className="sbp">
              <p>Systolic blood pressure</p>
              <div className="num"></div>
            </div>
            <div className="dbp">
              <p>Diastolic blood pressure</p>
              <div className="num"></div>
            </div>
            <div className="add">
              <button className="b-add">Add To Record</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bloodpressure;
