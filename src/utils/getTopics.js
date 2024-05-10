import axios from "axios";
import { handleError } from "./handleError";

const getTopics = () => {
  return axios
    .get("https://project-nc-news-xdpp.onrender.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    })
};

export default getTopics;
