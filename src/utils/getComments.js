import axios from "axios";

const getComments = (articleId) => {
  return axios
    .get(
      `https://project-nc-news-xdpp.onrender.com/api/articles/${articleId}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export default getComments;
