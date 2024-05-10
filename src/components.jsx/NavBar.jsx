import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import TopicsMenu from "./TopicsMenu";

const NavBar = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="head">
      <Tag className="logo" colorScheme="teal" p="0.6rem">
        <Text fontSize="large">NC_News</Text>
      </Tag>
      <TopicsMenu />
      <Box>
        <Breadcrumb className="nav" bg="teal" borderRadius="0.3rem" p="0.8rem">
          <BreadcrumbItem>
            <BreadcrumbLink href="/home" ml="1rem" mr="2rem">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/login" mx="2rem">
              {user.username ? "Log Out" : "Log In"}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/about" ml="2rem" mr="1rem">
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box ml="auto" display="flex" alignItems="center">
        <Text>{user.username}</Text>
        <Avatar src={user.avatar_url} />
      </Box>
    </div>
  );
};

export default NavBar;
