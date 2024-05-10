import axios from "axios";
import { handleError } from "./handleError";

const getArticle = (articleId) => {
  return axios
    .get(`https://project-nc-news-xdpp.onrender.com/api/articles/${articleId}`)
    .then(({ data: { article } }) => {
      return article;
    })
    .catch((err) => {
      handleError();
    });
};

export default getArticle;
