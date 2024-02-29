import { Helmet } from "react-helmet-async";
import "./done_new_pass.css";
import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const DoneNewPass = () => {
  return (
    <Layout>
      <Helmet>
        <title>DoneNewPass</title>
        <meta name="description" content="Done-new-pass" />
      </Helmet>

      <div className="done_new_pass">
        <div className="riconr">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="125"
            viewBox="0 0 124 125"
            fill="none"
          >
            <path
              d="M54.1771 86.9383C53.4989 86.9397 52.8271 86.8071 52.2002 86.5483C51.5734 86.2894 51.0038 85.9092 50.5242 85.4297L28.6072 63.5075C28.1134 63.0312 27.7194 62.4614 27.4482 61.8312C27.177 61.2011 27.034 60.5232 27.0276 59.8372C27.0211 59.1512 27.1514 58.4708 27.4107 57.8356C27.67 57.2005 28.0533 56.6233 28.538 56.1379C29.0228 55.6524 29.5994 55.2684 30.2342 55.0082C30.8689 54.7479 31.5492 54.6167 32.2352 54.6222C32.9212 54.6277 33.5993 54.7697 34.2298 55.04C34.8604 55.3103 35.4308 55.7035 35.9077 56.1967L54.1719 74.4608L87.0577 41.5853C88.0265 40.6159 89.3408 40.0709 90.7113 40.0705C92.0819 40.07 93.3965 40.614 94.366 41.5827C95.3355 42.5515 95.8804 43.8658 95.8809 45.2363C95.8813 46.6069 95.3374 47.9215 94.3686 48.891L57.8299 85.4297C57.3503 85.9092 56.7808 86.2894 56.1539 86.5483C55.5271 86.8071 54.8553 86.9397 54.1771 86.9383Z"
              fill="#4A963D"
            />
          </svg>
        </div>
        <div className="rthank">
          <h2>Thank You</h2>
          <p>Your password has been changed</p>
        </div>
        <div className="rthanr">
          <p>
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
            eleifend ultricies purus iaculis.
          </p>

          <NavLink to="/home" className="rbr">
            Home Page
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default DoneNewPass;
