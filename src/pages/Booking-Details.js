import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSwipeable } from 'react-swipeable';
import './Booking-Details.css';
import Layout from '../components/Layout';

const BookingDetails = () => {
  const [activeSection, setActiveSection] = useState('onlineDoctors');

  const lineStyle = {
    left: activeSection === 'onlineDoctors' ? '0%' : '50%',
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveSection('offlineDoctors'), 
    onSwipedRight: () => setActiveSection('onlineDoctors'), 
    preventDefaultTouchmoveEvent: true, 
    trackMouse: true,
  });

  return (
    <Layout>
      <Helmet>
        <title>Booking Details♥</title>
        <meta name="description" content="Booking Details" />
      </Helmet>
      <div className="details">
        <h3>Details of Booking</h3>
        <div className="navigation" {...handlers}> {}
          <div className="status">
            <button
              className={activeSection === 'onlineDoctors' ? 'active' : ''}
              onClick={() => setActiveSection('onlineDoctors')}
            >
              Online Doctors
            </button>
            <button
              className={activeSection === 'offlineDoctors' ? 'active' : ''}
              onClick={() => setActiveSection('offlineDoctors')}
            >
              Offline Doctors
            </button>
          </div>
          <div className="line">
            <div className="lineafter" style={lineStyle}></div>
          </div>
        </div>
        {activeSection === 'onlineDoctors' && (
          <div id="onlineDoctors">
            <h2>Online Doctors Content</h2>
          </div>
        )}
        {activeSection === 'offlineDoctors' && (
          <div id="offlineDoctors">
            <h2>Offline Doctors Content</h2>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingDetails;
