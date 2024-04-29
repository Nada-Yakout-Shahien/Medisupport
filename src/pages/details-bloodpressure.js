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
  // Chart options
  const chartOptions = {
    responsive: true,
    title: {
      display: false,
      text: "Blood Pressure",
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(190, 2, 2, 0.3)",
            borderDash: [5, 5],
            lineWidth: 2.77,
          },
          scaleLabel: {
            display: true,
            labelString: "Day",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(190, 2, 2, 0.3)",
            borderDash: [5, 5],
            lineWidth: 2.77,
          },
          scaleLabel: {
            display: true,
            labelString: "mmHg",
          },
        },
      ],
    },
  };
  const datau = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Upper Bound",
        data: [100, 116, 100, 140, 120, 138, 100],
        borderColor: "#be0202",
        backgroundColor: "#be0202",
      },
    ],
  };
// Upper bound data
const [dataup, setDataup] = useState({});

useEffect(() => {
  const fetchData = async () => {
    try {
      // Call the function to fetch systolic measurements
      const accessToken = localStorage.getItem("accessToken");
      const systolicMeasurements = await getAllSystolicMeasurementsupper(accessToken);

      // Extract data from API response
      const formattedRecords = Object.entries(systolicMeasurements.data).map(
        ([dateTime, value]) => {
          return { x: dateTime, y: value };
        }
      );      

      // Extract labels and data arrays
      const labels = formattedRecords.map((record) => record.x);
      const data = formattedRecords.map((record) => record.y);

      // Set data for chart
      setDataup({
        labels: labels,
        datasets: [
          {
            label: "Upper Bound",
            data: data,
            borderColor: "#be0202",
            backgroundColor: "#be0202",
          },
        ],
      });
    } catch (error) {
      console.error("Failed to fetch systolic measurements:", error.message);
    }
  };

  fetchData();
}, []);


  

  // Lower bound data
  const datal = {
    labels: ["", "", "", "", "", "", ""],
    display: false,
    datasets: [
      {
        label: "Lower Bound",
        data: [90, 100, 89, 90, 69, 50, 91],
        borderColor: "#be0202",
        backgroundColor: "#be0202",
      },
    ],
  };

  const [bloodPressureMeasurements, setBloodPressureMeasurements] = useState(
    []
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call the function to fetch measurements
        const accessToken = localStorage.getItem("accessToken");
        const measurements = await getAllBloodPressureMeasurements(accessToken);
        // Save the measurements to state
        console.log(measurements);

        const formattedRecords = measurements.data.attributes.map(
          (measurements, index) => ({
            systolic: measurements.systolic,
            diastolic: measurements.diastolic,
            pressure_advice_advice: measurements["pressure_advice_advice"],
            pressure_advice_key: measurements["pressure_advice_key"],
          })
        );
        setBloodPressureMeasurements(formattedRecords);
      } catch (error) {
        console.error(
          "Failed to fetch blood pressure measurements:",
          error.message
        );
      }
    };

    fetchData();
  }, []);

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
              <Line data={datau} options={chartOptions} />
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
              <Line data={datal} options={chartOptions} />
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
