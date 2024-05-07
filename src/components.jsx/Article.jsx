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
import React, { useState } from "react";
import getUser from "../utils/getUser";

const Article = ({ article }) => {
  const [articleAuthor, setArticleAuthor] = useState("");

  getUser(article.author).then(({ user }) => {
    setArticleAuthor(user);
  });

  return (
    <Card>
      <Heading p="2rem">{article.title}</Heading>
      <Image src={article.article_img_url} />
      <Text p="2rem">
        {article.body} Are they small words? Despite the constant negative ipsum
        covfefe. Does everybody know that pig named Lorem Ipsum? Greater than
        ever before. He is so good with these words it's unbelievable. He’s a
        word hero because he was captured. He’s not a word hero. I don't think
        anybody knows it was Russia that wrote Lorem Ipsum, but I don't know,
        maybe it was. I guarantee you there's no problem, I guarantee. I have
        the best words. I just can't do it. I know words. I like text that
        wasn’t captured. I think the only card she has is the Lorem card. I
        think the only difference between me and the other placeholder text is
        that I’m more honest and my words are more beautiful. I was going to say
        something extremely rough to Lorem Ipsum, to its family, and I said to
        myself, "I can't do it. I will write some great, great text on your
        website’s Southern border, and I will make Google pay for that text. I
        write the best placeholder text, and I'm the biggest developer on the
        web by far ... It chokes! It could also be lots of other people. It will
        be met with fire and fury like the world has never seen. It's an art
        you're basically born with. It's not nice." It’s about making
        placeholder text great again. Look at that text! Look at these words.
        Lorem Ipsum is FAKE TEXT! Lorem Ipsum's father was with Lee Harvey
        Oswald prior to Oswald's being, you know, shot. Mark my words. No wonder
        you've been fighting Lorem Ipsum your entire adult life. Ok? Sadly, it’s
        no longer a 10. She's a disgusting pig, right? That's to be expected.
        The best taco bowls are made in Trump Tower Grill. The other thing with
        Lorem Ipsum is that you have to take out its family. They made a good
        decision. They’re bringing misspellings. This placeholder text is gonna
        be HUGE. Trump Ipsum is calling for a total and complete shutdown of
        Muslim text entering your website. We are going to make placeholder text
        great again. We are not - we are not keeping up with other websites. We
        have so many things that we have to do better ... and certainly ipsum is
        one of them. When other websites give you text, they’re not sending the
        best. While that's mock-ups and this is politics, are they really so
        different? Would anyone use that? You could see there was text coming
        out of her eyes, text coming out of her wherever. You have so many
        different things placeholder text has to be able to do, and I don't
        believe Lorem Ipsum has the stamina. You know, it really doesn’t matter
        what you write as long as you’ve got a young, and beautiful, piece of
        text. You’re disgusting.
      </Text>
      <CardFooter>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar src={articleAuthor.avatar_url} />

            <Box>
              <Text>Written by</Text>
              <Heading size="sm">{articleAuthor.name}</Heading>
            </Box>
            <Box>{new Date(article.created_at).toDateString()}</Box>
          </Flex>
        </Flex>
      </CardFooter>
      <CardFooter className="article-button-footer">
        <Button colorScheme="teal">Comments</Button>
        <Button colorScheme="teal">Author</Button>
              <Button colorScheme="teal">Likes { article.votes}</Button>
      </CardFooter>
    </Card>
  );
};

export default Article;
