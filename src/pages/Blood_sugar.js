import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { eachDayOfInterval, format } from "date-fns";
import "./Blood_sugar.css";
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

const Bloodsugar = () => {
  //default menu
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Default");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //days
  const startDate = new Date(2024, 5, 1);
  const days = generateDays(startDate, 100);

  //on click day
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (fullDate) => {
    setSelectedDay(fullDate);
  };

  //diagram
  const generateBars = (
    count,
    markSteps,
    start = 0,
    step = 2,
    initialMarkValue = 110,
    markStepValue = 5
  ) => {
    const marksSet = new Set(markSteps);
    let bars = [];
    let markValue = initialMarkValue;

    for (let i = 0; i < count; i++) {
      const left = start + i * step;
      const isMark = marksSet.has(i + 1);

      if (isMark) {
        bars.push({
          id: i + 1,
          left: `${left}em`,
          type: "mark-bar",
          value: markValue,
        });
        markValue += markStepValue;
      } else {
        bars.push({
          id: i + 1,
          left: `${left}em`,
          type: "red-bar",
          value: null,
        });
      }
    }

    return bars;
  };
  const Bar = ({ id, type, left, value }) => {
    return (
      <div className={`${type}`} style={{ left }} data-value={value}>
        {value !== null && <div className="number">{value}</div>}
      </div>
    );
  };
  const marksLocations = [
    2, 13, 23, 33, 43, 53, 63, 73, 83, 93, 103, 113, 123, 133, 143, 153, 163,
    173, 183, 193, 203,
  ];

  const items = generateBars(213, marksLocations);

  



  

  return (
    <Layout>
      <Helmet>
        <title>Blood Sugar ♥</title>
        <meta name="description" content="Manage your blood sugar levels" />
      </Helmet>
      <div className="bloodsugar">
        <div className="stb">
          <h3>Blood Sugar</h3>
          <div className="menu" onClick={toggleMenu}>
            <div className="txt">{selectedOption}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M11.0818 13.3139L15.3588 8.36388C15.4385 8.26837 15.5339 8.19219 15.6393 8.13978C15.7447 8.08737 15.8581 8.05979 15.9728 8.05863C16.0875 8.05748 16.2013 8.08278 16.3075 8.13306C16.4137 8.18334 16.5101 8.25759 16.5913 8.35149C16.6724 8.44538 16.7365 8.55703 16.78 8.67993C16.8234 8.80282 16.8453 8.9345 16.8443 9.06728C16.8433 9.20006 16.8195 9.33128 16.7742 9.45329C16.7289 9.57529 16.6631 9.68564 16.5806 9.77788L11.6927 15.4349C11.5307 15.6224 11.3109 15.7277 11.0818 15.7277C10.8527 15.7277 10.633 15.6224 10.471 15.4349L5.58312 9.77788C5.50059 9.68564 5.43477 9.57529 5.38948 9.45329C5.3442 9.33128 5.32037 9.20006 5.31937 9.06728C5.31837 8.9345 5.34023 8.80282 5.38368 8.67993C5.42712 8.55703 5.49128 8.44538 5.57241 8.35149C5.65353 8.25759 5.75 8.18334 5.85619 8.13306C5.96238 8.08278 6.07615 8.05748 6.19088 8.05863C6.3056 8.05979 6.41898 8.08737 6.5244 8.13978C6.62981 8.19219 6.72516 8.26837 6.80486 8.36388L11.0818 13.3139Z"
                fill="white"
              />
            </svg>
            {isOpen && (
              <div className="dropdown-content">
                <div onClick={() => handleOptionClick("Option 1")}>
                  Option 1
                </div>
                <div onClick={() => handleOptionClick("Option 2")}>
                  Option 2
                </div>
                <div onClick={() => handleOptionClick("Option 3")}>
                  Option 3
                </div>
              </div>
            )}
          </div>
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
          <div className="measure">
            <p className="num">120</p>
            <p>mg/dl</p>
          </div>
          <div className="dig">
            <div className="container">
              {items.map((item, index) => (
                <Bar
                  key={index}
                  id={item.id}
                  type={item.type}
                  left={item.left}
                  value={item.value}
                  data-value={item.value}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="btn"></div>
      </div>
    </Layout>
  );
};

export default Bloodsugar;
