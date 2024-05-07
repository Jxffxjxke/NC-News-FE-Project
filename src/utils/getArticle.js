import axios from "axios";

const getArticle = (articleId) => {
  return axios
    .get(`https://project-nc-news-xdpp.onrender.com/api/articles/${articleId}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export default getArticle;
