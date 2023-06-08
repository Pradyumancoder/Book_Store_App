import React, { useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  DrawerFooter,
  Box,
  Card,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSearchBooks } from "../Redux/Books/books.Action";

export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { searchResult } = useSelector((store) => store.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchBooks(query));
  }, [query, dispatch]);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Box display={"flex"} gap={"6px"}>
        <Text>Search </Text>
        <SearchIcon fontSize="xl" onClick={onOpen} />
      </Box>
      <Drawer placement="top" onClose={handleClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent mt="30px" p="10px">
          <DrawerBody gap={2}>
            <InputGroup>
              <Input
                type="search"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a Movie..."
              />
              <InputRightElement
                children={
                  <IconButton
                    aria-label="Search books"
                    bg="black"
                    onClick={() => dispatch(getSearchBooks(query))}
                    icon={<SearchIcon />}
                  />
                }
              />
            </InputGroup>
          </DrawerBody>
          {searchResult.length > 0 && query !== "" && (
            <DrawerFooter>
              <Box
                width="full"
                display="flex"
                flexDirection="column"
                gap={2}
                p={2}
                maxH="200px"
                overflowY="scroll"
              >
                {searchResult &&
                  searchResult.map((ele, i) => {
                    return (
                      <NavLink
                        to={`/detail/${ele._id}`}
                        key={i}
                        onClick={onClose}
                      >
                        <Card
                          height={"100px"}
                          width="100%"
                          direction={"row"}
                          variant="outline"
                          px={4}
                          alignItems={"center"}
                        >
                          <Image
                            objectFit="cover"
                            my="auto"
                            height="100%"
                            width={"auto"}
                            src={ele.image}
                            alt={ele._id}
                            padding="10px"
                          />
                          <Heading size="sm">{ele.title}</Heading>
                        </Card>
                      </NavLink>
                    );
                  })}
              </Box>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
