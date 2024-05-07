import axios from "axios";

const getTopics = () => {
  return axios
    .get("https://project-nc-news-xdpp.onrender.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    })
    .catch( ( err ) =>
    {
      console.log(err);
    });
};

export default getTopics;
