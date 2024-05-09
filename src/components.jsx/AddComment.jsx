import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Flex,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { postComment } from "../utils/postComment";
import { useParams } from "react-router-dom";

export const AddComment = ({ setCurrentComments }) => {
  const [commentInput, setCommentInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const { article_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setCurrentComments((prevComments) => [
      {
        body: commentInput,
        author: "daydream22",
        created_at: new Date().toISOString(),
        votes: 0,
        comment_id: 1,
      },
      ...prevComments,
    ]);
    postComment(commentInput, article_id, "daydream22");
    setCommentInput("");
  };

  return (
    <Card p="2rem">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar src="https://mrmen.com/cdn/shop/t/37/assets/svg--character--mr-daydream.svg?v=143191699983214835881695746663" />
            <Box>
              <Heading size="md">daydream22</Heading>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <form id="comment-input" onSubmit={handleSubmit}>
        <Box display="flex" w="100%">
          <Textarea
            isInvalid={!isValid}
            placeholder="Add Comment..."
            w="100%"
            value={commentInput}
            onChange={(e) => {
              setCommentInput(e.target.value);
              setIsValid(true);
            }}
          />
          <Button m="auto" type="submit">
            Post
          </Button>
        </Box>
      </form>
    </Card>
  );
};
