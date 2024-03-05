import { Helmet } from "react-helmet-async";
import "./Activity.css";
import React , { useState }  from "react";

import Layout from '../components/Layout';
import { NavLink } from "react-router-dom";

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

const Activity = (props, { data }) => {
  const [selectedOption, setSelectedOption] = useState("Blood Pressure");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };



  
  return (
    <Layout>
      <Helmet>
        <title>Activity ♥</title>
        <meta name="description" content="Activity" />
      </Helmet>

      {/* section-1 */}

      <div className="dropdown-menu">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="Blood Pressure">Blood Pressure</option>
          <option value="Blood Sugar">Blood Sugar</option>
        </select>
      </div>

      {/* blood-pressure-sec */}

      {selectedOption === "Blood Pressure" && (
        <div className="detailsbpa">
          <div className="headcon">
            <div className="dBP-status">
              <p>
                Average <span>140/90</span> mmHG
              </p>
              <button>
                <p>Normal</p>
              </button>
            </div>
          </div>

                          {/* dates */}
          
          <div className="date">
            
          </div>
          
                          {/* graph */}

          <div>
            
          </div> 

            <div className="inf-det">
              <h3>Recommended Reading</h3>
              <h4>How To Loss Sugar ?</h4>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book. It usually begins
                with:
                <br />
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            
            {/* table */}

            <div className="table">
              <div className="head">
                <h4>History</h4>
                <NavLink to="" className="trans">
                  See All
                </NavLink>
              </div>
            </div>
            <div className="btn">
              <NavLink to="/blood_pressure" className="addrec">
                Add New Record
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* blood-sugar-sec */}

      {selectedOption === "Blood Sugar" && (
        <div className="bloodsugarda">
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
          <div className="average">
            <h5>Pre-diabetes:</h5>
            <div className="ratio">
              <p>120</p>
              <h5>mg/gl</h5>
            </div>
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

          {/* table */}

          <div className="table">
            <div className="head">
              <h4>History</h4>
              <NavLink to="" className="trans">
                See All
              </NavLink>
            </div>
          </div>

          <div className="btn">
            <NavLink to="/blood_sugar" className="addrec">
              Add New Record
            </NavLink>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Activity;
