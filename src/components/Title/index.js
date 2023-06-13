import { Box, Heading, Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";

export default function Title({ title }) {
  return (
    <code>
      <Heading
        fontSize={["180%", "300%"]}
        textAlign={"center"}
        fontWeight="bold"
        marginBottom={"5%"}
      >
        {title}
      </Heading>
    </code>
  );
}
