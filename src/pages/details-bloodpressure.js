import { Helmet } from "react-helmet-async";
import "./details-bloodpressure.css";
import React, { useState, useEffect } from "react";
import { eachDayOfInterval, format } from "date-fns";
import "chart.js/auto";
//import { Line } from 'react-chartjs-2';
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

//dig
const Days = (firstDate, endDate) => {
  return eachDayOfInterval({ start: firstDate, end: endDate }).map((day) => ({
    fullDate: format(day, "yyyy-MM-dd"),
  }));
};

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

  //diagram
  const [data] = useState({
    upperBoundValues: [160, 140, 120, 100, 0],
    lowerBoundValues: [110, 90, 70, 50, 0],
    dates: ['2024-03-01', '2024-03-02', '2024-03-03'],
  });

  const firstDate = new Date(2024, 0, 1);
  const endDate = new Date(2024, 0, 5);
  const day = Days(firstDate, endDate);


  const bloodPressureReadings = [
    { date: '2024-03-01', upperValue: 120, lowerValue: 80 },
    { date: '2024-03-02', upperValue: 125, lowerValue: 85 },
    { date: '2024-03-03', upperValue: 130, lowerValue: 90 },
  ];
  
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
            <div className="diagrams">
              {["Upper", "Lower"].map((type) => {
                return (
                  <div className="dig" key={type}>
                    <div className="bound">
                      <div className="boun">
                        <div className="rec"></div>
                        <p>{type} bound</p>
                      </div>
                      <div className="measure">
                        <p>mmHG</p>
                      </div>
                    </div>
                    <div className={`diagram${type[0].toLowerCase()}`}>
                      <div className={`diagram${type[0].toLowerCase()}`}>
                        <div className="diagram-container">
                          <div className="values">
                            {data[`${type.toLowerCase()}BoundValues`].map(
                              (value, i) => (
                                <p key={i}>{value}</p>
                              )
                            )}
                          </div>
                          <div className="chart">
                            <div className="lines">
                    
                              {data.upperBoundValues.map((value, i) => (
                                <div
                                  className="line"
                                  key={i}
                                  style={{ position: "relative" }}
                                >
                                  
                                  {day.map((dayData, index) => {
                                    const pointData = Date(
                                      dayData.fullDate
                                    );
                                    if (
                                      pointData &&
                                      pointData.value === value
                                    ) {
                                      return (
                                        <div
                                          key={index}
                                          className="data-point"
                                          style={{
                                            position: "absolute",
                                            left: `${
                                              (index / day.length) * 100
                                            }%`,
                                            bottom: 0,
                                          }}
                                        ></div>
                                      );
                                    }
                                    return null;
                                  })}
                                </div>
                              ))}
                            </div>
                            <div className="x-axis">
                              {day.map((day, index) => (
                                <div key={index} className="x-axis-date">
                                  {day.fullDate}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
