import { Helmet } from "react-helmet-async";
import "./BMI.css";
import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const BMI = () => {
  return (
    <Layout>
      <Helmet>
        <title>BMI ♥</title>
        <meta name="description" content="BMI" />
      </Helmet>
      <div className="bmi">
        <div className="bmi_r">
          
          <div className="bmir">
            <h2 className="rbmi__r">BMI</h2>
          </div>
          <div className="but_bmi_r">
          <div className="rbodyr">
            <p className="bmi_p">Gender</p>
          </div>
         
          <div className="but_bmi">
           
            <div className="rbutr">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
  <circle cx="15.8242" cy="15" r="15" fill="#BE0202"/>
</svg>
<p>Female</p>
            </div>
            <div className="rrrbur">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
  <circle cx="15.8242" cy="15" r="15" fill="#BE0202"/>
</svg>
<p>male</p>
            </div>
            </div>
            <div className="heightr">
              <div className="heightrp">
              <p>Age(Years)</p>
              </div>
              <div className="heightrp2">
              <p>25</p>
              </div>
              <div className="heightrsliper">
                <div className="heightrsliper2"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
  <circle cx="15.8242" cy="15" r="15" fill="#BE0202"/>
</svg>
              </div>
              <p className="heightrsliper5">0</p>
              <p className="heightrsliper6">100</p>
            </div>
            <div className="sliper2">
            <div className="sliperp">
              <p>Height(cm)</p>
              </div>
              <div className="sliperp2">
              <p>150</p>
              </div>
              <div className="slipersliper">
                <div className="slipersliper2"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
  <circle cx="15.8242" cy="15" r="15" fill="#BE0202"/>
</svg>
              
              </div>
              <p className="slipersliper5">0</p>
              <p className="slipersliper6">300</p>
            </div>
            <div className="heiher2">
            <div className="heiherp">
              <p>Weight(kg)</p>
              </div>
              <div className="heiherp2">
              <p>60</p>
              </div>
              <div className="heihersliper">
                <div className="heihersliper2"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
  <circle cx="15.8242" cy="15" r="15" fill="#BE0202"/>
</svg>
              
              </div>
              <p className="heihersliper5">0</p>
              <p className="heihersliper6">300</p>
            </div>
            </div>
            <NavLink to="/BMI1" className="heiherebut">Calculate</NavLink>
          </div>
          <div className="rfotr">
            <p className="rfotr2">Recommended Reading</p>
            <p className="rfotr3">How To Loss Sugar ?</p>
            <p className="rfotr4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
            <br></br>
“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
          </div>
        </div>
      
      
    </Layout>
  );
};

export default BMI;
