import { Select } from "@chakra-ui/react";

const ArticlesSortBy = ({ setSortBy }) => {
  return (
    <Select
      mr="auto"
      w="fit-content"
      my="1rem"
      ml="1.2rem"
      placeholder="Newest"
      onChange={({ target: { value } }) => {
        let sortValue = 0;
        if (value === "Oldest") {
          sortValue = 1;
        } else if (value === "Most comments") {
          sortValue = 2;
        } else if (value === "Least comments") {
          sortValue = 3;
        } else if (value === "Most votes") {
          sortValue = 4;
        } else if (value === "Least votes") {
          sortValue = 5;
        }
        setSortBy(sortValue);
      }}
    >
      <option>Oldest</option>
      <option>Most comments</option>
      <option>Least comments</option>
      <option>Most votes</option>
      <option>Least votes</option>
    </Select>
  );
};

export default ArticlesSortBy;
