import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { eachDayOfInterval, format } from "date-fns";
import "./details-bloodsuger.css";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import {
  getLastSevenBloodSugarRecords,
  getRecommendedBloodSugarAdvice,
  getLastBloodSugarRecord,
} from "../components/apiService";

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
  const [chartValues, setChartValues] = useState([
    0, 60, 100, 140, 180, 220, 260, 300,
  ]);

  //days-diagram
  const [lastBloodSugarRecord, setLastBloodSugarRecord] = useState(null);

  const [dayValues, setDayValues] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const records = await getLastSevenBloodSugarRecords(accessToken);
        console.log("Last seven blood sugar records:", records);
            
        
        const formattedRecords = records.data.map((records, index) => ({
          id: records.id,
          day: format(new Date(records.created_at), "EEE"),
          level: records.level,
          advice: records.advice,
        }));

        setDayValues(formattedRecords);
      } catch (error) {
        console.error("Error fetching last seven blood sugar records:", error);
      }
    };

    fetchRecords();
  }, []);
  

  const [recommendedAdvice, setRecommendedAdvice] = useState("");

  useEffect(() => {
    const fetchRecommendedAdvice = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const advice = await getRecommendedBloodSugarAdvice(accessToken);
        console.log("Recommended blood sugar advice:", advice);
        setRecommendedAdvice(advice);
      } catch (error) {
        console.error("Error fetching recommended blood sugar advice:", error);
      }
    };

    fetchRecommendedAdvice();
  }, []);

  //valid data ?
  const [formData, setFormData] = useState({});
  const [isFormDataComplete, setIsFormDataComplete] = useState(false);

  const validateFormData = () => {};

  const handleSubmit = (event) => {
    if (isFormDataComplete) {
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    validateFormData();
  }, [formData]);
  
  useEffect(() => {
    const fetchLastBloodSugarRecord = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await getLastBloodSugarRecord(accessToken);
        if (response && response.data) {
          setLastBloodSugarRecord(response.data);
        } else {
          console.error("No data found for last blood sugar record");
        }
      } catch (error) {
        console.error("Error fetching last blood sugar record:", error);
      }
    };
  
    fetchLastBloodSugarRecord();
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
            <div className="chart-boxx">
              <div className="chart-title">
                <p>RESULTS:</p>
                <div className="chart-pre-diabetes">
                  <div className="pre">
                    Pre-diabetes:
                    <p className="defnum">
                      {lastBloodSugarRecord
                        ? lastBloodSugarRecord.level
                        : "N/A"}
                    </p>{" "}
                    mg/gl
                  </div>
                </div>
              </div>
              <div className="chart-axis">
                <div className="chart-values">
                  {chartValues.map((level, index) => (
                    <div key={index} className="chart-value">
                      {level}
                    </div>
                  ))}
                </div>
                <div className="lcp">
                  <div className="chart-bars">
                    {dayValues.map(({ day, level }, index) => (
                      <div
                        key={index}
                        className="chart-bar-outer"
                        style={{ height: `100%` }}
                      >
                        <div
                          className="chart-bar-inner"
                          style={{ height: `${(level / 300) * 100}%` }}
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
          <h4>
            {recommendedAdvice && recommendedAdvice.data.key
              ? recommendedAdvice.data.key
              : "No Key available"}
          </h4>
          <p>
            {recommendedAdvice && recommendedAdvice.data.advice
              ? recommendedAdvice.data.advice
              : "No advice available"}
          </p>
        </div>

        <div className="butn">
          <NavLink
            to="/blood_sugar"
            className="addrec"
            onClick={handleSubmit}
            disabled={!isFormDataComplete}
          >
            Add New Record
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default DetailsBloodsuger;
