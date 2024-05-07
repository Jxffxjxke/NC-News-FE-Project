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
  ButtonGroup,
} from "@chakra-ui/react";

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
        <Stack mt="6" spacing="3">
          <Heading size="md">{article.title}</Heading>
          <Text>{article.body.slice(0, 50)}...</Text>
          <div className="author-votes-container">
            <Text color="teal" fontSize="md">
              By {article.author}
            </Text>
            <Text>{article.votes} votes</Text>
          </div>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter className="article-footer">
          <Button variant="solid" colorScheme="teal">
            Read More
          </Button>
          <Text color='teal'>{articleDate}</Text>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
