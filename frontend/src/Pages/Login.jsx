import {
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { login } from "../Redux/Auth/Auth.action";

// Initial state for login details
const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginDetails, setLoginDetails] = useState(initState);
  const { email, password } = loginDetails;
  const { loading, authData, error } = useSelector((store) => store.auth);
  const { isAuthenticated } = authData;
  const { message, isError } = error;
  const { state } = useLocation();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handles input change event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  // Handles key press event (Enter key) for submitting the login form
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  // Handles login attempt
  const handleLogin = async () => {
    if (email === "" || password === "") {
      return alert("fill both credentials");
    }
    dispatch(login(loginDetails));
    if (isAuthenticated) {
      toast({
        title: "Login Success.",
        description: "Now you can explore.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      if (state !== null) {
        navigate(state, { replace: true });
      } else {
        navigate("/");
      }
    }

    if (isError) {
      toast({
        title: "Login Failed.",
        description: `${message}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <Container
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        width="full"
        maxWidth="400px"
        borderRadius="lg"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        p={4}
      >
        <Heading
          fontWeight="bolder"
          textAlign="center"
          fontSize="20px"
          mb="20px"
        >
          LOGIN FORM
        </Heading>
        <FormControl p={2}>
          <Input
            name="email"
            value={email}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Enter Email"
            borderRadius="lg"
            focusBorderColor="teal.100"
            required
          />
        </FormControl>
        <FormControl p={2}>
          <Input
            name="password"
            value={password}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            type="password"
            placeholder="Enter password"
            borderRadius="lg"
            focusBorderColor="teal.100"
            required
          />
        </FormControl>

        <FormControl>
          <Button
            isLoading={loading}
            loadingText="Submitting"
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
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </FormControl>
        <FormControl>
          <Button
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
            onClick={handleSignUp}
          >
            SIGN UP
          </Button>
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Login;
