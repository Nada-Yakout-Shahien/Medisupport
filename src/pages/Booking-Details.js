import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSwipeable } from "react-swipeable";
import "./Booking-Details.css";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import chat from "../images/chat-lines.png";
import video from "../images/Video.png";
import del from "../images/del.png";
import {
  getAllofflineBookings,
  getAllonlineBookings,
  deleteBooking,
  getAccessTokenFromLocalStorage,
} from "../components/apiService";

const BookingDetails = () => {
  const [activeSection, setActiveSection] = useState("onlineDoctors");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState({
    id: null,
    type: null,
  });
  const lineStyle = {
    left: activeSection === "onlineDoctors" ? "0%" : "50%",
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveSection("offlineDoctors"),
    onSwipedRight: () => setActiveSection("onlineDoctors"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const handleSelectDoctorForCancellation = (doctorId, type, bookingId) => {
    setSelectedDoctor({ id: doctorId, type, bookingId });
    setIsOverlayVisible(true);
  };
  
  const [onlineBookings, setOnlineBookings] = useState([]);

  useEffect(() => {
    const fetchonlineBookings = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const Bookingonline = await getAllonlineBookings(accessToken);
        console.log("Booking details:", Bookingonline);

        const formattedRecords = Bookingonline.data.map((Bookingonline) => ({
          name: Bookingonline.doctor_name,
          username: Bookingonline.username,
          status: Bookingonline.status,
        }));
        setOnlineBookings(formattedRecords);
      } catch (error) {
        console.error(
          "An unexpected error occurred while fetching online bookings:",
          error
        );
      }
    };

    fetchonlineBookings();
  }, []);

  const [offlineBookings, setOfflineBookings] = useState([]);

  useEffect(() => {
    const fetchofflineBookings = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const Booking = await getAllofflineBookings(accessToken);
        console.log("User Booking details:", Booking);

        const formattedRecords = Booking.data.data.map((Booking, index) => ({
          bookingId: Booking.id,
          first_name: Booking.first_name,
          last_name: Booking.last_name,
          clinic_location: Booking.clinic_location,
          time: Booking.time,
        }));
        
        setOfflineBookings(formattedRecords);
      } catch (error) {
        console.error(
          "An unexpected error occurred while fetching offline bookings:",
          error
        );
      }
    };

    fetchofflineBookings();
  }, []);
