import React ,{useState} from 'react';
import { Helmet } from "react-helmet-async";
import {NavLink} from "react-router-dom";
import "./Profile.css";
import Layout from '../components/Layout';
import user_photo from "../images/user-photo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash,faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPopupS, setShowPopupS] = useState(false);
  const [showPopupD, setShowPopupD] = useState(false);
  
  return (
    <Layout>
      <Helmet>
        <title>Profile ♥</title>
        <meta name="description" content="Profile" />
      </Helmet>

                          {/* section1 */}
        
      <div className='profile-sec'>
        <img src={user_photo} alt='user_photo'/>
        <div className='edit'>
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="50" viewBox="0 0 45 40" fill="none">
            <path d="M31.4304 26.9518L33.9304 24.4517C34.3211 24.0611 35.0008 24.3345 35.0008 24.897V36.2566C35.0008 38.327 33.321 40.0067 31.2507 40.0067H3.75008C1.67972 40.0067 0 38.327 0 36.2566V8.75605C0 6.68569 1.67972 5.00597 3.75008 5.00597H25.1177C25.6724 5.00597 25.9537 5.67786 25.5631 6.0763L23.063 8.57636C22.9458 8.69355 22.7896 8.75605 22.6177 8.75605H3.75008V36.2566H31.2507V27.3893C31.2507 27.2252 31.3132 27.0689 31.4304 26.9518ZM43.665 11.1858L23.1489 31.7019L16.0863 32.4831C14.0394 32.7097 12.2971 30.9831 12.5237 28.9205L13.305 21.8579L33.821 1.34183C35.6101 -0.447275 38.5008 -0.447275 40.2821 1.34183L43.6572 4.7169C45.4463 6.506 45.4463 9.4045 43.665 11.1858ZM35.9461 13.5999L31.4069 9.06074L16.891 23.5845L16.3207 28.6862L21.4223 28.1158L35.9461 13.5999ZM41.0087 7.37321L37.6336 3.99813C37.3133 3.67781 36.7899 3.67781 36.4774 3.99813L34.0632 6.41225L38.6024 10.9514L41.0165 8.53729C41.329 8.20916 41.329 7.69353 41.0087 7.37321Z" 
            fill="#BE0202"/>
          </svg>
        </div>
        <h4>User Name</h4>
      </div>
        
                          {/* section2 */}
      <div className='info-sec'>
        <h4>Edit Info</h4>
        <div className='inputs'>
          <div className='f-name'>
            <label>First Name</label>
            <input placeholder='FName' type='text'/>
          </div>

          <div className='l-name'>
            <label>Last Name</label>
            <input placeholder='LName' type='text' />
          </div>

          <div className='pass'>
            <label>Password</label>
            <input placeholder='Your Password' type={showPassword ? "text" : "password"}/>
              <button onClick={() => setShowPassword(!showPassword)}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
          </div>

          <div className='confirm'>
            <label>Confirm Password</label>
            <input placeholder='Your Password' type={showPassword ? "text" : "password"}/> 
            <button onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        
        <div className='save'>
          <button onClick={()=>setShowPopupS(true)}>Save</button>
          {showPopupS && (<div className='popup-s'>
            <FontAwesomeIcon className='check' icon={faCircleCheck} style={{color: "#4A963D",}}/>
              <NavLink to='/home' className='btn'>
                Home Page
              </NavLink>
          </div>
          )}
        </div>
        
        <div className='delete'>
          <button onClick={() => setShowPopupD(true)}>
            <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: "#fcfcfc" }}/>
            Delete Account
          </button>
          {showPopupD && (<div className='popup-d'>
            <div className='message'>
                <FontAwesomeIcon className='icon' icon={faExclamationTriangle} style={{color: "#697077",}}/>
                <div className='close'>
                  <button onClick={() => setShowPopupD(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M13.3138 11.9L16.8488 8.364C16.9443 8.27176 17.0205 8.16141 17.0729 8.03941C17.1253 7.9174 17.1529 7.78618 17.1541 7.6534C17.1552 7.52062 17.1299 7.38894 17.0796 7.26605C17.0294 7.14315 16.9551 7.0315 16.8612 6.93761C16.7673 6.84371 16.6557 6.76946 16.5328 6.71918C16.4099 6.6689 16.2782 6.6436 16.1454 6.64475C16.0126 6.64591 15.8814 6.67349 15.7594 6.7259C15.6374 6.77831 15.5271 6.85449 15.4348 6.95L11.8988 10.485L8.36382 6.95C8.27157 6.85449 8.16123 6.77831 8.03922 6.7259C7.91722 6.67349 7.786 6.64591 7.65322 6.64475C7.52044 6.6436 7.38876 6.6689 7.26587 6.71918C7.14297 6.76946 7.03132 6.84371 6.93742 6.93761C6.84353 7.0315 6.76928 7.14315 6.719 7.26605C6.66872 7.38894 6.64342 7.52062 6.64457 7.6534C6.64572 7.78618 6.67331 7.9174 6.72572 8.03941C6.77813 8.16141 6.85431 8.27176 6.94982 8.364L10.4848 11.899L6.94982 15.435C6.85431 15.5273 6.77813 15.6376 6.72572 15.7596C6.67331 15.8816 6.64572 16.0128 6.64457 16.1456C6.64342 16.2784 6.66872 16.4101 6.719 16.533C6.76928 16.6559 6.84353 16.7675 6.93742 16.8614C7.03132 16.9553 7.14297 17.0295 7.26587 17.0798C7.38876 17.1301 7.52044 17.1554 7.65322 17.1543C7.786 17.1531 7.91722 17.1255 8.03922 17.0731C8.16123 17.0207 8.27157 16.9445 8.36382 16.849L11.8988 13.314L15.4348 16.849C15.5271 16.9445 15.6374 17.0207 15.7594 17.0731C15.8814 17.1255 16.0126 17.1531 16.1454 17.1543C16.2782 17.1554 16.4099 17.1301 16.5328 17.0798C16.6557 17.0295 16.7673 16.9553 16.8612 16.8614C16.9551 16.7675 17.0294 16.6559 17.0796 16.533C17.1299 16.4101 17.1552 16.2784 17.1541 16.1456C17.1529 16.0128 17.1253 15.8816 17.0729 15.7596C17.0205 15.6376 16.9443 15.5273 16.8488 15.435L13.3138 11.899V11.9Z" fill="#21272A"/>
                    </svg>
                  </button>
                </div>
                <h2>Delete Account</h2>
                <p>Aliquam vivamus elementum dictum<br></br>suspendisse enim metus.</p>
                <NavLink to="/home" className='button'>
                  Delete
                </NavLink>
            </div>
          </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;