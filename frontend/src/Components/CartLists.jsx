import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";

const CartLists = ({ cartItems, handleOrder }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cartItems
        .reduce((acc, el) => acc + Number(el.price * el.qty), 0)
        .toFixed(2)
    );
  }, [cartItems]);

  return (
    <Box mt={"80px"} h={"100vh"} background={"black"} color={"red"} className="mt-20 h-screen">
      {cartItems.map((cart) => (
        <CartCard key={cart._id} cart={cart} />
      ))}

      <Flex px={4} gap={"10px"} alignItems={"center"} className="px-4 gap-10 items-center">
        <Button
          borderRadius="lg"
          colorScheme="teal"
          _hover={{
            bg: "teal.300",
            color: "white",
          }}
          variant="outline"
          onClick={handleOrder}
          className="rounded-lg border border-teal-500 hover:bg-teal-300 hover:text-white"
        >
          Place Order
        </Button>
        <Text as={"p"} className="text-lg">
          Total Amount:- $ {total}
        </Text>
      </Flex>
    </Box>
  );
};

export default CartLists;
