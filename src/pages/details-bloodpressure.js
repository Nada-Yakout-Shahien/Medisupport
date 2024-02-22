import { Helmet } from "react-helmet-async";
import "./details-bloodpressure.css";
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

const DetailsBloodpressure = () => {
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
        <title>Details Blood Pressure♥ </title>{" "}
        <meta name="description" content="Details Blood Pressure" />
      </Helmet>{" "}
      <div className="detailsbp">
        <div className="headcon">
          <div className="dBP-address">
            <p>Bloode Pressure</p>
          </div>
          <div className="dBP-status">
            <p>
              Average <span>140/90</span> mmHG
            </p>
            <button>
              <p>Normal</p>
            </button>
          </div>
        </div>

        <div className="contant">
          <div className="dBP-date">
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

          <div className="dBP-diagram">
            
          </div>

          <div className="inf-det">
            <h3>Recommended Reading</h3>
            <h4>How To Loss Sugar ?</h4>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>
          <div className="btn">
            <NavLink to="/blood_pressure" className="addrec">
              Add New Record
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailsBloodpressure;
