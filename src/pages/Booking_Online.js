import React,{useState} from 'react';
import { Helmet } from "react-helmet-async";
import {NavLink} from "react-router-dom";
import doctors1 from"../images/doctors.png";
import { Input } from '@mui/material';
import {FaStar} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import Layout from '../components/Layout';
import "./Booking_Online.css";

const Booking_Online = () => {

//Rating
  const [rating,setRating] = useState (null);
  const [hover,setHover] = useState (null);
  const [showPopupR, setShowPopupR] = useState(false);

  const handleStarClick = (currentRating) => {
    setRating(currentRating); 
    setHover(null); 
    setShowPopupR(true);
  };

  //Completed message
  const [showPopupB, setShowPopupB] = useState(false);

  
  return (

    <Layout>

      <Helmet>
        <title>Booking ♥</title>
        <meta name="description" content="Booking_Online" />
      </Helmet>

      <div className='head'>
        <p>Booking</p>
      </div>

                        {/* card-booking */}

      <div className='card'>

                    {/* image */}

        <div className='d-img'>
          <img  src={doctors1} alt="doctors"/>
        </div>

                    {/* name */}

        <div className="d-name">
          <p>Dr: Mahmoud Ebrahim</p>
          <p className='def'>(Cardiologist)</p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="20"
              height="20" 
              viewBox="0 0 20 20" 
              fill="none">
              <circle cx="10" cy="10" r="10" fill="#75F94C"/>
            </svg>
          </p>
        </div>

                    {/* tele */}

        <div className='d-tele'>
          <p>01012345678</p>
        </div>

                    {/* location */}

        <div className="location">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="25" 
            height="19" 
            viewBox="0 0 18 19" 
            fill="none"
          >
            <path fill-rule="evenodd" 
              clip-rule="evenodd" 
              d="M3.375 7.12766C3.375 4.28412 5.92109 2.02051 9 2.02051C12.0789 2.02051 14.625 4.28412 14.625 7.12766C14.625 8.73072 13.7121 10.7141 12.7122 12.4284C11.6972 14.1683 10.5283 15.7359 9.90146 16.5397C9.79803 16.674 9.66278 16.7832 9.50663 16.8587C9.34969 16.9346 9.17609 16.9741 9 16.9741C8.82391 16.9741 8.65031 16.9346 8.49337 16.8587C8.3372 16.7832 8.20194 16.674 8.0985 16.5397C7.47168 15.7356 6.30279 14.1674 5.28782 12.4272C4.28789 10.7128 3.375 8.72958 3.375 7.12766ZM9 3.08867C6.48907 3.08867 4.5 4.92346 4.5 7.12766C4.5 8.4298 5.27461 10.1997 6.27199 11.9097C7.25166 13.5894 8.38638 15.1133 9 15.9007C9.6136 15.1137 10.7483 13.5903 11.728 11.9108C12.7254 10.2011 13.5 8.43099 13.5 7.12766C13.5 4.92346 11.5109 3.08867 9 3.08867Z"
              fill="#353535"
            />
            <path fill-rule="evenodd"
              clip-rule="evenodd" 
              d="M9 6.29277C8.37868 6.29277 7.875 6.771 7.875 7.36093C7.875 7.95086 8.37868 8.42909 9 8.42909C9.62132 8.42909 10.125 7.95086 10.125 7.36093C10.125 6.771 9.62132 6.29277 9 6.29277ZM6.75 7.36093C6.75 6.18107 7.75736 5.22461 9 5.22461C10.2426 5.22461 11.25 6.18107 11.25 7.36093C11.25 8.54079 10.2426 9.49726 9 9.49726C7.75736 9.49726 6.75 8.54079 6.75 7.36093Z"
              fill="#A4A2A2"
            />
          </svg>
          <p>Cairo </p>
        </div>

                        {/* rate-doctor */}

        <div className="stars">
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="26"
            height="36" 
            viewBox="0 0 36 36" 
            fill="none"
          >
            <g clip-path="url(#clip0_1_6391)">
              <path d="M8.1269 34.7469C7.2584 35.1924 6.2729 34.4116 6.4484 33.4149L8.3159 22.7724L0.38915 15.2214C-0.3511 14.5149 0.0336499 13.2234 1.0259 13.0839L12.0464 11.5179L16.9604 1.78215C17.4037 0.904648 18.6029 0.904648 19.0462 1.78215L23.9601 11.5179L34.9806 13.0839C35.9729 13.2234 36.3577 14.5149 35.6152 15.2214L27.6907 22.7724L29.5581 33.4149C29.7337 34.4116 28.7481 35.1924 27.8797 34.7469L17.9999 29.6709L8.12465 34.7469H8.1269Z" 
                fill="#FA8F21"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_6391">
                <rect width="36" height="36" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="26" 
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <g clip-path="url(#clip0_1_6392)">
              <path d="M8.1269 34.7469C7.2584 35.1924 6.2729 34.4116 6.4484 33.4149L8.3159 22.7724L0.38915 15.2214C-0.3511 14.5149 0.0336499 13.2234 1.0259 13.0839L12.0464 11.5179L16.9604 1.78215C17.4037 0.904648 18.6029 0.904648 19.0462 1.78215L23.9601 11.5179L34.9806 13.0839C35.9729 13.2234 36.3577 14.5149 35.6152 15.2214L27.6907 22.7724L29.5581 33.4149C29.7337 34.4116 28.7481 35.1924 27.8797 34.7469L17.9999 29.6709L8.12465 34.7469H8.1269Z" 
                fill="#FA8F21"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_6392">
                <rect width="36" height="36" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="26"
            height="36" 
            viewBox="0 0 36 36" 
            fill="none"
          >
            <g clip-path="url(#clip0_1_6393)">
              <path d="M8.1269 34.7469C7.2584 35.1924 6.2729 34.4116 6.4484 33.4149L8.3159 22.7724L0.38915 15.2214C-0.3511 14.5149 0.0336499 13.2234 1.0259 13.0839L12.0464 11.5179L16.9604 1.78215C17.4037 0.904648 18.6029 0.904648 19.0462 1.78215L23.9601 11.5179L34.9806 13.0839C35.9729 13.2234 36.3577 14.5149 35.6152 15.2214L27.6907 22.7724L29.5581 33.4149C29.7337 34.4116 28.7481 35.1924 27.8797 34.7469L17.9999 29.6709L8.12465 34.7469H8.1269Z" 
                fill="#FA8F21"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_6393">
                <rect width="36" height="36" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="26"
            height="36" 
            viewBox="0 0 36 36" 
            fill="none"
          >
            <path fill-rule="evenodd" 
              clip-rule="evenodd" 
              d="M18.0001 2.25C18.4874 2.25 18.9194 2.56379 19.07 3.02728L22.4736 13.5H33.7501C34.2431 13.5 34.6787 13.821 34.8247 14.292C34.9706 14.7629 34.7929 15.274 34.3863 15.5528L25.2444 21.8216L28.7691 32.2652C28.9257 32.729 28.7643 33.2408 28.3702 33.531C27.976 33.8212 27.4394 33.8232 27.0431 33.536L18.0001 26.9831L8.95708 33.536C8.56073 33.8232 8.02416 33.8212 7.62999 33.531C7.23581 33.2408 7.07451 32.729 7.23103 32.2652L10.7558 21.8216L1.61386 15.5528C1.20725 15.274 1.02955 14.7629 1.17551 14.292C1.32146 13.821 1.75705 13.5 2.25008 13.5H13.5265L16.9302 3.02728C17.0808 2.56379 17.5127 2.25 18.0001 2.25ZM18.0001 7.01476L15.4137 14.9727C15.2631 15.4362 14.8312 15.75 14.3438 15.75H5.88L12.7301 20.4472C13.1452 20.7319 13.3207 21.2578 13.1598 21.7348L10.4894 29.647L17.34 24.6828C17.7338 24.3974 18.2664 24.3974 18.6602 24.6828L25.5108 29.647L22.8404 21.7348C22.6794 21.2578 22.8549 20.7319 23.2701 20.4472L30.1202 15.75H21.6563C21.169 15.75 20.7371 15.4362 20.5864 14.9727L18.0001 7.01476Z"
              fill="#FA8F21"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="26"
            height="36" 
            viewBox="0 0 36 36"
            fill="none"
          >
            <path fill-rule="evenodd"
              clip-rule="evenodd" 
              d="M18.0001 2.25C18.4874 2.25 18.9194 2.56379 19.07 3.02728L22.4736 13.5H33.7501C34.2431 13.5 34.6787 13.821 34.8247 14.292C34.9706 14.7629 34.7929 15.274 34.3863 15.5528L25.2444 21.8216L28.7691 32.2652C28.9257 32.729 28.7643 33.2408 28.3702 33.531C27.976 33.8212 27.4394 33.8232 27.0431 33.536L18.0001 26.9831L8.95708 33.536C8.56073 33.8232 8.02416 33.8212 7.62999 33.531C7.23581 33.2408 7.07451 32.729 7.23103 32.2652L10.7558 21.8216L1.61386 15.5528C1.20725 15.274 1.02955 14.7629 1.17551 14.292C1.32146 13.821 1.75705 13.5 2.25008 13.5H13.5265L16.9302 3.02728C17.0808 2.56379 17.5127 2.25 18.0001 2.25ZM18.0001 7.01476L15.4137 14.9727C15.2631 15.4362 14.8312 15.75 14.3438 15.75H5.88L12.7301 20.4472C13.1452 20.7319 13.3207 21.2578 13.1598 21.7348L10.4894 29.647L17.34 24.6828C17.7338 24.3974 18.2664 24.3974 18.6602 24.6828L25.5108 29.647L22.8404 21.7348C22.6794 21.2578 22.8549 20.7319 23.2701 20.4472L30.1202 15.75H21.6563C21.169 15.75 20.7371 15.4362 20.5864 14.9727L18.0001 7.01476Z" 
              fill="#FA8F21"
              />
          </svg>
        </div>

                        {/* about-doctor */}

        <div className='info'>
          <p>About :<p className='d-about'>Lorem Ipsum is simply dummy text <br></br>
              of the printing and typesetting industry.<br></br>
              Lorem Ipsum has been th</p></p>
        </div>

                      {/* rate-user */}

        <div className='rate'>
          <p>Rate </p>
          {[...Array(5)].map((star , index )  => {
            const currentRating = index + 1 ;

            return (
              <label>
                <Input 
                  type="radio"
                 name="Rating"
                  value={currentRating}
                  onClick={() => handleStarClick(currentRating)}  
                >
                </Input>
                  
                <FaStar
                  className='star'
                  size={34}
                  color={currentRating <= (hover || rating) ? '#FA8F21' : '#f8df95'}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => handleStarClick(setShowPopupR(true))}
                ></FaStar>
              </label>
            );
          })}
          {showPopupR && (
            <div className='popup-r'>
              <p>Thank You For Your Rating</p>
              <NavLink to='/home' className='btn'>
                Home Page
              </NavLink>
            </div>
          )}
        </div>

                                    {/* Button book */}

        <div className='book'>
          <button onClick={()=>setShowPopupB(true)}>Book Now</button>
          {showPopupB && (<div className='popup-b'>
            <FontAwesomeIcon className='check' icon={faCircleCheck} style={{color: "#4A963D",}}/>
              <NavLink to='/Booking' className='btn'>
                Booking Done
              </NavLink>
          </div>
          )}
        </div>
        
      </div>
    </Layout>
  );
};

export default Booking_Online;