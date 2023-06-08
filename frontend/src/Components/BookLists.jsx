import { Grid } from "@chakra-ui/react";
import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <Grid
      mt={"80px"}
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
      p={2}
      justifyContent="center"
      className="mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 justify-center"
    >
      {books.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
    </Grid>
  );
};

export default BookList;
