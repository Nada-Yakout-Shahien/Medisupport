import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout';
import { Input } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const Booking_Offline = () => {
  const [doc, setDoc] = useState(null);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [showPopupR, setShowPopupR] = useState(false);
  const [showPopupB, setShowPopupB] = useState(false);
  const [errorRating, setErrorRating] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [times, setTimes] = useState([]);

  

//date
  const handleDateSelection = (date) => {
    setSelectedDate(date);
};

//fetch doctor data
  useEffect(() => {
    async function fetchDoctorProfile() {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://127.0.0.1:8000/api/user/booking/get-doctor-details?id=30009', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setDoc(response.data.data);
        console.log('Doctor Data:', response.data.data);
        console.log('Doctor Avatar URL:', response.data.data.Avatar); // Print the URL to check it
      } catch (error) {
        console.error('Error fetching Doctor Data:', error);
      }
    }
    fetchDoctorProfile();
  }, []);

//time
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };
  useEffect(() => {
    async function fetchtimes() {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://127.0.0.1:8000/api/user/booking/get-times?id=1', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setTimes(response.data.data);
        console.log('Times:', response.data.data);
      } catch (error) {
        console.error('Error fetching times:', error);
      }
    }
    fetchtimes();
  }, []);


//rating
  const handleStarClick = (currentRating) => {
    setRating(currentRating);
    setHover(null);
    setShowPopupR(true);
  };

  const handleRating = async (e) => {
    e.preventDefault();
    if (!rating) {
      setErrorRating('Please select a rating before submitting.');
      return;
    }

    try {
      const token = localStorage.getItem('accessToken');
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post('http://127.0.0.1:8000/api/auth/user/ratings', { rating }, axiosConfig);
      console.log('Rating submitted:', response.data);
      setShowPopupR(true);
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  //book
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      await axios.post('http://127.0.0.1:8000/api/user/booking/appointment', axiosConfig);
      console.log('Appiontment booked Successfully');
     
      setShowPopupB(true);

    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>Booking ♥</title>
        <meta name="description" content="Booking_Offline" />
      </Helmet>

      <div className='head'>
        <h4>Booking</h4>
      </div>

      {doc && (
        <div className='card'>
          {/* image */}
          <div className='d-img'>
          {doc && <img src={doc.avatar} alt="Doctor Avatar" />}
          </div>

          {/* name */}
          <div className="d-name">
            <p>{`Dr: ${doc.first_name} ${doc.last_name}`}</p>
            <p className='def'>({doc.specialization})</p>
          </div>

          {/* tele */}
          <div className='d-tele'>
            <p>{doc.phone}</p>
          </div>

          {/* location */}
          <div className="location">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path fillRule="evenodd"
                clipRule="evenodd"
                d="M3.375 7.12766C3.375 4.28412 5.92109 2.02051 9 2.02051C12.0789 2.02051 14.625 4.28412 14.625 7.12766C14.625 8.73072 13.7121 10.7141 12.7122 12.4284C11.6972 14.1683 10.5283 15.7359 9.90146 16.5397C9.79803 16.674 9.66278 16.7832 9.50663 16.8587C9.34969 16.9346 9.17609 16.9741 9 16.9741C8.82391 16.9741 8.65031 16.9346 8.49337 16.8587C8.3372 16.7832 8.20194 16.674 8.0985 16.5397C7.47168 15.7356 6.30279 14.1674 5.28782 12.4272C4.28789 10.7128 3.375 8.72958 3.375 7.12766ZM9 3.08867C6.48907 3.08867 4.5 4.92346 4.5 7.12766C4.5 8.4298 5.27461 10.1997 6.27199 11.9097C7.25166 13.5894 8.38638 15.1133 9 15.9007C9.6136 15.1137 10.7483 13.5903 11.728 11.9108C12.7254 10.2011 13.5 8.43099 13.5 7.12766C13.5 4.92346 11.5109 3.08867 9 3.08867Z"
                fill="#353535"
              />
              <path fillRule="evenodd"
                clipRule="evenodd"
                d="M9 6.29277C8.37868 6.29277 7.875 6.771 7.875 7.36093C7.875 7.95086 8.37868 8.42909 9 8.42909C9.62132 8.42909 10.125 7.95086 10.125 7.36093C10.125 6.771 9.62132 6.29277 9 6.29277ZM6.75 7.36093C6.75 6.18107 7.75736 5.22461 9 5.22461C10.2426 5.22461 11.25 6.18107 11.25 7.36093C11.25 8.54079 10.2426 9.49726 9 9.49726C7.75736 9.49726 6.75 8.54079 6.75 7.36093Z"
                fill="#A4A2A2"
              />
            </svg>
            <p>{doc.clinic_location}</p>
          </div>

          {/* rate-doctor */}
          <div className="stars">
            <div className="rating">
              <p>Rating:</p>
              {doc.user_rating ? (
                <p>{doc.user_rating} / 5.0</p>
              ) : (
                <p>No rating yet</p>
              )}
            </div>
          </div>

          {/* about-doctor */}
          <div className='info'>
            <p>About :</p>
            <p className='d-about'>{doc?.bio}</p>
          </div>
          
          {/* rate-user */}
          <div className='rate'>
            <p>Rate </p>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;

              return (
                <label key={index}>
                  <Input
                    type="radio"
                    name="Rating"
                    value={currentRating}
                    onChange={() => handleStarClick(currentRating)}
                  />
                  <FaStar
                    className='star'
                    size={33}
                    color={currentRating <= (hover || rating) ? '#FA8F21' : '#f8df95'}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
            {errorRating && <p className="error-message">{errorRating}</p>}
            {showPopupR && (
              <div className='popup-r'>
                <p>Thank You For Your Rating</p>
                <NavLink to='/home' className='btn' onClick={handleRating}>
                  Home Page
                </NavLink>
              </div>
            )}
          </div>

          {/* Booking a Date */}
          <div className='B-Date'>
            <p>Book a Date :</p>
            {/*{doc && (
              <div className='dates'>
                {doc.dates.map((date) => (
                  <label key={date.id} className={`l1 ${selectedDate === date.date ? 'selected' : ''}`}>
                    <input
                      type='radio'
                      onClick={() => handleDateSelection(date.date)}
                      checked={selectedDate === date.date}
                    /> 
                    {date.date}
                  </label>
                ))}
              </div>
            )}*/}
          </div>

          {/* Booking a Time */}
          <div className='B-Time'>
            <p>Select a Time :</p>
            <div className='Time'>
              {/*{times.map((time, index) => (
                <label key={time.id} className={`${selectedTime === time.time ? 'selected' : ''}`}>
                  <input type='radio' onClick={() => handleTimeSelection(time.time)} /> {time.time}
                </label>
              ))}*/}
            </div>
          </div>

          {/* Booking Button */}
          <div className='book'>
            <button onClick={handleSubmit}>Book Now</button>
            {showPopupB && (
              <div className='popup-b'>
                <FontAwesomeIcon className='check' icon={faCircleCheck} style={{ color: "#4A963D" }} />
                <NavLink to='/home' className='btn'>
                  Home Page
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Booking_Offline;
