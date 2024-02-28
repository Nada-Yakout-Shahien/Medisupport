import { Helmet } from "react-helmet-async";
import "./history.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Layout from '../components/Layout';


const PressurHistory = () => {

  //default menu
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption] = useState("Blood Pressur");
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
                mesure: "140/90",
                unit: "mmHG",
                date: "24/11/2023",
                day: "Tue",
              },

              {
                status: "High",
                mesure: "140/90",
                unit: "mmHG",
                date: "25/11/2023",
                day: "Wed",
              },

              {
                status: "Low",
                mesure: "140/90",
                unit: "mmHG",
                date: "26/11/2023",
                day: "Thu",
              },
              {
                status: "Normal",
                mesure: "140/90",
                unit: "mmHG",
                date: "24/11/2023",
                day: "Tue",
              },

              {
                status: "High",
                mesure: "140/90",
                unit: "mmHG",
                date: "25/11/2023",
                day: "Wed",
              },

              {
                status: "Low",
                mesure: "140/90",
                unit: "mmHG",
                date: "26/11/2023",
                day: "Thu",
              },
              {
                status: "Normal",
                mesure: "140/90",
                unit: "mmHG",
                date: "24/11/2023",
                day: "Tue",
              },

              {
                status: "High",
                mesure: "140/90",
                unit: "mmHG",
                date: "25/11/2023",
                day: "Wed",
              },

              {
                status: "Low",
                mesure: "140/90",
                unit: "mg/gl",
                date: "26/11/2023",
                day: "Thu",
              },
              {
                status: "Normal",
                mesure: "140/90",
                unit: "mmHG",
                date: "24/11/2023",
                day: "Tue",
              },

              {
                status: "High",
                mesure: "140/90",
                unit: "mmHG",
                date: "25/11/2023",
                day: "Wed",
              },

              {
                status: "Low",
                mesure: "140/90",
                unit: "mmHG",
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
        <title>Pressur History ♥</title>
        <meta name="description" content="Pressur History" />
      </Helmet>
      <div className="history">
        <h3>All History</h3>
        <div className="bloodhis">
          <div className="menu" onClick={toggleMenu}>
            <div
              className={`txt ${
                selectedOption === "Blood Pressur"
                  ? "option-default"
                  : "option-selected"
              }`}
            >
              {selectedOption}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M11.0818 13.3139L15.3588 8.36388C15.4385 8.26837 15.5339 8.19219 15.6393 8.13978C15.7447 8.08737 15.8581 8.05979 15.9728 8.05863C16.0875 8.05748 16.2013 8.08278 16.3075 8.13306C16.4137 8.18334 16.5101 8.25759 16.5913 8.35149C16.6724 8.44538 16.7365 8.55703 16.78 8.67993C16.8234 8.80282 16.8453 8.9345 16.8443 9.06728C16.8433 9.20006 16.8195 9.33128 16.7742 9.45329C16.7289 9.57529 16.6631 9.68564 16.5806 9.77788L11.6927 15.4349C11.5307 15.6224 11.3109 15.7277 11.0818 15.7277C10.8527 15.7277 10.633 15.6224 10.471 15.4349L5.58312 9.77788C5.50059 9.68564 5.43477 9.57529 5.38948 9.45329C5.3442 9.33128 5.32037 9.20006 5.31937 9.06728C5.31837 8.9345 5.34023 8.80282 5.38368 8.67993C5.42712 8.55703 5.49128 8.44538 5.57241 8.35149C5.65353 8.25759 5.75 8.18334 5.85619 8.13306C5.96238 8.08278 6.07615 8.05748 6.19088 8.05863C6.3056 8.05979 6.41898 8.08737 6.5244 8.13978C6.62981 8.19219 6.72516 8.26837 6.80486 8.36388L11.0818 13.3139Z"
                fill="black"
              />
            </svg>
            {isOpen && (
              <div className="dropdown-content">
                <NavLink to="/SugarHistory" className="nav">
                  Blood Sugar
                </NavLink>
                <NavLink to="/BmiHistory" className="nav">
                  BMI
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <div className="his">
          <div className="datah">
            {dataList.map((data, index) => (
              <div key={index} className="data">
                <p className="status">{data.status}:</p>
                <p className="mesure">
                  {data.mesure}
                  <p className="unit"> mmHG</p>
                </p>
                <p className="line"></p>
                <p className="date">{data.date}</p>
                <p className="line"></p>
                <p className="day">{data.day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PressurHistory;


