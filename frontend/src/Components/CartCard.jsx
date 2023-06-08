import {
  Button,
  ButtonGroup,
  CloseButton,
  Grid,
  GridItem,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateCartItem } from "../Redux/Cart/cart.Action";

const CartCard = ({ cart }) => {
  const [qty, setQty] = useState(cart.qty);
  const toast = useToast();

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
    toast({
      title: "Remove Success.",
      description: `Remove Item id: ${id} from Cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleIncQty = () => {
    setQty(qty + 1);
  };

  const handleDecQty = () => {
    setQty(qty - 1);
  };

  useEffect(() => {
    dispatch(updateCartItem(cart._id, qty));
  }, [qty]);

  return (
    <Grid
      gridTemplateColumns="repeat(4, 1fr)"
      alignItems="center"
      justifyContent="space-between"
      p={4}
      background={"black"}
      textColor={"white"}
      width="full"
      gap={2}
      mb={2}
      boxShadow="lg"
      border={"1px solid white"}
    >
      <GridItem>
        <Image
          width="100px"
          height="100px"
          alt={cart.title}
          src={cart.image}
        />
      </GridItem>
      <GridItem>
        <Text m="auto" as="p" fontSize="lg">
          Director:-{" "}
          {cart.title.length < 8
            ? cart.title
            : `${cart.title.slice(0, 8)}...`}
        </Text>
      </GridItem>
      <GridItem>
        <ButtonGroup
          display="flex"
          flexDirection={{
            base: "column",
            sm: "row",
          }}
          alignItems="center"
          gap="5px"
        >
          <Button
            disabled={cart.qty <= 1}
            colorScheme="teal"
            variant="solid"
            onClick={handleDecQty}
            size="sm"
          >
            -
          </Button>
          <Button color={"black"} variant="solid" size="sm">
            {cart.qty}
          </Button>
          <Button
            disabled={cart.qty > 9}
            colorScheme="teal"
            variant="solid"
            size="sm"
            onClick={handleIncQty}
          >
            +
          </Button>
        </ButtonGroup>
      </GridItem>
      <GridItem>
        <Button 
         bg="red.500"
          width={"100px"}
          borderWidth="1px"
          border={"1px solid white"}
          size="md"
          variant="outline"
          _hover={"black"}
          onClick={() => handleRemove(cart._id)}>Delete</Button>
      </GridItem>
    </Grid>
  );
};

export default CartCard;
