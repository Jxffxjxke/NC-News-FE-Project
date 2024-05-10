import React, { useState } from "react";
import ArticlesList from "../components.jsx/ArticlesList";
import ArticlesSortBy from "../components.jsx/ArticlesSortBy";

const Home = () => {
  const [sortBy, setSortBy] = useState(0);
  return (
    <main>
      <ArticlesSortBy setSortBy={setSortBy} />
      <ArticlesList sortBy={sortBy} />
    </main>
  );
};

export default Home;
