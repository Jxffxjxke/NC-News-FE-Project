import { SimpleGrid } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ArticlesList = () => {
  const topic = useParams();
  const [currentArticles, setCurrentArticles] = useState([]);
  useEffect(() => {
    fetch(`https://project-nc-news-xdpp.onrender.com/api/articles`)
      .then((data) => {
        return data.json();
      })
      .then(({ articles }) => {
        setCurrentArticles(articles);
      });
  }, []);

  return (
    <SimpleGrid
      spacing={3}
      templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
    >
      {currentArticles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </SimpleGrid>
  );
};

export default ArticlesList;
