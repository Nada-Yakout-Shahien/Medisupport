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
export const bookAppointment = async (
  accessToken,
  dateId,
  doctorId,
  timeId
) => {
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
    return response.data;
  } catch (error) {
    handleRequestError(error);
    throw error;
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
// Function to delete a booking
export const deleteBookings = async (accessToken, id) => {
  try {
    const response = await sendRequest(
      "DELETE",
      `/auth/user/delete-bookings/${id}`,
      null,
      accessToken
    );
    return response.data;
  } catch (error) {
    handleRequestError(error);
    throw error;
  }
};

// Function to store blood pressure data
export const storeBloodPressure = async (systolic, diastolic, accessToken) => {
  try {
    const data = { systolic, diastolic };
    return await sendRequest(
      "POST",
      "/user/blood-pressure/store",
      data,
      accessToken
    );
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to get all systolic measurements
export const getAllSystolicMeasurementsupper = async (accessToken) => {
  try {
    return await sendRequest(
      "GET",
      "/user/blood-pressure/get-all-systolic",
      null,
      accessToken
    );
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to get all diastolic measurements
export const getAllDiastolicMeasurementslower = async (accessToken) => {
  try {
    return await sendRequest(
      "GET",
      "/user/blood-pressure/get-all-diastolic",
      null,
      accessToken
    );
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to get latest blood pressure measurement
export const getLatestBloodPressureMeasurement = async (accessToken) => {
  try {
    return await sendRequest(
      "GET",
      "/user/blood-pressure/get-latest-measurement",
      null,
      accessToken
    );
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to get latest three blood pressure measurements
export const getLatestThreeBloodPressureMeasurements = async (accessToken) => {
  try {
    return await sendRequest(
      "GET",
      "/user/blood-pressure/get-latest-three-measurements",
      null,
      accessToken
    );
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to get all blood pressure measurements
export const getAllBloodPressureMeasurements = async (accessToken) => {
  try {
    return await sendRequest(
      "GET",
      "/user/blood-pressure/get-all-measurements",
      null,
      accessToken
    );
  } catch (error) {
    handleRequestError(error);
  }
};















//chaaaaaaaaaaaaaaaaaaaaaaaaaatting
// Function to get user contacts
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

// Function to authenticate user for chat
export const userChatAuth = async (socketId, channelName, accessToken) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/auth",
      {
        socket_id: socketId,
        channel_name: channelName,
      },
      accessToken
    );

    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to send a message
export const userSendMessage = async (
  accessToken,
  id,
  message,
  temporaryMsgId
) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/sendMessage",
      {
        id,
        message,
        temporary_msg_id: temporaryMsgId,
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
    throw error;
  }
};

// Function to fetch user messages
export const fetchUserMessages = async (accessToken, id) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/fetchMessages",
      {
        id,
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to download a file
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
// Function to get user's shared photos
export const getUserSharedPhotos = async (accessToken, userId) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/shared",
      {
        user_id: userId,
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to delete a conversation
export const userDeleteConversation = async (accessToken, id) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/deleteConversation",
      {
        id,
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to fetch doctor information by ID
export const userFetchDoctorByID = async (accessToken, id) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/idInfo",
      {
        id,
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

// Function to mark a message as seen
export const userMakeMessageSeen = async (accessToken, id) => {
  try {
    const response = await sendRequest(
      "POST",
      "/user/chat/makeSeen",
      {
        id,
      },
      accessToken
    );
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};






//shared
// Function to add a new article by a doctor
export const addNewArticle = async (accessToken, title, body, image) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('body', body);
  formData.append('image', image);

  try {
    const response = await axios.post(
      `${BASE_URL}/articles`,
      formData,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/vnd.api+json',
        }
      }
    );
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
// Function to update an existing article by a doctor
export const updateArticle = async (accessToken, articleId, title, body, image) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('body', body);
  formData.append('image', image);

  try {
    const response = await axios.post(
      `${BASE_URL}/articles/${articleId}`,
      formData,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/vnd.api+json',
        }
      }
    );
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
// Function to get all articles by a user/admin
export const getAllArticles = async (accessToken,page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/articles?page=${page}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
    );
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
// Function to get all articles by a doctor
export const getDoctorArticles = async (accessToken) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/doctor/articles`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
    );
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
// Function to get the latest article by a doctor
export const getLatestArticle = async (accessToken) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/doctor/latest-article`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
    );
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
// Function to get a specific article by a user/doctor/admin
export const getSpecificArticle = async (accessToken, articleId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/articles/${articleId}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
    );
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
// Function to delete an article by a doctor/admin
export const deleteArticle = async (accessToken, articleId) => {
  try {
    await axios.delete(
      `${BASE_URL}/articles/${articleId}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
    );
    return true; 
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
