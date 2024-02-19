import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { eachDayOfInterval, format } from "date-fns";
import "./Blood_sugar.css";
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
      <div className={`${type}`} style={{ left }} data-value={value}>
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
  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <Layout>
      <Helmet>
        <title>Blood Sugar ♥</title>
        <meta name="description" content="Manage your blood sugar levels" />
      </Helmet>
      
    </Layout>
  );
};

export default Bloodsugar;