// Function to cancel booking
const cancelBooking = async () => {
  try {
    const accessToken = getAccessTokenFromLocalStorage();
    if (!accessToken) {
      console.error("Access token is missing");
      return;
    }
    await deleteBooking(accessToken, selectedDoctor.id);
    if (selectedDoctor.type === "online") {
      setOnlineBookings((prev) =>
        prev.filter((booking) => booking.username !== selectedDoctor.username)
      );
    } else {
      setOfflineBookings((prev) =>
        prev.filter((booking) => booking.bookingId !== selectedDoctor.bookingId)
      );
    }
    setIsOverlayVisible(false);
    setSelectedDoctor({ bookingId: null, type: null });
  } catch (error) {
    console.error("Error cancelling booking:", error);
  }
};
  return (
    <Layout>
      <Helmet>
        <title>Booking Details♥</title>
        <meta name="description" content="Booking Details" />
      </Helmet>
      <div className="details">
        <h3>Details of Booking</h3>
        <div className="navigation" {...handlers}>
          <div className="status">
            <button
              className={activeSection === "onlineDoctors" ? "active" : ""}
              onClick={() => setActiveSection("onlineDoctors")}
            >
              Online Doctors
            </button>
            <button
              className={activeSection === "offlineDoctors" ? "active" : ""}
              onClick={() => setActiveSection("offlineDoctors")}
            >
              Offline Doctors
            </button>
          </div>
          <div className="line">
            <div className="lineafter" style={lineStyle}></div>
          </div>
        </div>

        {activeSection === "onlineDoctors" && (
          <div id="onlineDoctors">
            <div className="doctor-info">
              {onlineBookings.map((bookings,index) => (
                <div key={index} className="data">
                  <div className="nmark">
                    <p className="name">{bookings.name}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <circle cx="7.5" cy="7.5" r="7.5" fill="#75F94C" />
                    </svg>
                  </div>
                  <p className="onpara">
                    Now you can make video call with the doctor
                  </p>
                  <div
                    className={`status ${
                      bookings.status === "Accept" ? "Accept" : "Waiting"
                    }`}
                  >
                    {bookings.status}
                  </div>
                  <div className="video">
                    <img src={video} alt="" className="cam" />
                    <NavLink to="/videocall" className="vi">
                      Call the doctor
                    </NavLink>
                  </div>{" "}
                  <div
                    className="cancel"
                    onClick={() =>
                      handleSelectDoctorForCancellation(bookings.username, "online", bookings.bookingId)
                    }
                  >
                    <img src={del} alt="" />
                    <button to="" className="canc">
                      Cancel Booking
                    </button>
                  </div>{" "}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "offlineDoctors" && (
          <div id="offlineDoctors">
            <div className="doctor-info">
              {offlineBookings.map((booking,index) => (
                <div key={index} className="data">
                  <p className="name">
                    {booking.first_name} {booking.last_name}
                  </p>
                  <div className="chil">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.375 7.12766C3.375 4.28412 5.92109 2.02051 9 2.02051C12.0789 2.02051 14.625 4.28412 14.625 7.12766C14.625 8.73072 13.7121 10.7141 12.7122 12.4284C11.6972 14.1683 10.5283 15.7359 9.90146 16.5397C9.79803 16.674 9.66278 16.7832 9.50663 16.8587C9.34969 16.9346 9.17609 16.9741 9 16.9741C8.82391 16.9741 8.65031 16.9346 8.49337 16.8587C8.3372 16.7832 8.20194 16.674 8.0985 16.5397C7.47168 15.7356 6.30279 14.1674 5.28782 12.4272C4.28789 10.7128 3.375 8.72958 3.375 7.12766ZM9 3.08867C6.48907 3.08867 4.5 4.92346 4.5 7.12766C4.5 8.4298 5.27461 10.1997 6.27199 11.9097C7.25166 13.5894 8.38638 15.1133 9 15.9007C9.6136 15.1137 10.7483 13.5903 11.728 11.9108C12.7254 10.2011 13.5 8.43099 13.5 7.12766C13.5 4.92346 11.5109 3.08867 9 3.08867Z"
                        fill="#353535"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 6.29277C8.37868 6.29277 7.875 6.771 7.875 7.36093C7.875 7.95086 8.37868 8.42909 9 8.42909C9.62132 8.42909 10.125 7.95086 10.125 7.36093C10.125 6.771 9.62132 6.29277 9 6.29277ZM6.75 7.36093C6.75 6.18107 7.75736 5.22461 9 5.22461C10.2426 5.22461 11.25 6.18107 11.25 7.36093C11.25 8.54079 10.2426 9.49726 9 9.49726C7.75736 9.49726 6.75 8.54079 6.75 7.36093Z"
                        fill="#A4A2A2"
                      />
                    </svg>
                    <p className="country">{booking.clinic_location}</p>
                  </div>
                  <div className="chil">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 4.53955C9.31066 4.53955 9.5625 4.77867 9.5625 5.07363V7.74404C9.5625 8.039 9.31066 8.27812 9 8.27812C8.68934 8.27812 8.4375 8.039 8.4375 7.74404V5.07363C8.4375 4.77867 8.68934 4.53955 9 4.53955Z"
                        fill="#353535"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 1.60205C9.46599 1.60205 9.84375 1.96073 9.84375 2.40317V2.93725C9.84375 3.3797 9.46599 3.73837 9 3.73837C8.53401 3.73837 8.15625 3.3797 8.15625 2.93725V2.40317C8.15625 1.96073 8.53401 1.60205 9 1.60205Z"
                        fill="#353535"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.62213 3.43923C3.95163 3.12638 4.48587 3.12638 4.81537 3.43923L5.23725 3.83979C5.56675 4.15265 5.56675 4.65989 5.23725 4.97275C4.90774 5.28561 4.37351 5.28561 4.044 4.97275L3.62213 4.57219C3.29262 4.25933 3.29262 3.75209 3.62213 3.43923Z"
                        fill="#353535"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 8.54521C8.68934 8.54521 8.4375 8.78433 8.4375 9.07929C8.4375 9.37426 8.68934 9.61337 9 9.61337C9.31066 9.61337 9.5625 9.37426 9.5625 9.07929C9.5625 8.78433 9.31066 8.54521 9 8.54521ZM7.3125 9.07929C7.3125 8.1944 8.06802 7.47705 9 7.47705C9.93198 7.47705 10.6875 8.1944 10.6875 9.07929C10.6875 9.96419 9.93198 10.6815 9 10.6815C8.06802 10.6815 7.3125 9.96419 7.3125 9.07929Z"
                        fill="#353535"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.2499 3.75052C6.35994 3.04629 7.66498 2.67041 9 2.67041C10.7902 2.67041 12.5071 3.34564 13.773 4.54755C15.0388 5.74947 15.75 7.37962 15.75 9.07938C15.75 10.347 15.3541 11.5861 14.6124 12.64C13.8707 13.694 12.8165 14.5154 11.5831 15.0005C10.3497 15.4856 8.99252 15.6125 7.68314 15.3652C6.37377 15.1179 5.17104 14.5075 4.22703 13.6112C3.28303 12.7149 2.64015 11.5729 2.3797 10.3297C2.11925 9.08649 2.25292 7.79786 2.76382 6.62677C3.27471 5.45569 4.13987 4.45474 5.2499 3.75052ZM9 3.73857C7.88748 3.73857 6.79995 4.05181 5.87492 4.63866C4.94989 5.22552 4.22892 6.05964 3.80318 7.03554C3.37744 8.01145 3.26604 9.08531 3.48309 10.1213C3.70013 11.1573 4.23586 12.109 5.02253 12.8559C5.8092 13.6028 6.81148 14.1115 7.90262 14.3176C8.99376 14.5236 10.1248 14.4179 11.1526 14.0136C12.1804 13.6094 13.0589 12.9249 13.677 12.0466C14.2951 11.1683 14.625 10.1357 14.625 9.07938C14.625 7.66291 14.0324 6.30446 12.9775 5.30286C11.9226 4.30126 10.4918 3.73857 9 3.73857Z"
                        fill="#353535"
                      />
                    </svg>
                    <p className="time">{booking.time}</p>
                  </div>{" "}
                  <NavLink to="/Chat">
                    <div className="chat">
                      <img src={chat} alt="" />
                      <p className="ch">Chatting Now</p>
                    </div>{" "}
                  </NavLink>
                  <div
                    className="cancel"
                    onClick={() =>
                      handleSelectDoctorForCancellation(booking.id, "offline")
                    }
                  >
                    <img src={del} alt="delete" />
                    <button to="" className="canc">
                      Cancel Booking
                    </button>
                  </div>{" "}
                </div>
              ))}
            </div>
          </div>
        )}
        {isOverlayVisible && (
          <div className="overlay">
            <div className="conf">
              <div className="icon-canc">
                <div className="trian">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <path
                      d="M4.93366 1.53762L7.16733 5.25795C7.48833 5.79229 7.33066 6.49529 6.81499 6.82795C6.64192 6.94002 6.44018 6.99974 6.23399 6.99995H1.76633C1.15933 6.99995 0.666992 6.48995 0.666992 5.86029C0.666992 5.64729 0.724659 5.43895 0.832992 5.25795L3.06699 1.53762C3.38766 1.00329 4.06566 0.839619 4.58133 1.17229C4.72399 1.26429 4.84466 1.38929 4.93366 1.53762ZM4.19366 1.81729C4.15285 1.79104 4.10715 1.77333 4.05931 1.76525C4.01147 1.75716 3.96248 1.75885 3.91531 1.77022C3.86814 1.78159 3.82377 1.80241 3.78487 1.83141C3.74597 1.86041 3.71336 1.89699 3.68899 1.93895L1.45533 5.65995C1.41904 5.72059 1.39992 5.78995 1.39999 5.86062C1.39999 6.07062 1.56399 6.24062 1.76666 6.24062H6.23366C6.30233 6.24062 6.36933 6.22062 6.42733 6.18329C6.51055 6.12799 6.56924 6.04272 6.59116 5.94523C6.61308 5.84774 6.59654 5.74555 6.54499 5.65995L4.31133 1.93895C4.28203 1.88996 4.24189 1.84834 4.19399 1.81729H4.19366ZM4.00033 5.66662C3.91192 5.66662 3.82714 5.6315 3.76462 5.56899C3.70211 5.50648 3.66699 5.42169 3.66699 5.33329C3.66699 5.24488 3.70211 5.1601 3.76462 5.09758C3.82714 5.03507 3.91192 4.99995 4.00033 4.99995C4.08873 4.99995 4.17352 5.03507 4.23603 5.09758C4.29854 5.1601 4.33366 5.24488 4.33366 5.33329C4.33366 5.42169 4.29854 5.50648 4.23603 5.56899C4.17352 5.6315 4.08873 5.66662 4.00033 5.66662ZM4.00033 2.66662C4.08873 2.66662 4.17352 2.70174 4.23603 2.76425C4.29854 2.82676 4.33366 2.91155 4.33366 2.99995V4.33329C4.33366 4.42169 4.29854 4.50648 4.23603 4.56899C4.17352 4.6315 4.08873 4.66662 4.00033 4.66662C3.91192 4.66662 3.82714 4.6315 3.76462 4.56899C3.70211 4.50648 3.66699 4.42169 3.66699 4.33329V2.99995C3.66699 2.91155 3.70211 2.82676 3.76462 2.76425C3.82714 2.70174 3.91192 2.66662 4.00033 2.66662Z"
                      fill="#697077"
                    />
                  </svg>
                </div>
                <div
                  className="xclose"
                  onClick={() => setIsOverlayVisible(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.3138 11.8998L16.8488 8.36382C16.9443 8.27157 17.0205 8.16123 17.0729 8.03922C17.1253 7.91722 17.1529 7.786 17.1541 7.65322C17.1552 7.52044 17.1299 7.38876 17.0796 7.26587C17.0294 7.14297 16.9551 7.03132 16.8612 6.93742C16.7673 6.84353 16.6557 6.76928 16.5328 6.719C16.4099 6.66872 16.2782 6.64342 16.1454 6.64457C16.0126 6.64572 15.8814 6.67331 15.7594 6.72572C15.6374 6.77813 15.5271 6.85431 15.4348 6.94982L11.8988 10.4848L8.36382 6.94982C8.27157 6.85431 8.16123 6.77813 8.03922 6.72572C7.91722 6.67331 7.786 6.64572 7.65322 6.64457C7.52044 6.64342 7.38876 6.66872 7.26587 6.719C7.14297 6.76928 7.03132 6.84353 6.93742 6.93742C6.84353 7.03132 6.76928 7.14297 6.719 7.26587C6.66872 7.38876 6.64342 7.52044 6.64457 7.65322C6.64572 7.786 6.67331 7.91722 6.72572 8.03922C6.77813 8.16123 6.85431 8.27157 6.94982 8.36382L10.4848 11.8988L6.94982 15.4348C6.85431 15.5271 6.77813 15.6374 6.72572 15.7594C6.67331 15.8814 6.64572 16.0126 6.64457 16.1454C6.64342 16.2782 6.66872 16.4099 6.719 16.5328C6.76928 16.6557 6.84353 16.7673 6.93742 16.8612C7.03132 16.9551 7.14297 17.0294 7.26587 17.0796C7.38876 17.1299 7.52044 17.1552 7.65322 17.1541C7.786 17.1529 7.91722 17.1253 8.03922 17.0729C8.16123 17.0205 8.27157 16.9443 8.36382 16.8488L11.8988 13.3138L15.4348 16.8488C15.5271 16.9443 15.6374 17.0205 15.7594 17.0729C15.8814 17.1253 16.0126 17.1529 16.1454 17.1541C16.2782 17.1552 16.4099 17.1299 16.5328 17.0796C16.6557 17.0294 16.7673 16.9551 16.8612 16.8612C16.9551 16.7673 17.0294 16.6557 17.0796 16.5328C17.1299 16.4099 17.1552 16.2782 17.1541 16.1454C17.1529 16.0126 17.1253 15.8814 17.0729 15.7594C17.0205 15.6374 16.9443 15.5271 16.8488 15.4348L13.3138 11.8988V11.8998Z"
                      fill="#21272A"
                    />
                  </svg>
                </div>
              </div>
              <h3>Cancel Booking</h3>
              <p>Aliquam vivamus elementum dictum suspendisse enim metus.</p>
              <button to="" className="cancel-book" onClick={cancelBooking}>
                Cancel
              </button>{" "}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingDetails;

