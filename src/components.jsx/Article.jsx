import {
  Avatar,
  Box,
  Button,
  Card,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CommentsSection from "./CommentsSection";

const Article = ({ article, comments }) => {
  return (
    <>
      <Card>
        <Heading p="2rem">{article.title}</Heading>
        <Image src={article.article_img_url} />
        <Text p="2rem">{article.body}</Text>
        <CardFooter>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Text>Written by {article.author}</Text>
              </Box>
              <Box>{new Date(article.created_at).toDateString()}</Box>
            </Flex>
          </Flex>
        </CardFooter>
        <CardFooter className="article-button-footer" mt="1rem">
          <Button colorScheme="teal">Comments {article.comment_count}</Button>
          <Button colorScheme="teal">Like {article.votes}</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Article;
