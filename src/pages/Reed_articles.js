import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "./Reed_articles.css";
import React from "react";
import article from "../images/article.jpg";
import arrow from "../images/ri-arrow-for-article.svg";
import { NavLink } from "react-router-dom";

const Reed_articles = () => {
  return (
    <>
      <Helmet>
        <title>Reed articles ♥</title>
        <meta name="description" content="Reed articles" />
      </Helmet>
      <Header />
      <div className="article">
        <div>
          <img className="article1" src={article} alt="" />
        </div>
        <div className="article2">
          <div className="word">Articles</div>
          <div className="dis">
            <div className="diseases">
              <p>Blood pressure</p>
              <NavLink to="/pressure">
              <img src={arrow} alt=""/>
              </NavLink>            </div>
          </div>
          <div className="dis">
            <div className="diseases">
              <p>Blood sugar</p>
              <NavLink to="/sugar">
              <img src={arrow} alt=""/>
              </NavLink>
            </div>
          </div>
          <div className="dis">
            <div className="diseases">
              <p>BMI</p>
              <NavLink to="/bmi">
              <img src={arrow} alt=""/>
              </NavLink>            </div>
          </div>
          <div className="dis">
            <div className="diseases">
              <p>Heart</p>
              <NavLink to="/heart">
              <img src={arrow} alt=""/>
              </NavLink>            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reed_articles;
