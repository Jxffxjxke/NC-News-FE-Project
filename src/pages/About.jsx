import { Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Text>
      I'm Jake, and this is my first full web app project. I created a back-end
      API and a front-end user interface for a news web app. The idea for this
      project came from my interest in technology and news. I wanted to create a
      platform that would allow users to easily access the latest news stories
      in an intuitive and organized manner. The front-end of the app is built
      with React and Chakra UI components, and the back-end API uses Node.js,
      PostgreSQL. The app allows users to view headlines, search for specific
      topics, and categorize news by section. Throughout the development
      process, I learned a lot about RESTful API design, state management, user
      interface design, reactHooks and much more. One of the biggest challenges
      was trying to update the fetching of articles data function so that it
      would work with not only with or without a topic, but with the possibility
      of 6 different queries that could have been selected through the select
      options dropdown menu to sort the articles in a specific order. I also
      gained valuable experience in React context where i used it to access user
      state through the app to see if a user is logged in or not and which user
      they are logged in as as my API doesnt have user authenticaion yet. I am
      considering adding to this project as I learn more to make it as best as
      it can be.
    </Text>
  );
};

export default About;
