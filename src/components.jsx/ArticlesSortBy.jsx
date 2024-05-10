import { Select } from "@chakra-ui/react";

const ArticlesSortBy = ({ setSortBy }) => {

  const sortOptions = {
    Newest: 0,
    Oldest: 1,
    "Most comments": 2,
    "Least comments": 3,
    "Most votes": 4,
    "Least votes": 5,
  };

  return (
    <Select
      mr="auto"
      w="fit-content"
      my="1rem"
      ml="1.2rem"
      placeholder="Newest"
      onChange={({ target: { value } }) => {
        const sortValue = sortOptions[value] ?? 0;
        setSortBy(sortValue);
      }}
    >
      {Object.keys(sortOptions).map((option) => (
        <option key={option}>{option}</option>
      ))}
    </Select>
  );
};

export default ArticlesSortBy;
