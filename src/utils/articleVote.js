import axios from "axios";

export const articleVote = (articleId, inc_votes) => {
  return axios
    .patch(
      `https://project-nc-news-xdpp.onrender.com/api/articles/${articleId}`,
      { articleId, inc_votes }
    )
    .then(({ data: { article } }) => {
      return article;
    })
    .catch((err) => {
      return err;
    });
};
