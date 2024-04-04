import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

//registerUser
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/user/register`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error("Unable to register user. Please try again.");
  }
};

//loginUser
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/user/login`, loginData);
    return response.data;
  } catch (error) {
    throw new Error(
      "Unable to login. Please check your credentials and try again."
    );
  }
};

// logoutUser
export const logoutUser = async (token) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/user/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Unable to logout. Please try again.");
  }
};
// socialLogin
export const socialLogin = async (socialData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/user/social-login`,
      socialData
    );
    return response.data;
  } catch (error) {
    throw new Error("Unable to login using social account. Please try again.");
  }
};

//getUserProfile
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/user/user-profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch user profile. Please try again.");
  }
};
