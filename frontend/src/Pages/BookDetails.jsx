import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../Redux/Books/books.Action";
import { addItemToCart } from "../Redux/Cart/cart.Action";
import Loading from "../Components/Loading";

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, singleBook } = useSelector((store) => store.books);

  const toast = useToast();
  const { addCartItem, cartData } = useSelector((store) => store.cart);
  const { loading: cartLoading } = addCartItem;

  useEffect(() => {
    dispatch(getBookDetail(id));
  }, []);

  const newItem = {
    ...singleBook,
    qty: 1,
  };

  const handleAddToCart = () => {
    const isItemInCart = cartData.find((item) => item._id === newItem._id);

    if (isItemInCart) {
      toast({
        title: "Add Failed.",
        description: "Item already in Cart.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      dispatch(addItemToCart(newItem));
      toast({
        title: "Add Success.",
        description: "Now you can explore Cart.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  if (!singleBook) {
    return <Box>Book not found.</Box>;
  }
  if (loading) return <Loading />;
  return (
    <Box mt={"80px"} border={"3px solid black"} background={"black"} color={"white"} p={4} justifyContent={"center"} alignItems={"center"}>
      <Stack spacing={4} direction={{ base: "column", md: "row" }}>
        <Image
          src={singleBook.image}
          alt={singleBook.title}
          maxW={{ base: "100%", md: "300px" }}
        />
        <Box>
          <Heading as="h2" size="lg">
            {singleBook.title}
          </Heading>
          <Text fontSize="lg" fontWeight="bold" mt={2}>
            {singleBook.author}
          </Text>
          <Text fontSize="lg" mt={2}>
            Price: $ {singleBook.price}
          </Text>
          <Text fontSize="lg" mt={2}>
            Category: {singleBook.category}
          </Text>
          <Text fontSize="lg" mt={2}>
            Description: {singleBook.description}
          </Text>
          <Box>
            <Button
              isLoading={cartLoading}
              isDisabled={cartData.find((item) => item._id === newItem._id)}
              loadingText="Add to Cart"
              width="full"
              p={4}
              borderRadius="lg"
              colorScheme="teal"
              _hover={{
                bg: "teal.300",
                color: "white",
              }}
              variant="outline"
              mt={4}
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default BookDetails;