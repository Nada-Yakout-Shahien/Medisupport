import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./Contact_us.css";
import React from "react";
import pic_contact from "../images/pic_contact.png";

function Contactus(){
  return (
    <>
      <Helmet>
        <title>Contact us ♥</title>
        <meta name="description" content="Contact_us" />
      </Helmet>

      <Header />
      <div className="contact">
        <div className="contact_img">
          <img src={pic_contact} alt="contact-img" />
        </div>
        <div className="contact-form">
          <div className="contact-form-hed">
            <h2>Get In Touch</h2>
            <p>Rhoncus morbi et augue nec, in id ullamcorper at sit.</p>
          </div>
          <form action="">
            <div className="name">
              <div className="lbl1">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="F Name" required />
              </div>
              <div className="lbl1">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="L Name" required />
              </div>
            </div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
            />
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" name="" value="Send" className="btn" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
