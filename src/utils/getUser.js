import axios from "axios";

const getUser = (username) => {
  return axios
    .get(`https://project-nc-news-xdpp.onrender.com/api/users/${username}`)
    .then(({ data }) => {
      return data;
    });
};

export default getUser;
