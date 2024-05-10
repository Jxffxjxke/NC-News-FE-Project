import {
  Alert,
  AlertIcon,
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Flex,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { postComment } from "../utils/postComment";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import RequestErrorBanner from "./RequestErrorBanner";

export const AddComment = ({ setCurrentComments, err, setErr }) => {
  const [commentInput, setCommentInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const { article_id } = useParams();
  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim() === "") {
      setIsValid(false);
    }
    setIsValid(true);
    setCurrentComments((prevComments) => [
      {
        body: commentInput,
        author: user.username,
        created_at: new Date().toISOString(),
        votes: 0,
        comment_id: 1,
      },
      ...prevComments,
    ]);
    postComment(commentInput, article_id, user.username, setErr);
    setCommentInput("");
  };

  if (err) {
    return <RequestErrorBanner />;
  }
  return (
    <Card p="2rem">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar src={user.avatar_url} />
            <Box>
              <Heading size="md">{user.username}</Heading>
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
