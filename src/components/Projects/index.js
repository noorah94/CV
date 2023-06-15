import { SimpleGrid, Box, Heading, Flex, Badge } from "@chakra-ui/react";
import React from "react";
import Title from "../Title";

export default function Projects() {
  const itmes = [
    {
      title: "Weejhaty website",
      link: "https://weejhaty2.onrender.com/",
      github: "https://github.com/MP-Project-Noorah",
      tools: ["React", "Express.js", "MongoDB", "Rest API"],
    },
    {
      title: "Game website",
      link: "https://game-kvj5.onrender.com",
      github: "https://github.com/noorah15/Cap1",
      tools: ["React"],
    },
    {
      title: "Historical mosques website",
      link: "https://noorah94.github.io/mosques/mosques.html",
      github: "https://github.com/noorah15/U01P01",
      tools: ["html"],
    },
    {
      title: "Flash Chat Application",
      link: "none",
      github: "https://github.com/noorah94/FlashChat",
      tools: ["Flutter", "Rest API", "Firebase"],
    },
    {
      title: "Weight Application",
      link: "none",
      github: "https://github.com/noorah94/Weight",
      tools: ["Flutter"],
    },
    {
      title: "Weather Application",
      link: "none",
      github: "https://github.com/noorah94/Weather",
      tools: ["Flutter", "Rest API"],
    },
    {
      title: "Todo Application with Provider lib",
      link: "none",
      github: "https://github.com/noorah94/TodoWithProvider",
      tools: ["Flutter"],
    },
    {
      title: "Todo Application with Bloc lib",
      link: "none",
      github: "https://github.com/noorah94/todoWithBloc",
      tools: ["Flutter"],
    },

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
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
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
              <Heading>
                link:{" "}
                {item.link == "none" ? (
                  "none"
                ) : (
                  <a href={item.link}>click here</a>
                )}
              </Heading>
              <Heading>
                github: <a href={item.github}>click here</a>
              </Heading>
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
