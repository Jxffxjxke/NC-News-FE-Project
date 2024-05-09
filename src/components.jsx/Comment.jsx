import {
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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import getUserImg from "../utils/getUserImg";
import {useState } from "react";

const Comment = ( { comment } ) =>
{
  const [userImg, setUserImg] = useState("");
  getUserImg(comment.author).then((img) => {
    setUserImg(img);
  });
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
        </Flex>
      </CardHeader>
      <DeleteIcon />
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
