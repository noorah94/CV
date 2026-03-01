import { Box, Badge, Image, Flex, Spacer } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";

export default function Tools() {
  const tools = [
    "Flutter",
    "React",
    ".NET API",
    "Express.js",
    "MongoDB",
    "SQL",
    "SQLite",
    "Firebase",
    "React native",
  ];
  const progarmming = [
    "dart",
    "Typescript",
    "javascript",
    "python",
    "c#",
    "java",
    "c++",
  ];

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
      <Flex
        marginTop={["5%", "3%"]}
        w={["100%", "60%"]}
        gap={1}
        flexWrap="wrap"
      >
        Tools:
        {/* {progarmming[index]} */}
        {tools.map((item, ind) => (
          <>
            {/* <Spacer /> */}
            <Badge
              borderRadius="lg"
              px="2"
              bg="#9540AC"
              textShadow="1px 1px #ff0000"
            >
              {item}
            </Badge>
          </>
        ))}
      </Flex>
      <Flex
        marginTop={["5%", "2%"]}
        w={["100%", "60%"]}
        gap={1}
        flexWrap="wrap"
      >
        Programming language:
        {progarmming.map((item) => (
          <>
            {/* <Spacer /> */}
            <Badge
              borderRadius="lg"
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
