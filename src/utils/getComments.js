import axios from "axios";
import { handleError } from "./handleError";

const getComments = (articleId) => {
  return axios
    .get(
      `https://project-nc-news-xdpp.onrender.com/api/articles/${articleId}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    })
    .catch((err) => {
      handleError();
    });
};

export default getComments;
