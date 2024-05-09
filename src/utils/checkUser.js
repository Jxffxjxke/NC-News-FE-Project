import axios from "axios";

export const checkUser = ({ username }) => {
  if (!username) {
    return username;
  } else {
    return axios
      .get(`https://project-nc-news-xdpp.onrender.com/api/users/${username}`)
      .then(({ data }) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  }
};
