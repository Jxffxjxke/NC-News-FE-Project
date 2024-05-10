import { Box, Text } from "@chakra-ui/react";

function MyProjectDescription() {
  return (
    <Box>
      <Text fontSize="xl" pt="5rem" pl="5rem" pr="5rem">
        I'm Jake, and this is my first full web app project. I built a
        <Text as="b"> back-end API</Text> and a{" "}
        <Text as="b">front-end user interface</Text> for a{" "}
        <Text as="b">news web app</Text>. My inspiration came from my interest
        in technology and news, and I wanted to create a platform that makes it
        easy for users to access the latest news stories in an intuitive and
        organized way.
      </Text>

      <Text fontSize="xl" pl="5rem" pr="5rem" pt="2rem">
        The <Text as="b">front-end</Text> is built with{" "}
        <Text color="teal" as="i">
          React and Chakra UI components
        </Text>
        , while the <Text as="b">back-end</Text> uses
        <Text as="i"> Node.js and PostgreSQL</Text>. The app allows users to
        view headlines, search for specific topics, and categorize news by
        section.
      </Text>

      <Text fontSize="xl" pl="5rem" pr="5rem" pt="2rem">
        During the development process, I learned a lot about
        <Text as="b"> RESTful API design</Text>,{" "}
        <Text as="b"> state management</Text>,{" "}
        <Text as="b"> user interface design</Text>,{" "}
        <Text as="b"> React hooks</Text>, and more. One of the biggest
        challenges was updating the article-fetching logic to work with or
        without a topic filter, while also allowing for six different queries
        from a dropdown menu to sort the articles in a specific order.
      </Text>

      <Text fontSize="xl" pl="5rem" pr="5rem" pt="2rem">
        I also gained valuable experience with <Text as="b">React context</Text>
        . I used it to
        <Text as="b"> manage user state</Text> across the app to determine if a
        user is logged in, update the user object from the login page, and
        update the user avatar in the navbar. This allows the user to post as
        themselves (as my API doesn't have user authentication yet).
      </Text>

      <Text fontSize="xl" pl="5rem" pr="5rem" pt="2rem">
        I plan to keep improving this project as I learn more, aiming to make it
        as great as it can be.
      </Text>
    </Box>
  );
}

export default MyProjectDescription;
