import axios from "axios";

export const removeCommentHandler = ( commentId ) =>
{
  console.log(commentId);
  return axios
    .delete(
      `https://project-nc-news-xdpp.onrender.com/api/comments/${commentId}`
    )
    .catch((err) => {
      return err;
    });
};
