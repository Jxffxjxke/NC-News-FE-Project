import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getTopics from "../utils/getTopics";
import { useNavigate } from "react-router-dom";


const TopicsMenu = () => {
  const navigate = useNavigate();
  const [currentTopics, setCurrentTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setCurrentTopics(topics);
    });
  }, []);

  return (
    <Menu>
      <MenuButton
        bg="teal"
        borderRadius="0.3rem"
        px="0.8rem"
        mx='2rem'
        className="topics-btn"
      >
        Topics
      </MenuButton>
      <MenuList>
        {currentTopics.map(({ slug }) => {
          const capSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
          return (
            <MenuItem
              key={slug}
              onClick={(e) => {
                navigate(`/${slug}`);
              }}
            >
              {capSlug}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default TopicsMenu;
