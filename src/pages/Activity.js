import { Helmet } from "react-helmet-async";
import "./Activity.css";
import React , { useState }  from "react";

import Layout from '../components/Layout';
import { NavLink } from "react-router-dom";


const Activity = (props,{ data } ) => {
  
  const [selectedOption, setSelectedOption] = useState('Blood Pressure');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };



  
  return (
    <Layout>
      <Helmet>
        <title>Activity ♥</title>
        <meta name="description" content="Activity" />
      </Helmet>

                        {/* section-1 */}

      <div className="dropdown-menu">               
        <select  value={selectedOption} onChange={handleOptionChange}>
          <option value="Blood Pressure">Blood Pressure</option>
          <option value="Blood Sugar">Blood Sugar</option>
        </select>
      </div> 

                      {/* blood-pressure-sec */}

      {selectedOption === "Blood Pressure" && (
        <div className="b-pressure">
          <div className="rate">
            <div className="average">
              <h5>Average</h5>
              <div className="ratio">
                <p>140/90</p> 
                <h5>mmHG</h5>
              </div>
            </div>
            <button>Normal</button>
          </div>

                          {/* dates */}
          
          <div className="date">
            
          </div>
          
                          {/* graph */}

          <div>
            
          </div> 

                          {/* reading-sec */}
                        
          <div className="read">
            <h3>Recommended Reading</h3>
            <h5>How To Reduce Pressure?</h5>
            <h6>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an<br></br>
             unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type<br></br> 
             specimen book. It usually begins with:<br></br>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</h6>
          </div>

                          {/* table */}

          <div className="table">
            <div className="head">
              <h4>History</h4>
              <NavLink to='' className='trans'>See All</NavLink>
            </div>
            
          </div>
          <NavLink to='/blood_pressure' className='button'>Add To Record</NavLink>
        </div>
      )}


                          {/* blood-sugar-sec */}



      {selectedOption === "Blood Sugar" && (
        <div className="b-sugar">

                          {/* dates */}
          
          <div className="date">
            
          </div>

                          {/* diagram */}

          <div>
            
          </div>  
          
                          {/* reading-sec */}
                        
                          <div className="read">
            <h3>Recommended Reading</h3>
            <h5>How To Loss Sugar?</h5>
            <h6>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an<br></br>
             unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type<br></br> 
             specimen book. It usually begins with:<br></br>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</h6>
          </div>

                          {/* table */}

          <div className="table">
            <div className="head">
              <h4>History</h4>
              <NavLink to='' className='trans'>See All</NavLink>
            </div>
            
          </div>
          <NavLink to='/blood_sugar' className='button'>Add To Record</NavLink>

        </div>
      )}
    </Layout>
  );
};

export default Activity;

