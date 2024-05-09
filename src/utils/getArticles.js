import axios from "axios";

const getArticles = ( topic = "" ) =>
{
  const url = topic
    ? `https://project-nc-news-xdpp.onrender.com/api/articles?topic=${topic}`
    : `https://project-nc-news-xdpp.onrender.com/api/articles`;
  return axios
    .get(url)
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getArticles;
