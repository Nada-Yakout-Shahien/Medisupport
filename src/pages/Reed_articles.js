import { Helmet } from "react-helmet-async";
import "./Reed_articles.css";
import React, { useEffect, useState } from "react";
import article from "../images/article.jpg";
import arrow from "../images/ri-arrow-for-article.svg";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import { getAllArticles } from "../components/apiService";

const Reed_articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        let currentPage = 1;
        let totalPages = 1;
        let fetchedArticles = [];

        while (currentPage <= totalPages) {
          const response = await getAllArticles(accessToken, currentPage);

          console.log("Fetched page", currentPage, "of Articles:", response);

          totalPages = response.meta.last_page;

          fetchedArticles = [...fetchedArticles, ...response.data];

          setArticles(fetchedArticles);
          currentPage++;
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);


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
          {articles.map((article, index) => (
            <div className="dis" key={index}>
              <div className="diseases">
                <p>{article.title}</p>
                <NavLink to={`/article/${article.id}`}>
                  <img src={arrow} alt="" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Reed_articles;
