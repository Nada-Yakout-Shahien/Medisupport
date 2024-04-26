import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

//handleRequestError
export const handleRequestError = (error) => {
  let errorMessage = "";
  if (error.response) {
    errorMessage = `Error: ${error.response.status} - ${error.response.data.message}`;
    alert(errorMessage);
    throw error;
  } else if (error.request) {
    errorMessage = "Network Error: No response received";
    alert(errorMessage);
  } else {
    errorMessage = `Error: ${error.message}`;
    alert(errorMessage);
  }
  throw new Error(errorMessage);
};

// send request with stored token for data
export const sendRequest = async (method, url, data, accessToken) => {
  try {
    const response = await axios({
      method: method,
      url: `${BASE_URL}${url}`,
      data: data,
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    });
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// loginUser
export const loginUser = async (userloginData, setAccessToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/user/login`,
      userloginData
    );
    console.log("Response data:", response.data);
    const accessToken = response.data.access_token;
    console.log("Access Token:", accessToken);
    setAccessToken(accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error logging in:", error);
    handleRequestError(error);
  }
};
//saveTokenToLocalStorage
export const saveTokenToLocalStorage = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};
//getAccessTokenFromLocalStorage
export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem("accessToken");
};

//sendContactMessage
export const sendContactMessage = async (contactData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/contact`,
      JSON.stringify(contactData),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

//registerUser
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/user/register`,
      userData
    );
    return response.data.accessToken;
  } catch (error) {
    handleRequestError(error);
  }
};

export const storeBloodSugarLevel = async (accessToken, level, statusId) => {
  try {
    const response = await sendRequest(
      "POST",
      `/user/blood-sugar/store?level=${level}&blood_sugar_statuses_id=${statusId}`,
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

export const getAllBloodSugarRecords = async (accessToken, page) => {
  try {
    const response = await sendRequest(
      "GET",
      `/user/blood-sugar/get-all-records?page=${page}`, 
      null,
      accessToken
    );
    if (response && response.data && response.data.Records) {
      return response;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    handleRequestError(error);
    throw error; 
  }
};



export const getLastThreeBloodSugarRecords = async (accessToken) => {
  try {
    const response = await sendRequest(
      "GET",
      "/user/blood-sugar/get-last-three-records",
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

export const getLastSevenBloodSugarRecords = async (accessToken) => {
  try {
    const response = await sendRequest(
      "GET",
      "/user/blood-sugar/get-last-seven-records",
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

export const getLastBloodSugarRecord = async (accessToken) => {
  try {
    const response = await sendRequest(
      "GET",
      "/user/blood-sugar/get-last-record",
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

export const getRecommendedBloodSugarAdvice = async (accessToken) => {
  try {
    const response = await sendRequest(
      "GET",
      "/user/blood-sugar/get-recommended-advice",
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

export const getAllBloodSugarStatuses = async (accessToken) => {
  try {
    const response = await sendRequest(
      "GET",
      "/user/blood-sugar/get-all-status",
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
//bloodsugr
export const bloodSugar = async (userstatusData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/blood-sugar/store?level=89&blood_sugar_statuses_id=1`,
      JSON.stringify(userstatusData),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
//getDoctorDetails
export const getDoctorDetails = async (accessToken, doctorId) => {
  try {
    const response = await sendRequest(
      "GET",
      `/user/booking/get-doctor-details?id=${doctorId}`,
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
//getTimes
export const getTimes = async (accessToken, doctorId) => {
  try {
    const response = await sendRequest(
      "GET",
      `/user/booking/get-times?id=${doctorId}`,
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
//bookAppointment
export const bookAppointment = async (accessToken, dateId, doctorId, timeId) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/booking/appointment",
      { date_id: dateId, doctor_id: doctorId, time_id: timeId },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
// Function to get all bookings
export const getAllofflineBookings = async (accessToken) => {
  try {
    const response = await sendRequest(
      "GET",
      "/user/booking/get-all-booking",
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
// Function to delete a booking
export const deleteBooking = async (accessToken, bookingId) => {
  try {
    const response = await sendRequest(
      "DELETE",
      `/user/booking/${bookingId}`,
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

// Online bookings request
export const onlineBookings = async (doctorId, accessToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/user/online-bookings`,
      { doctor_id: doctorId },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    return response.data;
  } catch (error) {
    handleRequestError(error); 
  }
};

// All bookings request
export const getAllonlineBookings = async (accessToken) => {
  try {
    const response = await sendRequest(
      "GET",
      "/auth/user/all-bookings",
      null,
      accessToken
    );
    console.log(response);
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};






























































































//loginWithGoogle
export const loginWithGoogle = async (provider, accessProviderToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/user/social-login`,
      JSON.stringify({ provider, accessProviderToken }),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Unable to login with Google. Please try again.");
  }
};

//loginWithFacebook
export const loginWithFacebook = async (provider, accessProviderToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/user/social-login`,
      JSON.stringify({ provider, accessProviderToken }),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Unable to login with Facebook. Please try again.");
  }
};
