import axios from "axios";

const getArticles = () => {
  return axios
    .get(`https://project-nc-news-xdpp.onrender.com/api/articles`)
      .then( ( { data: { articles } } ) =>
      {
      return articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getArticles;