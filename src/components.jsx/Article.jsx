import {
  Box,
  Button,
  Card,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { articleVote } from "../utils/articleVote";

const Article = ({ article }) => {
  const [articleVotes, setArticleVotes] = useState(article.votes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleVote = (vote) => {
    setArticleVotes((previous) => {
      return (previous += vote);
    });
    articleVote(article.article_id, vote);
  };

  return (
    <>
      <Card>
        <Heading p="2rem">{article.title}</Heading>
        <Image
          src={article.article_img_url}
          alt={`Image for ${article.title}`}
        />

        <Box display="flex" justifyContent="space-between">
          <Box p="0.3rem" display="flex">
            <Text mr="0.3rem">Written by </Text>
            <Text color="teal">{article.author}</Text>
          </Box>
          <Box p="0.3rem">{new Date(article.created_at).toDateString()}</Box>
        </Box>

        <Text p="2rem">{article.body}</Text>

        <CardFooter>
          <Flex flex="1" gap="4" justifyContent="space-between">
            <Button
              colorScheme="teal"
              variant="ghost"
              ml="auto"
              p="0.5rem"
              onClick={() => {
                if (disliked) {
                  setLiked(true);
                  setDisliked(false);
                  handleVote(2);
                } else if (liked) {
                  setLiked(false);
                  handleVote(-1);
                } else {
                  setLiked(true);
                  handleVote(1);
                }
              }}
            >
              Like
            </Button>

            <Text p="7px">{articleVotes}</Text>

            <Button
              colorScheme="red"
              variant="ghost"
              onClick={() => {
                if (liked) {
                  setDisliked(true);
                  setLiked(false);
                  handleVote(-2);
                } else if (disliked) {
                  setDisliked(false);
                  handleVote(1);
                } else {
                  setDisliked(true);
                  handleVote(-1);
                }
              }}
            >
              Dislike
            </Button>
          </Flex>
        </CardFooter>
        <Text size="md" color='teal' ml="2rem" mb="1rem">
          {article.comment_count} Comments
        </Text>
      </Card>
    </>
  );
};

export default Article;
