import { Helmet } from "react-helmet-async";
import "./BMI1.css";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Group690 from "../images/Group690.png";
import Line17 from "../images/Line17.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { saveTokenToLocalStorage } from "../components/apiService";

const BMI1 = () => {
  const [bmiData, setBmiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBmiData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      saveTokenToLocalStorage(accessToken);
      console.log("access_token:", accessToken);

      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user/bmi/get-last-record", {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setBmiData(response.data.data);  // Update here to access the data field directly
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBmiData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <Layout>
      <Helmet>
        <title>BMI1 ♥</title>
        <meta name="description" content="BMI1" />
      </Helmet>

      <div className="bmi1">
        <div className="bmir">
          <p>BMI</p>
        </div>
        <div className="clockr">
          <div className="clockr2">
            <img src={Group690} alt="pic-about-left" />
            <h2>{bmiData.bmi}</h2> {/* Display BMI here */}
          </div>
          <div className="pclockp">
            <p>{bmiData.key}</p>
          </div>

          <div className="rtabler">

          <NavLink to="/bmi_history" className="heiherebut2r">See All</NavLink>
          <p className="heiherebut3r">History</p>
            <div className="tablex">
              <div className="tablex1">
                <p className="svgtable">Normal: </p>
                <p className="svgtable2">{bmiData.result_id} 80Kg</p>
                <img className="svgtable3" src={Line17} alt="Line17" />
                <p className="svgtable4">{bmiData.created_at}</p>  {/* Display created_at */}
                <img className="svgtable3" src={Line17} alt="Line17" />
                <p className="svgtable6">{bmiData['day-name']}</p>  {/* Display day-name */}
              </div>
            </div>
          </div>

          <div className="rfotr1">
            <p className="rfotr2">Recommended Reading</p>
            <p className="rfotr3">How To Lose Sugar?</p>
            <p className="rfotr4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>
          <NavLink to="/Heart_rate" className="heiherebut23">Add To Record</NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default BMI1;