import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { getSpecificArticle } from "../components/apiService";
import { useParams, useNavigate } from "react-router-dom";
import "./ar_disease.css";

const Article = () => {
  const { id } = useParams();
  const [articleData, setArticleData] = useState(null);
  const navigate = useNavigate();
  const baseURL = "http://127.0.0.1:8000/";

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const article = await getSpecificArticle(accessToken, id);
        setArticleData(article.data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);


  const handleBackClick = () => {
    navigate("/Reed_articles");
  };
  if (!articleData) {
    return <div>Loading...</div>;
  }

  const { title, image, body } = articleData;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />{" "}
      </Helmet>
      <div className="back"onClick={handleBackClick}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="bg_article">
        <h3 className="address">{title}</h3>
        <img className="P_img" src={baseURL + image} alt={title} />
        <div className="topic">
          <p>{body}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Article;
