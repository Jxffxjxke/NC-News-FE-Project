import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tag,
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
          <BreadcrumbLink href="/login">Log In</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/about">About</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Avatar ml="auto" src={user.avatar_url} />
    </div>
  );
};

export default NavBar;
