import { Helmet } from "react-helmet-async";
import "./doctors.css";
import React from "react";
import doctors from "../images/doctors.png";
import doctors2 from "../images/doctors2.png";
import Layout from '../components/Layout';

const Doctors = ({ count, rating, color, onRating }) => {
  return (
    <Layout>
      <Helmet>
        <title>Doctors ♥</title>
        <meta name="description" content="Doctors" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>

      <div className="doctor-container">
        <section className="doctor-section">
          <div className="coat">
            <h1>Our doctors</h1>
          </div>
          <div className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1_6191)">
                <path
                  d="M11.7383 2C16.7063 2 20.7383 6.032 20.7383 11C20.7383 15.968 16.7063 20 11.7383 20C6.77028 20 2.73828 15.968 2.73828 11C2.73828 6.032 6.77028 2 11.7383 2ZM11.7383 18C15.6053 18 18.7383 14.867 18.7383 11C18.7383 7.132 15.6053 4 11.7383 4C7.87028 4 4.73828 7.132 4.73828 11C4.73828 14.867 7.87028 18 11.7383 18ZM20.2233 18.071L23.0523 20.899L21.6373 22.314L18.8093 19.485L20.2233 18.071Z"
                  fill="#1F1F1F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_6191">
                  <rect
                    width="25"
                    height="24"
                    fill="white"
                    transform="translate(0.738281)"
                  />
                </clipPath>
              </defs>
            </svg>
            <input type="text" placeholder="Search"></input>
          </div>
          </section>

          <div className="connect">
          <div className="right">
          <img className="img6" src={doctors} alt="doctors" />

            <div className="rot">

              <h2 className="zend">Dr: Mahmoud Ebrahim</h2>
              <h6 className="xo">Cardiologist</h6>
              <div className="bot">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.375 7.12766C3.375 4.28412 5.92109 2.02051 9 2.02051C12.0789 2.02051 14.625 4.28412 14.625 7.12766C14.625 8.73072 13.7121 10.7141 12.7122 12.4284C11.6972 14.1683 10.5283 15.7359 9.90146 16.5397C9.79803 16.674 9.66278 16.7832 9.50663 16.8587C9.34969 16.9346 9.17609 16.9741 9 16.9741C8.82391 16.9741 8.65031 16.9346 8.49337 16.8587C8.3372 16.7832 8.20194 16.674 8.0985 16.5397C7.47168 15.7356 6.30279 14.1674 5.28782 12.4272C4.28789 10.7128 3.375 8.72958 3.375 7.12766ZM9 3.08867C6.48907 3.08867 4.5 4.92346 4.5 7.12766C4.5 8.4298 5.27461 10.1997 6.27199 11.9097C7.25166 13.5894 8.38638 15.1133 9 15.9007C9.6136 15.1137 10.7483 13.5903 11.728 11.9108C12.7254 10.2011 13.5 8.43099 13.5 7.12766C13.5 4.92346 11.5109 3.08867 9 3.08867Z"
                    fill="#353535"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 6.29277C8.37868 6.29277 7.875 6.771 7.875 7.36093C7.875 7.95086 8.37868 8.42909 9 8.42909C9.62132 8.42909 10.125 7.95086 10.125 7.36093C10.125 6.771 9.62132 6.29277 9 6.29277ZM6.75 7.36093C6.75 6.18107 7.75736 5.22461 9 5.22461C10.2426 5.22461 11.25 6.18107 11.25 7.36093C11.25 8.54079 10.2426 9.49726 9 9.49726C7.75736 9.49726 6.75 8.54079 6.75 7.36093Z"
                    fill="#A4A2A2"
                  />
                </svg>
                <h6 className="quo">Cairo </h6>
              </div>

              <div className="got">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 4.53955C9.31066 4.53955 9.5625 4.77867 9.5625 5.07363V7.74404C9.5625 8.039 9.31066 8.27812 9 8.27812C8.68934 8.27812 8.4375 8.039 8.4375 7.74404V5.07363C8.4375 4.77867 8.68934 4.53955 9 4.53955Z"
                    fill="#353535"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 1.60205C9.46599 1.60205 9.84375 1.96073 9.84375 2.40317V2.93725C9.84375 3.3797 9.46599 3.73837 9 3.73837C8.53401 3.73837 8.15625 3.3797 8.15625 2.93725V2.40317C8.15625 1.96073 8.53401 1.60205 9 1.60205Z"
                    fill="#353535"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.62213 3.43923C3.95163 3.12638 4.48587 3.12638 4.81537 3.43923L5.23725 3.83979C5.56675 4.15265 5.56675 4.65989 5.23725 4.97275C4.90774 5.28561 4.37351 5.28561 4.044 4.97275L3.62213 4.57219C3.29262 4.25933 3.29262 3.75209 3.62213 3.43923Z"
                    fill="#353535"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 8.54521C8.68934 8.54521 8.4375 8.78433 8.4375 9.07929C8.4375 9.37426 8.68934 9.61337 9 9.61337C9.31066 9.61337 9.5625 9.37426 9.5625 9.07929C9.5625 8.78433 9.31066 8.54521 9 8.54521ZM7.3125 9.07929C7.3125 8.1944 8.06802 7.47705 9 7.47705C9.93198 7.47705 10.6875 8.1944 10.6875 9.07929C10.6875 9.96419 9.93198 10.6815 9 10.6815C8.06802 10.6815 7.3125 9.96419 7.3125 9.07929Z"
                    fill="#353535"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.2499 3.75052C6.35994 3.04629 7.66498 2.67041 9 2.67041C10.7902 2.67041 12.5071 3.34564 13.773 4.54755C15.0388 5.74947 15.75 7.37962 15.75 9.07938C15.75 10.347 15.3541 11.5861 14.6124 12.64C13.8707 13.694 12.8165 14.5154 11.5831 15.0005C10.3497 15.4856 8.99252 15.6125 7.68314 15.3652C6.37377 15.1179 5.17104 14.5075 4.22703 13.6112C3.28303 12.7149 2.64015 11.5729 2.3797 10.3297C2.11925 9.08649 2.25292 7.79786 2.76382 6.62677C3.27471 5.45569 4.13987 4.45474 5.2499 3.75052ZM9 3.73857C7.88748 3.73857 6.79995 4.05181 5.87492 4.63866C4.94989 5.22552 4.22892 6.05964 3.80318 7.03554C3.37744 8.01145 3.26604 9.08531 3.48309 10.1213C3.70013 11.1573 4.23586 12.109 5.02253 12.8559C5.8092 13.6028 6.81148 14.1115 7.90262 14.3176C8.99376 14.5236 10.1248 14.4179 11.1526 14.0136C12.1804 13.6094 13.0589 12.9249 13.677 12.0466C14.2951 11.1683 14.625 10.1357 14.625 9.07938C14.625 7.66291 14.0324 6.30446 12.9775 5.30286C11.9226 4.30126 10.4918 3.73857 9 3.73857Z"
                    fill="#353535"
                  />
                </svg>
                <h6 className="seou">12 pm : 3 pm</h6>
              </div>
              <div className="star">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_6391)">
                    <path
                      d="M8.1269 34.7469C7.2584 35.1924 6.2729 34.4116 6.4484 33.4149L8.3159 22.7724L0.38915 15.2214C-0.3511 14.5149 0.0336499 13.2234 1.0259 13.0839L12.0464 11.5179L16.9604 1.78215C17.4037 0.904648 18.6029 0.904648 19.0462 1.78215L23.9601 11.5179L34.9806 13.0839C35.9729 13.2234 36.3577 14.5149 35.6152 15.2214L27.6907 22.7724L29.5581 33.4149C29.7337 34.4116 28.7481 35.1924 27.8797 34.7469L17.9999 29.6709L8.12465 34.7469H8.1269Z"
                      fill="#FA8F21"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6391">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_6392)">
                    <path
                      d="M8.1269 34.7469C7.2584 35.1924 6.2729 34.4116 6.4484 33.4149L8.3159 22.7724L0.38915 15.2214C-0.3511 14.5149 0.0336499 13.2234 1.0259 13.0839L12.0464 11.5179L16.9604 1.78215C17.4037 0.904648 18.6029 0.904648 19.0462 1.78215L23.9601 11.5179L34.9806 13.0839C35.9729 13.2234 36.3577 14.5149 35.6152 15.2214L27.6907 22.7724L29.5581 33.4149C29.7337 34.4116 28.7481 35.1924 27.8797 34.7469L17.9999 29.6709L8.12465 34.7469H8.1269Z"
                      fill="#FA8F21"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6392">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_6393)">
                    <path
                      d="M8.1269 34.7469C7.2584 35.1924 6.2729 34.4116 6.4484 33.4149L8.3159 22.7724L0.38915 15.2214C-0.3511 14.5149 0.0336499 13.2234 1.0259 13.0839L12.0464 11.5179L16.9604 1.78215C17.4037 0.904648 18.6029 0.904648 19.0462 1.78215L23.9601 11.5179L34.9806 13.0839C35.9729 13.2234 36.3577 14.5149 35.6152 15.2214L27.6907 22.7724L29.5581 33.4149C29.7337 34.4116 28.7481 35.1924 27.8797 34.7469L17.9999 29.6709L8.12465 34.7469H8.1269Z"
                      fill="#FA8F21"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6393">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.0001 2.25C18.4874 2.25 18.9194 2.56379 19.07 3.02728L22.4736 13.5H33.7501C34.2431 13.5 34.6787 13.821 34.8247 14.292C34.9706 14.7629 34.7929 15.274 34.3863 15.5528L25.2444 21.8216L28.7691 32.2652C28.9257 32.729 28.7643 33.2408 28.3702 33.531C27.976 33.8212 27.4394 33.8232 27.0431 33.536L18.0001 26.9831L8.95708 33.536C8.56073 33.8232 8.02416 33.8212 7.62999 33.531C7.23581 33.2408 7.07451 32.729 7.23103 32.2652L10.7558 21.8216L1.61386 15.5528C1.20725 15.274 1.02955 14.7629 1.17551 14.292C1.32146 13.821 1.75705 13.5 2.25008 13.5H13.5265L16.9302 3.02728C17.0808 2.56379 17.5127 2.25 18.0001 2.25ZM18.0001 7.01476L15.4137 14.9727C15.2631 15.4362 14.8312 15.75 14.3438 15.75H5.88L12.7301 20.4472C13.1452 20.7319 13.3207 21.2578 13.1598 21.7348L10.4894 29.647L17.34 24.6828C17.7338 24.3974 18.2664 24.3974 18.6602 24.6828L25.5108 29.647L22.8404 21.7348C22.6794 21.2578 22.8549 20.7319 23.2701 20.4472L30.1202 15.75H21.6563C21.169 15.75 20.7371 15.4362 20.5864 14.9727L18.0001 7.01476Z"
                    fill="#FA8F21"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.0001 2.25C18.4874 2.25 18.9194 2.56379 19.07 3.02728L22.4736 13.5H33.7501C34.2431 13.5 34.6787 13.821 34.8247 14.292C34.9706 14.7629 34.7929 15.274 34.3863 15.5528L25.2444 21.8216L28.7691 32.2652C28.9257 32.729 28.7643 33.2408 28.3702 33.531C27.976 33.8212 27.4394 33.8232 27.0431 33.536L18.0001 26.9831L8.95708 33.536C8.56073 33.8232 8.02416 33.8212 7.62999 33.531C7.23581 33.2408 7.07451 32.729 7.23103 32.2652L10.7558 21.8216L1.61386 15.5528C1.20725 15.274 1.02955 14.7629 1.17551 14.292C1.32146 13.821 1.75705 13.5 2.25008 13.5H13.5265L16.9302 3.02728C17.0808 2.56379 17.5127 2.25 18.0001 2.25ZM18.0001 7.01476L15.4137 14.9727C15.2631 15.4362 14.8312 15.75 14.3438 15.75H5.88L12.7301 20.4472C13.1452 20.7319 13.3207 21.2578 13.1598 21.7348L10.4894 29.647L17.34 24.6828C17.7338 24.3974 18.2664 24.3974 18.6602 24.6828L25.5108 29.647L22.8404 21.7348C22.6794 21.2578 22.8549 20.7319 23.2701 20.4472L30.1202 15.75H21.6563C21.169 15.75 20.7371 15.4362 20.5864 14.9727L18.0001 7.01476Z"
                    fill="#FA8F21"
                  />
                </svg>
              </div>
            
            <input className="button" type="submit" value="Book Now" />
            </div>
          </div>

          <div className="left">
          <img className="img7" src={doctors2} alt="doctors2" />
          
            <div className="rot">

              <h2 className="zend">Dr: Mohammed Ahmed </h2>
              <h6 className="xo">Cardiologist</h6>
              <div className="bot">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.375 7.12766C3.375 4.28412 5.92109 2.02051 9 2.02051C12.0789 2.02051 14.625 4.28412 14.625 7.12766C14.625 8.73072 13.7121 10.7141 12.7122 12.4284C11.6972 14.1683 10.5283 15.7359 9.90146 16.5397C9.79803 16.674 9.66278 16.7832 9.50663 16.8587C9.34969 16.9346 9.17609 16.9741 9 16.9741C8.82391 16.9741 8.65031 16.9346 8.49337 16.8587C8.3372 16.7832 8.20194 16.674 8.0985 16.5397C7.47168 15.7356 6.30279 14.1674 5.28782 12.4272C4.28789 10.7128 3.375 8.72958 3.375 7.12766ZM9 3.08867C6.48907 3.08867 4.5 4.92346 4.5 7.12766C4.5 8.4298 5.27461 10.1997 6.27199 11.9097C7.25166 13.5894 8.38638 15.1133 9 15.9007C9.6136 15.1137 10.7483 13.5903 11.728 11.9108C12.7254 10.2011 13.5 8.43099 13.5 7.12766C13.5 4.92346 11.5109 3.08867 9 3.08867Z"
                    fill="#353535"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 6.29277C8.37868 6.29277 7.875 6.771 7.875 7.36093C7.875 7.95086 8.37868 8.42909 9 8.42909C9.62132 8.42909 10.125 7.95086 10.125 7.36093C10.125 6.771 9.62132 6.29277 9 6.29277ZM6.75 7.36093C6.75 6.18107 7.75736 5.22461 9 5.22461C10.2426 5.22461 11.25 6.18107 11.25 7.36093C11.25 8.54079 10.2426 9.49726 9 9.49726C7.75736 9.49726 6.75 8.54079 6.75 7.36093Z"
                    fill="#A4A2A2"
                  />
                </svg>
                <h6 className="quo">Cairo </h6>
              </div>

              <div className="got">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 4.53955C9.31066 4.53955 9.5625 4.77867 9.5625 5.07363V7.74404C9.5625 8.039 9.31066 8.27812 9 8.27812C8.68934 8.27812 8.4375 8.039 8.4375 7.74404V5.07363C8.4375 4.77867 8.68934 4.53955 9 4.53955Z"
                    fill="#353535"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 1.60205C9.46599 1.60205 9.84375 1.96073 9.84375 2.40317V2.93725C9.84375 3.3797 9.46599 3.73837 9 3.73837C8.53401 3.73837 8.15625 3.3797 8.15625 2.93725V2.40317C8.15625 1.96073 8.53401 1.60205 9 1.60205Z"
                    fill="#353535"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.62213 3.43923C3.95163 3.12638 4.48587 3.12638 4.81537 3.43923L5.23725 3.83979C5.56675 4.15265 5.56675 4.65989 5.23725 4.97275C4.90774 5.28561 4.37351 5.28561 4.044 4.97275L3.62213 4.57219C3.29262 4.25933 3.29262 3.75209 3.62213 3.43923Z"
                    fill="#353535"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 8.54521C8.68934 8.54521 8.4375 8.78433 8.4375 9.07929C8.4375 9.37426 8.68934 9.61337 9 9.61337C9.31066 9.61337 9.5625 9.37426 9.5625 9.07929C9.5625 8.78433 9.31066 8.54521 9 8.54521ZM7.3125 9.07929C7.3125 8.1944 8.06802 7.47705 9 7.47705C9.93198 7.47705 10.6875 8.1944 10.6875 9.07929C10.6875 9.96419 9.93198 10.6815 9 10.6815C8.06802 10.6815 7.3125 9.96419 7.3125 9.07929Z"
                    fill="#353535"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.2499 3.75052C6.35994 3.04629 7.66498 2.67041 9 2.67041C10.7902 2.67041 12.5071 3.34564 13.773 4.54755C15.0388 5.74947 15.75 7.37962 15.75 9.07938C15.75 10.347 15.3541 11.5861 14.6124 12.64C13.8707 13.694 12.8165 14.5154 11.5831 15.0005C10.3497 15.4856 8.99252 15.6125 7.68314 15.3652C6.37377 15.1179 5.17104 14.5075 4.22703 13.6112C3.28303 12.7149 2.64015 11.5729 2.3797 10.3297C2.11925 9.08649 2.25292 7.79786 2.76382 6.62677C3.27471 5.45569 4.13987 4.45474 5.2499 3.75052ZM9 3.73857C7.88748 3.73857 6.79995 4.05181 5.87492 4.63866C4.94989 5.22552 4.22892 6.05964 3.80318 7.03554C3.37744 8.01145 3.26604 9.08531 3.48309 10.1213C3.70013 11.1573 4.23586 12.109 5.02253 12.8559C5.8092 13.6028 6.81148 14.1115 7.90262 14.3176C8.99376 14.5236 10.1248 14.4179 11.1526 14.0136C12.1804 13.6094 13.0589 12.9249 13.677 12.0466C14.2951 11.1683 14.625 10.1357 14.625 9.07938C14.625 7.66291 14.0324 6.30446 12.9775 5.30286C11.9226 4.30126 10.4918 3.73857 9 3.73857Z"
                    fill="#353535"
                  />
                </svg>
                <h6 className="seou">12 pm : 3 pm</h6>
              </div>
              <div className="star">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_6391)">
                    <path
                      d="M8.1269 34.7469C7.2584 35.1924 6.2729 34.4116 6.4484 33.4149L8.3159 22.7724L0.38915 15.2214C-0.3511 14.5149 0.0336499 13.2234 1.0259 13.0839L12.0464 11.5179L16.9604 1.78215C17.4037 0.904648 18.6029 0.904648 19.0462 1.78215L23.9601 11.5179L34.9806 13.0839C35.9729 13.2234 36.3577 14.5149 35.6152 15.2214L27.6907 22.7724L29.5581 33.4149C29.7337 34.4116 28.7481 35.1924 27.8797 34.7469L17.9999 29.6709L8.12465 34.7469H8.1269Z"
                      fill="#FA8F21"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6391">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_6392)">
                    <path
                      d="M8.1269 34.7469C7.2584 35.1924 6.2729 34.4116 6.4484 33.4149L8.3159 22.7724L0.38915 15.2214C-0.3511 14.5149 0.0336499 13.2234 1.0259 13.0839L12.0464 11.5179L16.9604 1.78215C17.4037 0.904648 18.6029 0.904648 19.0462 1.78215L23.9601 11.5179L34.9806 13.0839C35.9729 13.2234 36.3577 14.5149 35.6152 15.2214L27.6907 22.7724L29.5581 33.4149C29.7337 34.4116 28.7481 35.1924 27.8797 34.7469L17.9999 29.6709L8.12465 34.7469H8.1269Z"
                      fill="#FA8F21"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6392">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_6393)">
                    <path
                      d="M8.1269 34.7469C7.2584 35.1924 6.2729 34.4116 6.4484 33.4149L8.3159 22.7724L0.38915 15.2214C-0.3511 14.5149 0.0336499 13.2234 1.0259 13.0839L12.0464 11.5179L16.9604 1.78215C17.4037 0.904648 18.6029 0.904648 19.0462 1.78215L23.9601 11.5179L34.9806 13.0839C35.9729 13.2234 36.3577 14.5149 35.6152 15.2214L27.6907 22.7724L29.5581 33.4149C29.7337 34.4116 28.7481 35.1924 27.8797 34.7469L17.9999 29.6709L8.12465 34.7469H8.1269Z"
                      fill="#FA8F21"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6393">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.0001 2.25C18.4874 2.25 18.9194 2.56379 19.07 3.02728L22.4736 13.5H33.7501C34.2431 13.5 34.6787 13.821 34.8247 14.292C34.9706 14.7629 34.7929 15.274 34.3863 15.5528L25.2444 21.8216L28.7691 32.2652C28.9257 32.729 28.7643 33.2408 28.3702 33.531C27.976 33.8212 27.4394 33.8232 27.0431 33.536L18.0001 26.9831L8.95708 33.536C8.56073 33.8232 8.02416 33.8212 7.62999 33.531C7.23581 33.2408 7.07451 32.729 7.23103 32.2652L10.7558 21.8216L1.61386 15.5528C1.20725 15.274 1.02955 14.7629 1.17551 14.292C1.32146 13.821 1.75705 13.5 2.25008 13.5H13.5265L16.9302 3.02728C17.0808 2.56379 17.5127 2.25 18.0001 2.25ZM18.0001 7.01476L15.4137 14.9727C15.2631 15.4362 14.8312 15.75 14.3438 15.75H5.88L12.7301 20.4472C13.1452 20.7319 13.3207 21.2578 13.1598 21.7348L10.4894 29.647L17.34 24.6828C17.7338 24.3974 18.2664 24.3974 18.6602 24.6828L25.5108 29.647L22.8404 21.7348C22.6794 21.2578 22.8549 20.7319 23.2701 20.4472L30.1202 15.75H21.6563C21.169 15.75 20.7371 15.4362 20.5864 14.9727L18.0001 7.01476Z"
                    fill="#FA8F21"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.0001 2.25C18.4874 2.25 18.9194 2.56379 19.07 3.02728L22.4736 13.5H33.7501C34.2431 13.5 34.6787 13.821 34.8247 14.292C34.9706 14.7629 34.7929 15.274 34.3863 15.5528L25.2444 21.8216L28.7691 32.2652C28.9257 32.729 28.7643 33.2408 28.3702 33.531C27.976 33.8212 27.4394 33.8232 27.0431 33.536L18.0001 26.9831L8.95708 33.536C8.56073 33.8232 8.02416 33.8212 7.62999 33.531C7.23581 33.2408 7.07451 32.729 7.23103 32.2652L10.7558 21.8216L1.61386 15.5528C1.20725 15.274 1.02955 14.7629 1.17551 14.292C1.32146 13.821 1.75705 13.5 2.25008 13.5H13.5265L16.9302 3.02728C17.0808 2.56379 17.5127 2.25 18.0001 2.25ZM18.0001 7.01476L15.4137 14.9727C15.2631 15.4362 14.8312 15.75 14.3438 15.75H5.88L12.7301 20.4472C13.1452 20.7319 13.3207 21.2578 13.1598 21.7348L10.4894 29.647L17.34 24.6828C17.7338 24.3974 18.2664 24.3974 18.6602 24.6828L25.5108 29.647L22.8404 21.7348C22.6794 21.2578 22.8549 20.7319 23.2701 20.4472L30.1202 15.75H21.6563C21.169 15.75 20.7371 15.4362 20.5864 14.9727L18.0001 7.01476Z"
                    fill="#FA8F21"
                  />
                </svg>
              </div>
            
            <input className="button" type="submit" value="Book Now" />
            </div>
          </div>
          
          
          </div>
        {/* <section className="about-us-section2"></section>

        <section className="about-us-section3"></section> */}
      </div>
    </Layout>
  );
};

export default Doctors;
