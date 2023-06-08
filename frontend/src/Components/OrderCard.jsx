import { Button, CloseButton, Grid, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeMoveOrderItem } from "../Redux/Order/order.Action";

const OrderCard = ({ item }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleCancleOrder = (id) => {
    dispatch(removeMoveOrderItem(id));
    toast({
      title: "Cancle Success.",
      description: `Order Item id: ${id}.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      alignItems="center"
      justifyContent={"space-between"}
      p={4}
      width={"full"}
      gap={2}
      mb={2}
     boxShadow={"lg"}
     border={"2px solid white"}
    >
      <Image
        width={"100px"}
        height={"100px"}
        alt={item.title}
        src={item.image}
      />
      <Text>{item.title}</Text>
      <Text>{item.qty}</Text>
      
      <Button
       bg="red.500"
       width={"100px"}
       borderWidth="1px"
       border={"1px solid white"}
       size="md"
       variant="outline"
       _hover={"black"}
        onClick={() => handleCancleOrder(item._id)}>Delete</Button>
    </Grid>
  );
};

export default OrderCard;