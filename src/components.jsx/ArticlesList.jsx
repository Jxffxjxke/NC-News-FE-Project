import { SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import getArticles from "../utils/getArticles";
import ArticleSkeleton from "./ArticleSkeleton";

const ArticlesList = () => {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setCurrentArticles(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
      {currentArticles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </SimpleGrid>
  );
};

export default ArticlesList;
