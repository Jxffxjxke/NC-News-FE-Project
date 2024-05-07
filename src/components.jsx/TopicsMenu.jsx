import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const TopicsMenu = () => {
  const [currentTopics, setCurrentTopics] = useState([]);

  useEffect(() => {
    fetch("https://project-nc-news-xdpp.onrender.com/api/topics")
      .then((data) => {
        return data.json();
      })
      .then(({ topics }) => {
        setCurrentTopics(topics);
      });
  }, []);

  return (
    <Menu>
      <MenuButton
        bg="teal"
        borderLeftRadius="0.3rem"
        py="0.6rem"
        pl="0.4rem"
        className="topics-btn"
      >
        Topics /
      </MenuButton>
      <MenuList>
        {currentTopics.map(({ slug }) => {
          const capSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
          return <MenuItem key={slug}>{capSlug}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
};

export default TopicsMenu;
