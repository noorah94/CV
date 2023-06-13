import React from "react";
import { Box, Heading, Flex, Spacer } from "@chakra-ui/react";
import Title from "../Title";

export default function Contact() {
  const info = {
    email: "noorah.almohaimeed@outlook.com",
    linkedin:
      "https://www.linkedin.com/in/%D9%86%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D8%AD%D9%8A%D9%85%D9%8A%D8%AF-37206a260/",
  };
  //https://static.vecteezy.com/system/resources/previews/002/935/937/original/dark-purple-background-with-wry-lines-vector.jpg
  return (
    <Box
      bg={`
    
    url("https://cutewallpaper.org/21/dark-purple-backgrounds/4K-Ultra-HD-Dark-Purple-Background.jpg")`}
      w="100%"
      //h={["200px", "700px"]}
      p={"4%"}
      // color="white"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Title title="Contact" />
      <code>
        <Flex p="5%">
          <Box w={"40%"}>
            <Heading fontSize="300%" fontWeight="bold">
              1.Email
            </Heading>
            <Box fontSize={"150%"} fontWeight="bold">
              {info.email}{" "}
            </Box>
          </Box>
          <Spacer />
          <Box w={"40%"}>
            <Heading fontSize="300%" fontWeight="bold">
              2.Linkedin
            </Heading>
            <Box fontSize={"150%"} fontWeight="bold">
              {info.linkedin}{" "}
            </Box>
          </Box>
          <Spacer />
        </Flex>
      </code>
    </Box>
  );
}
