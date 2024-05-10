import axios from "axios";

export const postComment = (body, articleId, author, setErr) => {
  setErr(false);
  axios
    .post(
      `https://project-nc-news-xdpp.onrender.com/api/articles/${articleId}/comments`,
      {
        body,
        author,
      }
    )
    .then((data) => {
      return data;
    })
    .catch((err) => {
      setErr(true);
    });
};
