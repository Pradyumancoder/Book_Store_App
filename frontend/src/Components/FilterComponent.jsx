import React, { useState, useEffect } from "react";
import { Box, Select, HStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksbyFilter } from "../Redux/Books/books.Action";

const FilterComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { allBooks } = useSelector((store) => store.books);
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allBooks) {
      const categories = [...new Set(allBooks.map((book) => book.category))];
      setCategory(categories);
    }
  }, [allBooks]);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    dispatch(getBooksbyFilter(value));
  };

  if (!allBooks) {
    return <div>Loading...</div>; // or show a loading state
  }

  return (
    <Box>
      <HStack  >
        <Select color={"black"} value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {category.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </HStack>
    </Box>
  );
};

export default FilterComponent;
