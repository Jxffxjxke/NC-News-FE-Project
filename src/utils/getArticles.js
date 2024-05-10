import axios from "axios";
import { handleError } from "./handleError";

const getArticles = (topic = "", sortBy = 0) => {
  const baseUrl = `https://project-nc-news-xdpp.onrender.com/api/articles`;
  const topicQuery = topic ? `?topic=${topic}` : "";

  const sortQueries = [
    `sortBy=created_at`,
    `sortBy=created_at&order=asc`,
    `sortBy=comment_count`,
    `sortBy=comment_count&order=asc`,
    `sortBy=votes`,
    `sortBy=votes&order=asc`,
  ];

  const separator = topicQuery ? "&" : "?";
  const sortQuery = sortQueries[sortBy];

  const finalUrl = `${baseUrl}${topicQuery}${separator}${sortQuery}`;

  return axios
    .get(finalUrl)
    .then(({ data: { articles } }) => {
      if (sortBy === 4) {
        return articles.sort((a, b) => b.votes - a.votes);
      } else if (sortBy === 5) {
        return articles.sort((a, b) => a.votes - b.votes);
      } else return articles;
    })
    .catch((error) => {
      handleError();
    });
};

export default getArticles;
