import { Helmet } from "react-helmet-async";
import "./Activity.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { eachDayOfInterval, format } from "date-fns";
import Layout from "../components/Layout";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { NavLink } from "react-router-dom";
import "chart.js/auto";
import {
  getLastSevenBloodSugarRecords,
  getRecommendedBloodSugarAdvice,
  getLastBloodSugarRecord,
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
  


const Activity = (props, { data }) => {
  const [selectedOption, setSelectedOption] = useState("Blood Pressure");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //days
  const startDate = new Date(2024, 5, 21);
  const days = generateDays(startDate, 100);

  //on click day
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (fullDate) => {
    setSelectedDay(fullDate);
  };

                                {/* pressure*/ }

  //line_pressure
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
 //history-pressure//
  
 const [dataList, setDataList] = useState([]);
 const [error, setError] = useState(null);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const token = localStorage.getItem('accessToken');
       if (!token) {
         throw new Error('Token is missing');
       }

       const response = await axios.get('http://127.0.0.1:8000/api/user/blood-pressure/get-latest-three-measurements', {
         headers: {
           'Authorization': `Bearer ${token}`
         }
       });

       console.log('Response data:', response.data); 

       if (Array.isArray(response.data.data)) {
        const formattedData = response.data.data.map(item => ({
          ...item,
          attributes: {
            ...item.attributes,
            created_at: format(new Date(item.attributes.created_at), "yyyy-MM-dd")
          }
        }));
        setDataList(formattedData);
      } else {
        console.error('Data is not array:', response.data);
        setError('Unexpected response format');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  };

  fetchData();
}, []);

                               {/* sugar */ }

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


//history-sugar//
const [dataLists, setDataLists] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          throw new Error('Token is missing');
        }

        const response = await axios.get('http://127.0.0.1:8000/api/user/blood-sugar/get-last-three-records', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log('Response data:', response.data); 

        if (Array.isArray(response.data.data)) { 
          setDataLists(response.data.data);
        } else {
          console.error('Data is not array :', response.data);
          setErrors('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrors('Error fetching data');
      }
    };

    fetchData();
  }, []);


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
        <div className="blood_pressure">
          <div className="head">
            <div className="status">
              <p>
                Average 

                {latestMeasurement && (
                  <span>{latestMeasurement.attributes.systolic}/{latestMeasurement.attributes.diastolic}</span> 
                )}

                mmHG
              </p>
              <button>
                <p>Normal</p>
              </button>
            </div>
          </div>

                        {/* date */}

          <div className="contant">
            <div className="BP-date">
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
                    <div
                      className="date-text"
                      style={{ color: item.textColor }}
                    >
                      {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="BP-diagram">
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
            
                          {/* table_pressure */}

            <div className="table">
              <div className="head">
                <p>History</p>
                <NavLink to="/PressurHistory" className="trans">
                  See All
                </NavLink>
              </div>
              <div className="his">
                {error ? (
                  <div className="error"> An error occured durin receipt : {error}</div>
                  ) : (
                  <div className="datah">
                    {dataList.map((data) => (
                      <div key={data.id} className="data">
                        <p className="status">{data.attributes.pressure_advice_key}:</p>
                        <p className="mesure">
                          {data.attributes.systolic}/{data.attributes.diastolic}{" "}
                          <p className="unit-p">mmHG</p>
                        </p>
                        <p className="line1-p">|</p>
                        <p className="date-p">{data.attributes.created_at}</p>
                        <p className="line2-p">|</p>
                        <p className="day-p">{data.attributes['day-name']}</p>
                      
                      </div>
                    ))}
                  </div>
                 )}
              </div>
            </div>
          </div>

                              {/* button-pressure */}

          <div className="record">
            <NavLink to="/blood_pressure" className="btn">
              Add to Record
            </NavLink>
          </div>
        </div>
      )}

                        {/* blood-sugar-sec */}

                        {/* date */}
                 
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

                                  {/* diagram */}

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
                            style={{ height: `${(level / 300) * 100}%` }}>
                          </div>
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

                                  {/* reading */}

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

                                  {/* table-sugar */}

          <div className="table">
            <div className="head">
              <p>History</p>
              <NavLink to="/SugarHistory" className="trans">
                See All
              </NavLink>
            </div>
            <div className="his">
              {errors ? (
                  <div className="error">An error occured durin receipt : {error}</div>
                ) : (
                  <div className="datah">
                    {dataLists.map((data) => (
                      <div key={data.id} className="data">
                        <p className="status">{data.advice.key}:</p>
                        <p className="mesure">
                          {data.level}{" "}
                          <p className="unit"> mg/gl</p>
                        </p>
                        <p className="line1">|</p>
                        <p className="date">{data.created_at}</p>
                        <p className="line2">|</p>
                        <p className="day">{data['day-name']}</p>
                      </div>
                    ))}
                  </div>
                )}
            </div>
        </div>

                           {/* button-sugar */}

          <div className="record">
            <NavLink to="/blood_sugar" className="btn">
              Add New Record
            </NavLink>
          </div>

        </div>
      )}

    </Layout>
  );
};

export default Activity;
