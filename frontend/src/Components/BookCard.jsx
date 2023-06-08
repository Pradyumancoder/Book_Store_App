import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart } from "../Redux/Cart/cart.Action";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { addCartItem, cartData } = useSelector((store) => store.cart);
  const { loading } = addCartItem;

  const newItem = {
    ...book,
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

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Link to={`/detail/${book._id}`}>
        <Image
          margin={"auto"}
          height={"200px"}
          src={book.image}
          alt={book.title}
        />
        <Stack mt={4}>
          <Heading as="h3" size="md" height={"20px"}>
            {book.title}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {book.author}
          </Text>
          <Text m={"auto"} as={"p"} fontSize={"lg"}>
            {book.description.length < 8
              ? book.description
              : `${book.description.slice(0, 8)}...`}
          </Text>
          <Text fontSize="lg" fontWeight="bold" mt={2}>
            $ {book.price}
          </Text>
        </Stack>
      </Link>
      <Button
        isLoading={loading}
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
  );
};

export default BookCard;
