import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import getUserImg from "../utils/getUserImg";
import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { removeCommentHandler } from "../utils/removeCommentHandler";

const Comment = ({ comment, comments, setComments }) => {
  const { user } = useContext(UserContext);
  const [userImg, setUserImg] = useState("");
  const commentId = comment.comment_id;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  getUserImg(comment.author).then((img) => {
    setUserImg(img);
  });

  const handleRemoveComment = (commentId) => {
    setComments((currComments) => {
      return currComments.filter((comment) => comment.comment_id !== commentId);
    });
  };

  return (
    <Card border="1px solid grey" m="1rem">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar src={userImg} />
            <Box>
              <Heading size="md">{comment.author}</Heading>
              <Badge ml="1" colorScheme="teal">
                {new Date(comment.created_at).toDateString()}
              </Badge>
            </Box>
          </Flex>
          {comment.author === user.username && (
            <>
              <DeleteIcon
                key={commentId}
                className="remove-comment"
                ml="auto"
                onClick={onOpen}
              />
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Delete Comment
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          onclose;
                          removeCommentHandler(commentId);
                          handleRemoveComment(commentId);
                        }}
                        ml={3}
                      >
                        Delete
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </>
          )}
        </Flex>
      </CardHeader>
      <CardBody display="flex" justifyContent="flex-start">
        <Text>{comment.body}</Text>
        <Button
          colorScheme="teal"
          variant="ghost"
          ml="auto"
          p="0.5rem"
          value={1}
        >
          Like
        </Button>
        <Text p="7px">{comment.votes}</Text>
        <Button colorScheme="red" variant="ghost" value={-1}>
          Dislike
        </Button>
      </CardBody>
    </Card>
  );
};

export default Comment;
