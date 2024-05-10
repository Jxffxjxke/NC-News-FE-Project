import { useParams } from "react-router-dom";
import ArticlesList from "../components.jsx/ArticlesList";
import ArticlesSortBy from "../components.jsx/ArticlesSortBy";
import { useState } from "react";

const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [ sortBy, setSortBy ] = useState( 0 );
  
  return (
    <>
      <ArticlesSortBy setSortBy={setSortBy} />
      <ArticlesList topic={topic} sortBy={sortBy} />
    </>
  );
};

export default ArticlesByTopic;
