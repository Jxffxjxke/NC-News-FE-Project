import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tag,
} from "@chakra-ui/react";
import TopicsMenu from "./TopicsMenu";

const NavBar = () => {
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
          <BreadcrumbLink href="/users">Users</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/about">About</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default NavBar;
