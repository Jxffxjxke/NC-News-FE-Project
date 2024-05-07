import React, { useEffect, useState } from "react";
import NavBar from "../components.jsx/NavBar";
import { useParams } from "react-router-dom";
import getArticle from "../utils/getArticle";
import ArticleCard from "../components.jsx/ArticleCard";
import Article from "../components.jsx/Article";

const ArticlePage = () => {
  const [currentArticle, setCurrentArticle] = useState("");
  const { article_id } = useParams();

  useEffect(() => {
    getArticle( article_id ).then( ( article ) =>
    {
      setCurrentArticle(article);
    });
  }, []);

  return (
    <main>
          <NavBar />
          <Article article={ currentArticle } />
    </main>
  );
};

export default ArticlePage;
