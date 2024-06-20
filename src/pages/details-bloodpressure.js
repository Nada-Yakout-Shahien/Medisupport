import { Helmet } from "react-helmet-async";
import "./details-bloodpressure.css";
import React, { useState, useEffect } from "react";
import { eachDayOfInterval, format } from "date-fns";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import {
  getAllBloodPressureMeasurements,
  getLatestBloodPressureMeasurement,
  getAllSystolicMeasurementsupper,
  getAllDiastolicMeasurementslower,
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
  const [latestMeasurement, setLatestMeasurement] = useState(null);

  useEffect(() => {
    const fetchRecommendedAdvice = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const { data } = await getLatestBloodPressureMeasurement(accessToken);
        console.log("Recommended blood pressure advice:", data);
        setLatestMeasurement(data);
      } catch (error) {
        console.error(
          "Error fetching recommended blood pressure advice:",
          error
        );
      }
    };

    fetchRecommendedAdvice();
  }, []);

  const [systolicData, setSystolicData] = useState([]);
  const [diastolicData, setDiastolicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const systolicResponse = await getAllSystolicMeasurementsupper(
          accessToken
        );
        const diastolicResponse = await getAllDiastolicMeasurementslower(
          accessToken
        );

        // Extract data from the response
        const systolicData = Object.entries(systolicResponse.data).map(
          ([timestamp, value]) => ({
            timestamp,
            value,
          })
        );
        const diastolicData = Object.entries(diastolicResponse.data).map(
          ([timestamp, value]) => ({
            timestamp,
            value,
          })
        );

        // Update state with the fetched data
        setSystolicData(systolicData);
        console.log("systolicData", systolicData);
        setDiastolicData(diastolicData);
        console.log("diastolicData", diastolicData);
      } catch (error) {
        console.error("Error fetching blood pressure data:", error);
      }
    };

    fetchData();
  }, []);

  const systolicChartData = {
    labels: systolicData.map((entry) => entry.timestamp),
    datasets: [
      {
        label: "Systolic",
        data: systolicData.map((entry) => entry.value),
        borderColor: "#be0202",
        fill: false,
        pointBackgroundColor: "white",
        pointBorderColor: "#be0202",
        yAxisID: "systolic-axis", // Assigning a unique ID to the y-axis
      },
    ],
  };

  const diastolicChartData = {
    labels: diastolicData.map((entry) => entry.timestamp),
    datasets: [
      {
        label: "Diastolic",
        data: diastolicData.map((entry) => entry.value),
        borderColor: "#be0202",
        fill: false,
        pointBackgroundColor: "white",
        pointBorderColor: "#be0202",
        yAxisID: "diastolic-axis", // Assigning a unique ID to the y-axis
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
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
              Average
              {latestMeasurement && (
                <span>
                  {latestMeasurement.attributes.systolic}/
                  {latestMeasurement.attributes.diastolic}
                </span>
              )}
              mmHG
            </p>
            <button>
              <p>
                {latestMeasurement &&
                latestMeasurement.attributes.pressure_advice_key
                  ? latestMeasurement.attributes.pressure_advice_key
                  : "No Key available"}
              </p>
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
            <div className="diagramupper">
              <div className="bound">
                <div className="boun">
                  <div className="rec"></div>
                  <p>Upper bound</p>
                </div>
                <div className="measure">
                  <p>mmHG</p>
                </div>
              </div>
              <Line data={systolicChartData} options={chartOptions} />
            </div>
            <div className="diagramlower">
              <div className="bound">
                <div className="boun">
                  <div className="rec"></div>
                  <p>Lower bound</p>
                </div>
                <div className="measure">
                  <p>mmHG</p>
                </div>
              </div>
              <Line data={diastolicChartData} options={chartOptions} />
            </div>
          </div>

          {latestMeasurement && (
            <div className="inf-det">
              <h3>Recommended Reading</h3>
              <h4>
                {latestMeasurement &&
                latestMeasurement.attributes.pressure_advice_key
                  ? latestMeasurement.attributes.pressure_advice_key
                  : "No Key available"}
              </h4>
              <p>
                {latestMeasurement &&
                latestMeasurement.attributes.pressure_advice_advice
                  ? latestMeasurement.attributes.pressure_advice_advice
                  : "No advice available"}
              </p>
            </div>
          )}

          <div className="butn">
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
