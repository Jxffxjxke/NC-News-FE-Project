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
        NC_News
      </Tag>
      <TopicsMenu />
      <Box display='flex' flexWrap='wrap'>
        <Breadcrumb
          className="nav"
          bg="teal"
          borderRightRadius="0.3rem"
          p="0.6rem"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/login">
              {user.username ? "Log Out" : "Log In"}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/about">About</BreadcrumbLink>
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
