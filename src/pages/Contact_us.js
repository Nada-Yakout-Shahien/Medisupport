import { Helmet } from "react-helmet-async";
import "./Contact_us.css";
import React, { useState } from "react";
import pic_contact from "../images/pic_contact.png";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import { sendContactMessage } from "../components/apiService";

const Contactus = () => {
  //after-click-btn
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const contactData = {
        username: formData.get("firstName") + " " + formData.get("lastName"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      await sendContactMessage(contactData);
      setIsOverlayVisible(true);
      // Reset form fields after successful submission
      event.target.reset();
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact us ♥</title>
        <meta name="description" content="Contact_us" />
      </Helmet>
      <div className="contact">
        <div className="contact_img">
          <img src={pic_contact} alt="contact-img" />
        </div>
        <div className="contact-form">
          <div className="contact-form-hed">
            <h2>Get In Touch</h2>
            <p>Rhoncus morbi et augue nec, in id ullamcorper at sit.</p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="name">
              <div className="lblc">
                <label htmlFor="fname">First Name</label>
                <input type="text" placeholder="F Name" required id="firstName" name="firstName"/>
              </div>
              <div className="lblc">
                <label htmlFor="lname">Last Name</label>
                <input type="text" placeholder="L Name" required id="lastName" name="lastName"/>
              </div>
            </div>
            <div className="lblc">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email" 
                name="email" 
                placeholder="Your Email"
                required
              />
            </div>
            <div className="lblc">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              name=""
              value="Send"
              className="btn"
              onClick={toggleOverlay}
            />
          </form>
        </div>
        
        {isOverlayVisible && (
          <div className="overlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
            >
              <path
                d="M150 281.25C115.19 281.25 81.8064 267.422 57.1922 242.808C32.5781 218.194 18.75 184.81 18.75 150C18.75 115.19 32.5781 81.8064 57.1922 57.1922C81.8064 32.5781 115.19 18.75 150 18.75C184.81 18.75 218.194 32.5781 242.808 57.1922C267.422 81.8064 281.25 115.19 281.25 150C281.25 184.81 267.422 218.194 242.808 242.808C218.194 267.422 184.81 281.25 150 281.25ZM150 300C189.782 300 227.936 284.196 256.066 256.066C284.196 227.936 300 189.782 300 150C300 110.218 284.196 72.0644 256.066 43.934C227.936 15.8035 189.782 0 150 0C110.218 0 72.0644 15.8035 43.934 43.934C15.8035 72.0644 0 110.218 0 150C0 189.782 15.8035 227.936 43.934 256.066C72.0644 284.196 110.218 300 150 300Z"
                fill="#4A963D"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="73.825"
                y="89"
                width="153"
                height="122"
                viewBox="0 0 153 122"
                fill="none"
              >
                <path
                  d="M128.687 4.18738C128.554 4.31683 128.429 4.45461 128.312 4.59989L63.1937 87.5686L23.95 48.3061C21.2842 45.8221 17.7583 44.4698 14.1152 44.5341C10.4721 44.5984 6.99608 46.0742 4.41959 48.6507C1.8431 51.2272 0.367251 54.7032 0.302972 58.3463C0.238693 61.9895 1.591 65.5154 4.075 68.1812L53.6875 117.812C55.024 119.146 56.6156 120.198 58.3672 120.903C60.1188 121.609 61.9946 121.955 63.8827 121.92C65.7708 121.885 67.6325 121.47 69.3568 120.7C71.0811 119.93 72.6326 118.82 73.9187 117.437L148.769 23.8749C151.317 21.1998 152.711 17.6292 152.648 13.9349C152.585 10.2406 151.071 6.71954 148.432 4.13291C145.794 1.54627 142.244 0.10192 138.549 0.112114C134.854 0.122308 131.312 1.58623 128.687 4.18738Z"
                  fill="#4A963D"
                />
              </svg>
            </svg>{" "}
            <NavLink to="/home" className="seedet">
              Home Page
            </NavLink>{" "}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Contactus;
