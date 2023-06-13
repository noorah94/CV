import { Box, Badge, Image, Flex, Spacer } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";

export default function Tools() {
  const tools = [
    "Flutter",
    "Firebase",
    "React",
    "Express.js",
    "MongoDB",
    "SQL",
    "SQLite",
    "React native",
  ];
  const progarmming = ["javascript", "dart", "python", "java", "c++", "c#"];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(index + 1);
      if (index === tools.length - 1) {
        setIndex(0);
      }
    }, 500);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <>
      <Flex marginTop={"3%"} w="60%">
        Tools:
        {/* {progarmming[index]} */}
        {tools.map((item, ind) => (
          <>
            <Spacer />
            <Badge
              borderRadius="full"
              px="2"
              bg="#9540AC"
              textShadow="1px 1px #ff0000"
            >
              {item}
            </Badge>
          </>
        ))}
      </Flex>
      <Flex marginTop={"2%"} w="50%">
        Programming language:
        {progarmming.map((item) => (
          <>
            <Spacer />
            <Badge
              borderRadius="full"
              px="2"
              bg="#9540AC"
              textShadow="1px 1px #ff0000"
            >
              {item}
            </Badge>
          </>
        ))}
      </Flex>
    </>
  );
}
