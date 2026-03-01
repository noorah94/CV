import React from "react";
import { SimpleGrid, Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import Title from "../Title";

export default function Experience() {
  const items = [
    {
      job: "Technical Support",
      company: "New Horizons Institute",
      time: "2016/07 - 2016/09",
      info: [
        "A collaborative training when I was studying at Qassim University and its duration was 8 weeks.",
        "Maintenance of computers, download the required software and format the computers.",
      ],
    },
    {
      job: "Mobile applications developer",
      company: "T2",
      time: "2023/03 - 2023/07",
      info: [
        "Developing applications with Flutter for android & iphone.",
        "Developing with Firebase, rest APIs, local storage and animation.",
      ],
    },
    {
      job: "Mobile applications developer",
      company: "Qassim Municipality",
      time: "2023/09 - Present",
      info: [
        "Developing applications with Flutter for android & iphone.",
        "Developing with google map, rest APIs, local storage, state management, animation and other.",
        "Upload applications to App Store and Google Play.",
        "Create solutions to solve cybersecurity attacks.",
      ],
    },
  ];
  return (
    <>
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.0)
    ),
    url("background.jpg")`}
        // h={["200px", "700px"]}
        p={"4%"}
        // color="white"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Title title="Experience" />
        <code>
          <Grid
            templateColumns="repeat(3, 1fr)" // تقسيم الشبكة إلى 3 أعمدة متساوية
            // gap={4}
          >
            <GridItem colSpan={2}>
              <Box p="4%">
                <Heading fontSize={["120%", "200%"]} fontWeight={"bold"}>
                  {items[2].job}
                </Heading>

                <hr style={{ color: "white" }} />
                <Box marginTop={"4%"}>
                  {items[2].info.map((item) => (
                    <li>{item}</li>
                  ))}
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                borderWidth="medium"
                borderStyle=" none none none solid"
                borderColor={"gold"}
                //height="80px"
                paddingLeft="3%"
                color={"gold"}
              >
                <Heading fontSize="300%">3</Heading>
                <Heading fontSize="100%"> {items[2].company} company</Heading>
                <Heading>({items[2].time})</Heading>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                borderWidth="medium"
                borderStyle=" none solid none none"
                borderColor={"gold"}
                //height="80px"
                p="3%"
                color={"gold"}
              >
                <Heading textAlign={"right"} fontSize="300%">
                  2
                </Heading>
                <Heading textAlign={"right"} fontSize="100%">
                  {" "}
                  {items[1].company} company
                </Heading>
                <Heading textAlign={"right"}>({items[1].time})</Heading>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box p="4%">
                <Heading fontSize={["120%", "200%"]} fontWeight={"bold"}>
                  {items[1].job}
                </Heading>

                <hr style={{ color: "white" }} />
                <Box marginTop={"4%"}>
                  {items[1].info.map((item) => (
                    <li>{item}</li>
                  ))}
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box p="4%">
                <Heading fontSize={["120%", "200%"]} fontWeight={"bold"}>
                  {items[0].job}
                </Heading>

                <hr style={{ color: "white" }} />
                <Box marginTop={"4%"}>
                  {items[0].info.map((item) => (
                    <li>{item}</li>
                  ))}
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                borderWidth="medium"
                borderStyle=" none none none solid"
                borderColor={"gold"}
                //height="80px"
                p="3%"
                color={"gold"}
              >
                <Heading fontSize="300%">1</Heading>
                <Heading fontSize="100%"> {items[0].company} company</Heading>
                <Heading>({items[0].time})</Heading>
              </Box>
            </GridItem>
          </Grid>
        </code>
      </Box>
    </>
  );
}
