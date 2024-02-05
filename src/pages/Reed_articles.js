import { Helmet } from "react-helmet-async";
import "./Reed_articles.css";
import React from "react";
import article from "../images/article.jpg";
import arrow from "../images/ri-arrow-for-article.svg";
import { NavLink } from "react-router-dom";
import Layout from '../components/Layout';

const Reed_articles = () => {
  return (
    <Layout>
      <Helmet>
        <title>Reed articles ♥</title>
        <meta name="description" content="Reed articles" />
      </Helmet>
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
              <NavLink to="/ABmi">
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
    </Layout>
  );
};

export default Reed_articles;
