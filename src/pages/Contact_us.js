import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import React from 'react';
import pic_contact from "../images/pic_contact.png";

const Contactus = () => {
  return (
    <>
    <Helmet>
      <title>Contact us</title>
      <meta name="description" content="Contact_us" />
    </Helmet>

    <Header />
    <section className="contact">
       <div className="contact_img">
       <img src={pic_contact} alt="contact-img" />
       </div>
       <div className="contact-form">
        <h1>Get In Touch</h1>
        <p>Rhoncus morbi et augue nec, in id ullamcorper at sit.</p>
       </div>
       <form action="">
        <input type="text" placeholder="F Name" required/>
        <input type="text" placeholder="L Name" required/>
        <input type="email" name="email" id="" placeholder="Your Email" required/>
        <input type="text" placeholder="Write a subject" required/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
        <input type="submit" />
       </form>
    </section>
    <Footer />
    </>
  );
}

export default Contactus;
