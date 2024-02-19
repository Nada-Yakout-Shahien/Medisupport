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
      0, 88, 155, 225, 295, 365, 430, 500,
  ]);

  //days-diagram
  const [dayValues, setDayValues] = useState([
    { day: "Mon", value: 450},
    { day: "Tue", value: 225 },
    { day: "Wed", value: 350 },
    { day: "Thu", value: 299 },
    { day: "Fri", value: 390 },
    { day: "Sat", value: 250 },
    { day: "Sun", value:  270 },
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
    
    </Layout>
  );
};

export default DetailsBloodsuger;
