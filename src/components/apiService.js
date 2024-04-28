import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

//handleRequestError
export const handleRequestError = (error) => {
  let errorMessage = "";
  if (error.response) {
    errorMessage = `Error: ${error.response.status} - ${error.response.data.message}`;
  } else if (error.request) {
    errorMessage = "Network Error: No response received";
  } else {
    errorMessage = `Error: ${error.message}`;
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
export const getAllofflineBookings = async (accessToken, page) => {
  try {
    const response = await sendRequest(
      "GET",
      `/user/booking/get-all-booking?page=${page}`, 
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to delete a booking
export const deleteBooking = async (accessToken, id) => {
  try {
      const response = await sendRequest(
          "DELETE",
          `/user/booking/delete-booking?id=${id}`,
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
export const getAllonlineBookings = async (accessToken, page) => {
  try {
    const response = await sendRequest(
      "GET",
      `/auth/user/all-bookings?page=${page}`,
      null,
      accessToken
    );
    console.log(response);
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
//userChatAuth
export const userChatAuth = async (accessToken) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/auth",
      {
        socket_id: "9013.50262712",
        channel_name: "private-chatify"
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
//userSendMessage
export const userSendMessage = async (accessToken, id, message, temporaryMsgId) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/sendMessage",
      {
        id,
        message,
        temporaryMsgId
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

//chaaaaaaaaaaaaaaaaaaaaaaaaaatting
//getUserContacts
export const getUserContacts = async (accessToken) => {
  try {
    const response = await sendRequest(
      "GET",
      "/user/chat/getUserContacts",
      null,
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

//fetchUserMessages
export const fetchUserMessages = async (accessToken, id) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/fetchMessages",
      {
        id
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
//userDownloadFile
export const userDownloadFile = async () => {
  try {
    const response = await sendRequest(
      "GET",
      "/user/chat/download/file-name-here"
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
//userMakeMessageSeen
export const userMakeMessageSeen = async (accessToken, id) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/makeSeen",
      {
        id
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
//getUserSharedPhotos
export const getUserSharedPhotos = async (accessToken, userId) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/shared",
      {
        user_id: userId
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
//userDeleteConversation
export const userDeleteConversation = async (accessToken, id) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/deleteConversation",
      {
        id
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
//userFetchDoctorByID
export const userFetchDoctorByID = async (accessToken, id) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/idInfo",
      {
        id
      },
      accessToken
    );
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
