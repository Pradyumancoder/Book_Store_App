import { Button } from "@chakra-ui/react";
import { Box, Center, Heading, Text, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EmptyCard = ({ name }) => {
  return (
    <Center py={12} mt={"10px"}>
      <Box
        className="group"
        mt={"50px"}
        p={6}
        maxW={"330px"}
        w={"full"}
        shadow="2xl"
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          h={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            bgImage:
              "url('https://restaurant-e-commerce-website-m2yp.vercel.…p/static/media/empty-red.5309741357a4288595a9.gif')",
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
            h={"fit-content"}
            w={"fit-content"}
            objectFit={"cover"}
            src="https://restaurant-e-commerce-website-m2yp.vercel.app/static/media/empty-red.5309741357a4288595a9.gif"
          />
        </Box>
        <Stack pt={10} align={"center"} marginTop={"9px"}>
          
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {`Your ${name} is Empty`}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Link to="/">
              <Button colorScheme="yellow">Continue Shopping</Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default EmptyCard;
