import {
  SimpleGrid,
  Box,
  Heading,
  Flex,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import Title from "../Title";

export default function Projects() {
  const itmes = [
    { title: "Weather Application", desc: "", tools: ["Flutter", "Rest API"] },
    { title: "Todo Application", desc: "", tools: ["Flutter"] },
    { title: "Quizzes Application", desc: "", tools: ["Flutter"] },
    { title: "News Application", desc: "", tools: ["Flutter", "Rest API"] },
    { title: "Chat Application", desc: "", tools: ["Flutter", "Firebase"] },
    { title: "Game", desc: "", tools: ["React"] },
    // { title: "", desc: "", tools: [] },
  ];
  //<Image src="https://i.pinimg.com/originals/fa/36/0e/fa360e5c573f1fa9b59f561b645c51ae.gif" />

  return (
    <Box
      bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.0)
    ),
    url("https://cutewallpaper.org/21/dark-purple-backgrounds/4K-Ultra-HD-Dark-Purple-Background.jpg")`}
      // h={["200px", "700px"]}
      p={"4%"}
      // color="white"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Title title="Projects" />
      <code>
        <SimpleGrid columns={4} spacing={10}>
          {itmes.map((item) => (
            <Box
              borderWidth={"1px"}
              borderStyle="solid"
              borderColor="whiteAlpha.400"
              p="3%"
              //borderRadius={"3xl"}
              //height="80px"
            >
              <Heading textAlign={"center"}>{item.title}</Heading>
              <hr style={{ color: "gold" }} />
              <Flex p="3%">
                Tools:
                {/* {progarmming[index]} */}
                {item.tools.map((item, ind) => (
                  <>
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
            </Box>
          ))}
        </SimpleGrid>
      </code>
    </Box>
  );
}
