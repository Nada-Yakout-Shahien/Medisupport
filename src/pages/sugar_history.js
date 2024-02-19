import { Helmet } from "react-helmet-async";
import React, { useState, useEffect } from "react";
import "./history.css";
//import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const SugarHistory = () => {
  //default menu
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption] = useState("Blood Sugar");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //data
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const apiData = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              {
                status: "Normal",
                mesure: "120",
                unit: "mg/gl",
                date: "24/11/2023",
                day: "Tue",
              },

              {
                status: "High",
                mesure: "150",
                unit: "mg/gl",
                date: "25/11/2023",
                day: "Wed",
              },

              {
                status: "Low",
                mesure: "90",
                unit: "mg/gl",
                date: "26/11/2023",
                day: "Thu",
              },
              {
                status: "Normal",
                mesure: "120",
                unit: "mg/gl",
                date: "24/11/2023",
                day: "Tue",
              },

              {
                status: "High",
                mesure: "150",
                unit: "mg/gl",
                date: "25/11/2023",
                day: "Wed",
              },

              {
                status: "Low",
                mesure: "90",
                unit: "mg/gl",
                date: "26/11/2023",
                day: "Thu",
              },
              {
                status: "Normal",
                mesure: "120",
                unit: "mg/gl",
                date: "24/11/2023",
                day: "Tue",
              },

              {
                status: "High",
                mesure: "150",
                unit: "mg/gl",
                date: "25/11/2023",
                day: "Wed",
              },

              {
                status: "Low",
                mesure: "90",
                unit: "mg/gl",
                date: "26/11/2023",
                day: "Thu",
              },
              {
                status: "Normal",
                mesure: "120",
                unit: "mg/gl",
                date: "24/11/2023",
                day: "Tue",
              },

              {
                status: "High",
                mesure: "150",
                unit: "mg/gl",
                date: "25/11/2023",
                day: "Wed",
              },

              {
                status: "Low",
                mesure: "90",
                unit: "mg/gl",
                date: "26/11/2023",
                day: "Thu",
              },
            ]),
          1000
        )
      );

      setDataList(apiData);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Sugar History ♥</title>
        <meta name="description" content="Sugar History" />
      </Helmet>
    </Layout>
  );
};

export default SugarHistory;
