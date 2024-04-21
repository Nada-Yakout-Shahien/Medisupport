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


// send request with stored token  for data
export const sendAuthenticatedRequest = async (
  url,
  method,
  data,
  accessToken
) => {
  try {
    const response = await axios({
      method: method,
      url: `${BASE_URL}${url}`,
      data: data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to send request with token");
  }
};

//loginUser
export const loginUser = async (userloginData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/user/login`,
      userloginData
    );

    if (response.status === 200) {
      const { accessToken } = response.data;
      return accessToken;
    } else {
      throw new Error("Failed to login user. Please check your credentials and try again.");
    }
  } catch (error) {
    handleRequestError(error); 
  }
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
      JSON.stringify(userData),
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
