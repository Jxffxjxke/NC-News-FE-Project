import { SimpleGrid } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import getArticles from "../utils/getArticles";
import ArticleSkeleton from "./ArticleSkeleton";
import { useParams } from "react-router-dom";

const ArticlesList = () => {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {

    setIsLoading(true);

    getArticles(topic)
      .then((articles) => {
        setCurrentArticles(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) {
    return (
      <SimpleGrid
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
      </SimpleGrid>
    );
  }

  return (
    <SimpleGrid
      spacing={3}
      templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
    >
      {currentArticles.map((article) => (
        <ArticleCard article={article} key={article.article_id} />
      ))}
    </SimpleGrid>
  );
};

export default ArticlesList;
