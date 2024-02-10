import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { eachDayOfInterval, format } from "date-fns";
import "./details-bloodsuger.css";
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

const DetailsBloodsuger = () => {
  //days
  const startDate = new Date(2024, 5, 1);
  const days = generateDays(startDate, 100);

  //on click day
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (fullDate) => {
    setSelectedDay(fullDate);
  };

  //diagram

  //numbers-diagram
  useEffect(() => {
    fetch("URL_TO_YOUR_API")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a - b);
        setChartValues(sortedData);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  const [chartValues, setChartValues] = useState([
      85, 110, 175, 220, 265, 300, 400, 500,
  ]);

  //days-diagram
  const [dayValues, setDayValues] = useState([
    { day: "Mon", value: 250 },
    { day: "Tue", value: 400 },
    { day: "Wed", value: 200 },
    { day: "Thu", value: 250 },
    { day: "Fri", value: 300 },
    { day: "Sat", value: 350 },
    { day: "Sun", value:  10 },
  ]);

  useEffect(() => {
    fetch("URL_TO_YOUR_API")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.map((item) => ({
          day: item.day, 
          value: item.value, 
        }));
        setDayValues(transformedData);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Blood Sugar Details♥</title>
        <meta name="description" content="Blood Sugar Details" />
      </Helmet>
      <div className="bloodsugard">
        <div className="stb">
          <h3>Blood Sugar</h3>
        </div>
        <div className="date">
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
        <div className="diagram">
          <div className="chart-container">
            <div className="chart-box">
              <div className="chart-title">
                <p>RESULTS:</p>
                <div className="chart-pre-diabetes">
                  <div className="pre">
                    Pre-diabetes:<p className="defnum">120</p> mg/gl
                  </div>
                </div>
              </div>
              <div className="chart-axis">
                <div className="chart-values">
                  {chartValues.map((value, index) => (
                    <div key={index} className="chart-value">
                      {value}
                    </div>
                  ))}
                </div>
                <div className="lcp">
                  <div className="chart-bars">
                    {dayValues.map(({ day, value }, index) => (
                      <div
                        key={index}
                        className="chart-bar-outer"
                        style={{ height: `100%` }}
                      >
                        <div
                          className="chart-bar-inner"
                          style={{ height: `${(value / 500) * 100}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="chart-days">
                    {dayValues.map(({ day }, index) => (
                      <div key={index} className="day">
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inf-det">
          <h3>Recommended Reading</h3>
          <h4>How To Loss Sugar ?</h4>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
            <br />
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
        <div className="btn">
          <NavLink to="/blood_sugar" className="addrec">
            Add New Record
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default DetailsBloodsuger;
