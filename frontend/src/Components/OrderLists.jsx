import React from "react";
import OrderCard from "./OrderCard";
import { Box, Heading, Stack } from "@chakra-ui/react";

const OrderLists = ({ orders }) => {
  return (
    <Box width={"full"} p={4} height={"100vh"} mt={"70px"} >
      <Heading as="h1" mb={4}>
        Orders
      </Heading>

      <Stack
        spacing={4}
      >
        {orders.map((order, i) => (
          <OrderCard key={i} item={order} />
        ))}
      </Stack>
    </Box>
  );
};

export default OrderLists;
