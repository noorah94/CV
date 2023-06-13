import { Box, Heading, Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";

export default function Education() {
  const items = [
    {
      name: "Bachelor of information technology",
      grade: "4.5 out of 5",
      university: "Qassim University",
      desc: (
        <>
          - With second class honors.
          <br />- Graduation date: 2018-05-17.
        </>
      ),
    },
    {
      name: "One semester in master of computer science",
      grade: "5 out of 5 ",
      university: "Qassim University",
      desc: (
        <>
          - 9 hours and semester date: 2020. <br />- Projects:
          <br />
          {
            <a href="https://drive.google.com/drive/folders/1P_ZNDS6grg_Xxsrt-jcAieFuEREdnMaE?sp=sharing">
              https://drive.google.com/drive/folders/1P_ZNDS6grg_Xxsrt-jcAieFuEREdnMaE?sp=sharing
            </a>
          }
        </>
      ),
    },
  ];
  //https://wallpapers.com/images/hd/purple-texture-background-4isfyxdqkvy3006f.jpg
  //https://i.pinimg.com/originals/6e/0f/d6/6e0fd69a36ee8bbf9504f3132c79faff.jpg

  //  linear-gradient(0deg,
  //     rgba(0, 0, 0, 0.90),
  //     rgba(0, 0, 0, 0.10)),

  return (
    <Box
      bg={`
     
    url("https://cutewallpaper.org/21/dark-purple-backgrounds/4K-Ultra-HD-Dark-Purple-Background.jpg")`}
      w="100%"
      h={["200px", "700px"]}
      p={"4%"}
      // color="white"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <code>
        <Heading fontSize="300%" textAlign={"center"} fontWeight="bold">
          Education
        </Heading>

        <Flex p="5%">
          {items.map((item, index) => (
            <>
              <Box w={"40%"}>
                <Heading fontSize="300%" fontWeight="bold">
                  0{index + 1}.
                </Heading>
                <Box fontSize={"150%"} fontWeight="bold">
                  {item.name}{" "}
                </Box>
                <Box display="flex">
                  <Box>( {item.grade} )</Box>
                  <Box> - {item.university} </Box>
                </Box>
                <Box p={"6%"}>{item.desc}</Box>
              </Box>
              <Spacer />
            </>
          ))}
        </Flex>
      </code>
    </Box>
  );
}
