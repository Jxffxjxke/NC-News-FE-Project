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
import React from "react";

const Article = ({ article }) => {
  return (
    <>
      <Card>
        <Heading p="2rem">{article.title}</Heading>
        <Image src={article.article_img_url} />
        <Text p="2rem">{article.body}</Text>
        <CardFooter>
          <Flex flex="1" gap="4" justifyContent="space-between">
            <Box>
              <Text>
                Written by <Text color="teal">{article.author}</Text>
              </Text>
            </Box>
            <Box>{new Date(article.created_at).toDateString()}</Box>
            <Button colorScheme="teal">Like {article.votes}</Button>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default Article;
