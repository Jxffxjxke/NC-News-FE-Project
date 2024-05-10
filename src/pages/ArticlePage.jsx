import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import getArticle from "../utils/getArticle";
import getComments from "../utils/getComments";
import Article from "../components.jsx/Article";
import ArticleSkeleton from "../components.jsx/ArticleSkeleton";
import CommentsSection from "../components.jsx/CommentsSection";
import { CommentSkeletons } from "../components.jsx/CommentSkeletons";
import { AddComment } from "../components.jsx/AddComment";
import { UserContext } from "../contexts/User";
import RequestErrorBanner from "../components.jsx/RequestErrorBanner";

const ArticlePage = () => {
  const [err, setErr] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [currentComments, setCurrentComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const { user } = useContext(UserContext);

  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        setCurrentArticle(article);
        return getComments(article_id);
      })
      .then((comments) => {
        setCurrentComments(comments);
      })
      .catch((error) => {
        setErr(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return (
      <>
        <ArticleSkeleton />
        <CommentSkeletons />
      </>
    );
  }

  if (err) {
    return <RequestErrorBanner />;
  }
  return (
    <main>
      <Article article={currentArticle} setErr={setErr} />
      <AddComment
        user={user}
        setCurrentComments={setCurrentComments}
        err={err}
        setErr={setErr}
      />
      <CommentsSection
        comments={currentComments}
        setCurrentComments={setCurrentComments}
      />
    </main>
  );
};

export default ArticlePage;
