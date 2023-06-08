import { Button } from "@chakra-ui/react";
import { Box, Center, Heading, Text, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EmptyCard = ({ name }) => {
  return (
    <Center py={12} mt={"10px"}>
      <Box
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        role={"group"}
        mt={"50px"}
        p={6}
        maxW={"330px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize="15px">
            Ohh No!
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {`Your ${name} is Empaty`}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Link to="/">
              <Button colorScheme="pink">Continue Shoping</Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default EmptyCard;
