import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon } from "@chakra-ui/icons";
import { addOrderItems } from "../Redux/Order/order.Action";
import { useNavigate } from "react-router-dom";
import { cartRest } from "../Redux/Cart/cart.Action";

const initialAddress = {
  city: "",
  state: "",
  mobile: "",
  Pincode: "",
};

const CheckOut = () => {
  const [address, setAddress] = useState(initialAddress);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [total, setTotal] = useState(0);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartData } = useSelector((store) => store.cart);

  useEffect(() => {
    setTotal(
      cartData
        .reduce((acc, el) => acc + Number(el.price * el.qty), 0)
        .toFixed(2)
    );
  }, [cartData]);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleBuyNow = () => {
    if (
      address.city === "" ||
      address.state === "" ||
      address.mobile === "" ||
      address.Pincode === ""
    ) {
      return toast({
        title: "Please fill Address.",
        description: `Address is required for delivery`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    dispatch(addOrderItems(cartData));
    toast({
      title: "Order Success.",
      description: `Order Amount $:- ${total}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    navigate("/order");
    dispatch(cartRest());
  };

  const totalItems = cartData.length;
  // const totalPrice = cartData.reduce((acc, item) => acc + item.price, 0);

  function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    return (
      <>
        <Button onClick={onOpen}>Add new address</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Your address</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleAddressChange}
                  placeholder="city"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>State</FormLabel>
                <Input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleAddressChange}
                  placeholder="state"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Mobile</FormLabel>
                <Input
                  type="number"
                  name="mobile"
                  value={address.mobile}
                  onChange={handleAddressChange}
                  placeholder="number"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Pincode</FormLabel>
                <Input
                  type="number"
                  name="Pincode"
                  value={address.Pincode}
                  onChange={handleAddressChange}
                  placeholder="Pincode"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <Box p={4} mt={"50px"}>
      <Heading as="h1" mb={4}>
        Checkout
      </Heading>

      <Stack spacing={4}>
        <Heading as="h2" size="md" mb={2}>
          Delivery Address
        </Heading>
        <Box>
          <AddIcon /> {InitialFocus()}
        </Box>
        <Grid
          templateColumns="repeat(3, 1fr)"
          alignItems="center"
          gap={2}
          mb={2}
        >
          <Text fontSize={"bold"}>City:- {address.state}</Text>
          <Text fontSize={"bold"}>Mobile:- {address.mobile}</Text>
          <Text fontSize={"bold"}>Pinecode:- {address.Pincode}</Text>
        </Grid>
        <Heading as="h2" size="md" mb={2}>
          Cart Items ({totalItems})
        </Heading>
        <Box height={"200px"} overflowY={"scroll"}>
          {cartData.map((item) => (
            <Grid
              key={item._id}
              templateColumns="repeat(4, 1fr)"
              alignItems="center"
              gap={2}
              mb={2}
            >
              <Image
                objectFit="cover"
                height="100px"
                width={"auto"}
                src={item.image}
                alt={item.title}
                padding="10px"
              />
              <Text fontSize={"bold"}>{item.title}</Text>
              <Text fontSize={"bold"}>{item.qty}</Text>
              <Text>${item.price}</Text>
            </Grid>
          ))}
        </Box>

        <Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} alignItems="center">
            <Text>Total Items:</Text>
            <Text>{totalItems}</Text>
            <Text>Total Quantity:</Text>
            <Text>{cartData.reduce((acc, el) => acc + Number(el.qty), 0)}</Text>
            <Text>Total Price:</Text>
            <Text>${total}</Text>
          </Grid>
        </Box>

        <FormControl>
          <FormLabel>Payment Method</FormLabel>
          <Stack direction="row" spacing={4}>
            <Checkbox
              value="cash"
              isChecked={paymentMethod === "cash"}
              onChange={handlePaymentMethodChange}
            >
              Cash on Delivery
            </Checkbox>
            <Checkbox
              value="card"
              isChecked={paymentMethod === "card"}
              onChange={handlePaymentMethodChange}
            >
              Card
            </Checkbox>
          </Stack>
        </FormControl>

        <Button colorScheme="teal" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </Stack>
    </Box>
  );
};

export default CheckOut;
