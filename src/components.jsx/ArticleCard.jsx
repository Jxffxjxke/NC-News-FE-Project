import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Button,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const articleDate = new Date(article.created_at).toDateString();

  return (
    <Card maxW="lg" className="article">
      <CardBody>
        <Image
          src={article.article_img_url}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Box display='flex' justifyContent='space-between'>
          <Text color="teal" fontSize="md">
            By {article.author}
          </Text>
          <Text>{article.votes} votes</Text>
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="md">{article.title}</Heading>
          <Text>{article.body.slice(0, 50)}...</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter className="article-footer">
        <Link to={`/articles/${article.article_id}`}>
          <Button colorScheme="teal">Read More</Button>
        </Link>
        <Text color="teal">{articleDate}</Text>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
