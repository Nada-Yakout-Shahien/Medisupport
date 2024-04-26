import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { eachDayOfInterval, format } from "date-fns";
import "./Blood_sugar.css";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import { sendRequest ,getAccessTokenFromLocalStorage,getAllBloodSugarStatuses ,allBookings} from "../components/apiService";

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


const handleFormSubmit = async (e) => {
  e.preventDefault();
  try {
    const accessToken = getAccessTokenFromLocalStorage(); 
    if (!accessToken) {
      console.error("Access token is missing");
      return;
    }
    const bloodSugarData = {
      level: averageValue.toFixed(2),
      blood_sugar_statuses_id: 1,
    };
    await sendRequest(
      "POST",
      "/user/blood-sugar/store?level=89&blood_sugar_statuses_id=1",
      bloodSugarData,
      accessToken
    );
    setIsOverlayVisible(true);
    console.log("Blood sugar data submitted successfully");
  } catch (error) {
    console.error("Error submitting blood sugar data:", error);
  }
};
const [bloodSugarStatuses, setBloodSugarStatuses] = useState([]);

const toggleMenu = async () => {
  setIsOpen(!isOpen);
  if (!isOpen) {
    try {
      const accessToken = getAccessTokenFromLocalStorage();
      if (!accessToken) {
        console.error("Access token is missing");
        return;
      }
      const response = await getAllBloodSugarStatuses(accessToken);
      setBloodSugarStatuses(response.data);
      console.log("Blood sugar statuses:", response);
    } catch (error) {
      console.error("Error fetching blood sugar statuses:", error);
    }
  }
};
  

  return (
    <Layout>
      <Helmet>
        <title>Blood Sugar ♥</title>
        <meta name="description" content="Manage your blood sugar levels" />
      </Helmet>
      <form className="bloodsugar" onSubmit={handleFormSubmit}>
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
                {bloodSugarStatuses.map((status) => (
                  <div
                    key={status.id}
                    onClick={() => handleOptionClick(status["status-name"])} 
                    id={status.id}
                    name="status-name"
                  >
                    {status["status-name"]} 
                  </div>
                ))}
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

        <div className="butn">
          <input
            type="submit"
            name=""
            value="Add To Record"
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
                d="M150 281.25C115.19 281.25 81.8064 267.422 57.1922 242.808C32.5781 218.194 18.75 184.81 18.75 150C18.75 115.19 32.5781 81.8064 57.1922 57.1922C81.8064 32.5781 115.19 18.75 150 18.75C184.81 18.75 218.194 32.5781 242.808 57.1922C267.422 81.8064 281.25 115.19 281.25 150C281.25 184.81 267.422 218.194 242.808 242.808C218.194 267.422 184.81 281.25 150 281.25ZM150 300C189.782 300 227.936 284.196 256.066 256.066C284.196 227.936 300 189.782 300 150C300 110.218 284.196 72.0644 256.066 43.934C227.936 15.8035 189.782 0 150 0C110.218 0 72.0644 15.8035 43.934 43.934C15.8035 72.0644 0 110.218 0 150C0 189.782 15.8035 227.936 43.934 256.066C72.0644 284.196 110.218 300 150 300Z"
                fill="#4A963D"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="73.825"
                y="89"
                width="153"
                height="122"
                viewBox="0 0 153 122"
                fill="none"
              >
                <path
                  d="M128.687 4.18738C128.554 4.31683 128.429 4.45461 128.312 4.59989L63.1937 87.5686L23.95 48.3061C21.2842 45.8221 17.7583 44.4698 14.1152 44.5341C10.4721 44.5984 6.99608 46.0742 4.41959 48.6507C1.8431 51.2272 0.367251 54.7032 0.302972 58.3463C0.238693 61.9895 1.591 65.5154 4.075 68.1812L53.6875 117.812C55.024 119.146 56.6156 120.198 58.3672 120.903C60.1188 121.609 61.9946 121.955 63.8827 121.92C65.7708 121.885 67.6325 121.47 69.3568 120.7C71.0811 119.93 72.6326 118.82 73.9187 117.437L148.769 23.8749C151.317 21.1998 152.711 17.6292 152.648 13.9349C152.585 10.2406 151.071 6.71954 148.432 4.13291C145.794 1.54627 142.244 0.10192 138.549 0.112114C134.854 0.122308 131.312 1.58623 128.687 4.18738Z"
                  fill="#4A963D"
                />
              </svg>
            </svg>{" "}
            <NavLink to="/DetailsBS" className="seedet">
              See Details
            </NavLink>{" "}
          </div>
        )}
      </form>
    </Layout>
  );
};

export default Bloodsugar;
