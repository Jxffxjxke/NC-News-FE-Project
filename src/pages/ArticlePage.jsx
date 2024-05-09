import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getArticle from "../utils/getArticle";
import Article from "../components.jsx/Article";
import getComments from "../utils/getComments";
import { Alert, AlertIcon } from "@chakra-ui/react";
import CommentsSection from "../components.jsx/CommentsSection";
import ArticleSkeleton from "../components.jsx/ArticleSkeleton";
import { CommentSkeletons } from "../components.jsx/CommentSkeletons";
import { AddComment } from "../components.jsx/AddComment";

const ArticlePage = () => {
  const [currentArticle, setCurrentArticle] = useState("");
  const [currentComments, setCurrentComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        setCurrentArticle(article);
      })
      .then(() => {
        getComments(article_id).then((comments) => {
          setCurrentComments(comments);
          setIsLoading(false);
        });
      })
      .catch((err) => {
        return (
          <Alert status="error">
            <AlertIcon />
            There was an error processing this request
          </Alert>
        );
      });
  }, [article_id]);

  if (isLoading) {
    return (
      <>
        <ArticleSkeleton />
        <CommentSkeletons />
      </>
    );
  } else {
    return (
      <main>
        <Article article={currentArticle} />
        <AddComment
          comments={currentComments}
          setCurrentComments={setCurrentComments}
        />
        <CommentsSection comments={currentComments} />
      </main>
    );
  }
};

export default ArticlePage;
