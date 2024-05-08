import axios from "axios";

const getUserImg = (username) => {
  return axios
    .get(`https://project-nc-news-xdpp.onrender.com/api/users/${username}`)
    .then(({ data: { user } }) => {
      return user.avatar_url;
    });
};

export default getUserImg;
