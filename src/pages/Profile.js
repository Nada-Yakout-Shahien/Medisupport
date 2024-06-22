import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import "./Profile.css";
import Layout from '../components/Layout';
import user_photo from "../images/user-photo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCircleCheck, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPopupS, setShowPopupS] = useState(false);
  const [showPopupD, setShowPopupD] = useState(false);

//image
const handleFileChange = (event) => {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('image', file);

  const reader = new FileReader();
  reader.onload = () => {
    setImageSrc(reader.result);
  };
  reader.readAsDataURL(file);
};
  const openFileBrowser = () => {
  document.getElementById('fileInput').click();
};

  //userData
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const token = localStorage.getItem('accessToken');  
        const response = await axios.get('http://127.0.0.1:8000/api/auth/user/user-profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUser(response.data.data);
        console.log('User Profile:', response.data.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
       
    fetchUserProfile();
  },[]);

  //updateuserData
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      const userDataForUpdate = {
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password,
        confirm_password: user.confirm_password,
        
      };
      
      await axios.post('http://127.0.0.1:8000/api/auth/user/update-profile', userDataForUpdate, axiosConfig);
      console.log('Update profile Data Successfully');
      console.log('Update Profile Response:', user);

      setShowPopupS(true);

    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }
   
  //deleteuserData
  const deleteData = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete('http://127.0.0.1:8000/api/auth/user/delete-account',axiosConfig);
      alert('Data has been deleted');
      window.location.href = '/home';
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  
  return (
    <Layout>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Profile" />
      </Helmet>

      <div className='profile-sec'>
                                     {/* image */}

            {imageSrc ? (
              <img src={imageSrc} alt="Uploaded" />
              ) : (
              <img src={user_photo} alt='user_Avatar' />
              )}
              <div className='edit'>
                <button onClick={openFileBrowser}>
                  <FontAwesomeIcon className='upload' icon={faEdit} />
                </button>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
                                          {/* user-name */}

        {user && (
          <h4>{`${user.first_name || ''} ${user.last_name || ''}`}</h4>
        )}
      </div>

                                      {/* inputs-feilds */}

      <div className='info-sec'>
        <h4>Edit Info</h4>
        <form onSubmit={handleSubmit} >
          <div className='inputs'>
            <div className='name'>
              <div className='f-name'>
                <label>First Name</label>
                <input
                  placeholder='First Name'
                  type='text'
                  value={user ? user.first_name : ''}
                  onChange={e => setUser({ ...user, first_name: e.target.value })}
                />
              </div>
              <div className='l-name'>
                <label>Last Name</label>
                <input
                  placeholder='Last Name'
                  type='text'
                  value={user ? user.last_name : ''}
                  onChange={e => setUser({ ...user, last_name: e.target.value })}
                />
              </div>
            </div>
            <div className='pass'>
              <label>Password</label>
              <input
                placeholder='Your Password'
                type={showPassword ? "text" : "password"}
                value={user ? user.password : ''}
                onChange={e => setUser({ ...user, password: e.target.value })}
              />
              <button onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <div className='confirm'>
              <label>Confirm Password</label>
              <input
                placeholder='Confirm Password'
                type={showPassword ? "text" : "password"}
              />
              <button onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          </form>
                                      {/* buttons */}

        <div className='save'>
        <button type='submit' onClick={() => setShowPopupS(true)}>Save</button>
          {showPopupS && (
            <div className='popup-s'>
              <FontAwesomeIcon className='check' icon={faCircleCheck} style={{ color: '#4A963D' }} />
              <NavLink to='/home' className='btn'>
                Home Page
              </NavLink>
            </div>
          )}
        </div>

        <div className='delete'>
          <button onClick={() => setShowPopupD(true)}>
            <FontAwesomeIcon className='warning' icon={faExclamationTriangle} style={{ color: '#fcfcfc' }} />
            Delete Account
          </button>
          {showPopupD && (
            <div className='popup-d'>
              <div className='message'>
                <FontAwesomeIcon className='icon' icon={faExclamationTriangle} style={{ color: '#697077' }} />
                <div className='close'>
                  <button onClick={() => setShowPopupD(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M13.3138 11.9L16.8488 8.364C16.9443 8.27176 17.0205 8.16141 17.0729 8.03941C17.1253 7.9174 17.1529 7.78618 17.1541 7.6534C17.1552 7.52062 17.1299 7.38894 17.0796 7.26605C17.0294 7.14315 16.9551 7.0315 16.8612 6.93761C16.7673 6.84371 16.6557 6.76946 16.5328 6.71918C16.4099 6.6689 16.2782 6.6436 16.1454 6.64475C16.0126 6.64591 15.8814 6.67349 15.7594 6.7259C15.6374 6.77831 15.5271 6.85449 15.4348 6.95L11.8988 10.485L8.36382 6.95C8.27157 6.85449 8.16123 6.77831 8.03922 6.7259C7.91722 6.67349 7.786 6.64591 7.65322 6.64475C7.52044 6.6436 7.38876 6.6689 7.26587 6.71918C7.14297 6.76946 7.03132 6.84371 6.93742 6.93761C6.84353 7.0315 6.76928 7.14315 6.719 7.26605C6.66872 7.38894 6.64342 7.52062 6.64457 7.6534C6.64572 7.78618 6.67331 7.9174 6.72572 8.03941C6.77813 8.16141 6.85431 8.27176 6.94982 8.364L10.4848 11.899L6.94982 15.435C6.85431 15.5273 6.77813 15.6376 6.72572 15.7596C6.67331 15.8816 6.64572 16.0128 6.64457 16.1456C6.64342 16.2784 6.66872 16.4101 6.719 16.533C6.76928 16.6559 6.84353 16.7675 6.93742 16.8614C7.03132 16.9553 7.14297 17.0295 7.26587 17.0798C7.38876 17.1301 7.52044 17.1554 7.65322 17.1543C7.786 17.1531 7.91722 17.1255 8.03922 17.0731C8.16123 17.0207 8.27157 16.9445 8.36382 16.849L11.8988 13.314L15.4348 16.849C15.5271 16.9445 15.6374 17.0207 15.7594 17.0731C15.8814 17.1255 16.0126 17.1531 16.1454 17.1543C16.2782 17.1554 16.4099 17.1301 16.5328 17.0798C16.6557 17.0295 16.7673 16.9553 16.8612 16.8614C16.9551 16.7675 17.0294 16.6559 17.0796 16.533C17.1299 16.4101 17.1552 16.2784 17.1541 16.1456C17.1529 16.0128 17.1253 15.8816 17.0729 15.7596C17.0205 15.6376 16.9443 15.5273 16.8488 15.435L13.3138 11.899V11.9Z" fill="#21272A"/>
                    </svg>
                  </button>
                </div>
                <h2>Delete Account</h2>
                <p>Aliquam vivamus elementum dictum<br />suspendisse enim metus.</p>
                <button className='button'onClick={deleteData}>Delete</button>
              </div>
            </div>
          )}
        </div>
          
      </div>
    </Layout>
  );
};

export default Profile;
