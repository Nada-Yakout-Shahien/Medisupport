import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { eachDayOfInterval, format } from "date-fns";
import "./Blood_sugar.css";
import Layout from "../components/Layout";
//import { NavLink } from "react-router-dom";
import { sendAuthenticatedRequest } from "../components/apiService";

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
  const [selectedOption, setSelectedOption] = useState("Default State");

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
    initialMarkValue = 9.5,
    markStepValue = 0.5
  ) => {
    let bars = [];
    let currentValue = initialMarkValue;

    for (let i = 0; i < count; i++) {
      const left = start + i * step;
      const isMark = markSteps.includes(i + 1);

      bars.push({
        id: i + 1,
        left: `${left}em`,
        type: isMark ? "mark-bar" : "red-bar",
        value: currentValue,
      });

      currentValue += markStepValue;
    }

    return bars;
  };
  const Bar = ({ id, type, left, value }) => {
    return (
      <div className={type} style={{ left }} data-value={value}>
        {value !== null && <div className="number">{value}</div>}
      </div>
    );
  };

  const marksLocations = [
    2, 12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122, 132, 142, 152, 162,
    172, 182, 192, 202, 212, 222, 232, 242, 252, 262, 272, 282, 292, 302, 312,
    322, 332, 342, 352, 362, 372, 382, 392, 402, 412, 422, 432, 442, 452, 462,
    472, 482, 492,
  ];
  const items = generateBars(500, marksLocations);
  const [averageValue, setAverageValue] = useState(0);
  const digRef = useRef(null);
  useEffect(() => {
    let running = true;

    const calculateAverage = () => {
      if (!running) return;

      let visibleBars = 0;
      let totalValue = 0;

      const bars = digRef.current.querySelectorAll(".mark-bar, .red-bar");
      bars.forEach((bar) => {
        const barRect = bar.getBoundingClientRect();
        if (barRect.left < window.innerWidth && barRect.right > 0) {
          visibleBars += 1;
          totalValue += parseFloat(bar.getAttribute("data-value")) || 0;
        }
      });

      const average = visibleBars > 0 ? totalValue / visibleBars : 0;
      setAverageValue(average);

      requestAnimationFrame(calculateAverage);
    };

    requestAnimationFrame(calculateAverage);

    return () => {
      running = false;
    };
  }, []);
  
  //after-click-btn
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const userstatusData = {
        level: formData.get("level"),
        status_id: formData.get("status-name"),
      };
      await sendAuthenticatedRequest(
        "/user/blood-sugar/store?level=89&blood_sugar_statuses_id=1", 
        "POST",
        userstatusData
      );
      alert("Data sent successfully.");
      event.target.reset();
    } catch (error) {
      console.error(error);
      alert('Failed to send data. Please try again later.');
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Blood Sugar ♥</title>
        <meta name="description" content="Manage your blood sugar levels" />
      </Helmet>
      <form className="bloodsugar" onSubmit={handleSubmit}>
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
                <div
                  onClick={() => handleOptionClick("Default")}
                  id="1"
                  name="status-name"
                >
                  Default
                </div>
                <div
                  onClick={() => handleOptionClick("During fasting")}
                  id="2"
                  name="status-name"
                >
                  During fasting
                </div>
                <div
                  onClick={() => handleOptionClick("Before eating (1h)")}
                  id="3"
                  name="status-name"
                >
                  Before eating (1h)
                </div>
                <div
                  onClick={() => handleOptionClick("After eating (2h)")}
                  id="4"
                  name="status-name"
                >
                  After eating (2h)
                </div>
                <div
                  onClick={() => handleOptionClick("Before bedtime")}
                  id="5"
                  name="status-name"
                >
                  Before bedtime
                </div>
                <div
                  onClick={() => handleOptionClick("Before workout")}
                  id="6"
                  name="status-name"
                >
                  Before workout
                </div>
                <div
                  onClick={() => handleOptionClick("After workout")}
                  id="7"
                  name="status-name"
                >
                  After workout
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
            <p className="num" id="level" name="level">
              {averageValue.toFixed(2)}
            </p>
            <p>mg/dl</p>
          </div>
          <div className="dig" ref={digRef}>
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

        <div className="btn">
          <input
            type="submit"
            name=""
            value="  Add To Record"
            className="addrec"
          />
        </div>
        {isOverlayVisible && (
          <div className="overlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
            >
              <path
                d="M150 281.25C115.19 281.25 81.8064 267.422 57.1922 242.808C32.5781 218.194 18.75 184.81 18.75 150C18.75 115.19 32.5781 81.8064 57.1922 57.1922C81.8064 32.5781 115.19 18.75 150 18.75C184.81 18.75 218.194 32.5781 242.808 57.1922C267.422 81.8064 281.25 115.19 281.25 150C281.25 184.81 267.422 218.194 242.808 242.808C218.194 267.422 184.81 281.25 150 281.25ZM150 300C189.782 300 227.936 284.196 256.066 256.066C284.196 227.936 300 189.782 300 150C300 110.218 284.196 72.0644 256.066 43.9344C227.936 15.8044 189.782 0 150 0C110.218 0 72.0644 15.8044 43.9344 43.9344C15.8044 72.0644 0 110.218 0 150C0 189.782 15.8044 227.936 43.9344 256.066C72.0644 284.196 110.218 300 150 300Z"
                fill="white"
              />
              <path
                d="M129.766 211.504C134.641 216.379 142.025 216.379 146.899 211.504L185.688 172.714C190.562 167.84 190.562 160.456 185.688 155.582C180.814 150.708 173.43 150.708 168.555 155.582L135.94 188.197L113.195 165.453C108.32 160.579 100.936 160.579 96.0616 165.453C91.1872 170.327 91.1872 177.711 96.0616 182.585L129.766 211.504Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </form>
    </Layout>
  );
};

export default Bloodsugar;
