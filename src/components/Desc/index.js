import React from "react";
import { Box, Center, Container, VStack } from "@chakra-ui/react";
import Tools from "../Tools";

function Desc() {
  //and I want to participate in inventing new technologies that contribute to the development
  const name = "Noorah Almohaimeed";
  const job = "Mobile applications & web developer";
  const desc =
    "Graduate of information technology interested in new technologies and projects that contribute to the development of the Kingdom Saudi Arabia, and I want a job where I can achieve this goal. In addition, I love programming and I am constantly keen to develop my skills through websites such as Coderhub, GeeksforGeeks, and HackerRank.";

  //borderWidth="1px"

  // linear-gradient(0deg,
  //     rgba(0, 0, 0, 0.40),
  //     rgba(0, 0, 0, 0.60)
  //   ),

  return (
    <>
      <Box
        bg={`
    url("https://j.gifs.com/y0LB09.gif")`}
        w="100%"
        //h={["200px", "700px"]}
        p={"4%"}
        // color="white"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <code>
          <Box
            marginTop={"5%"}
            marginLeft={"5%"}
            borderWidth="medium"
            borderStyle=" none none none solid"
            borderColor={"white"}
            p="1%"
            w={["80%", "45%"]}
            // color={"#9540AC"}
            textShadow="1px 1px #ff0000"
            // textShadow="1px 1px #ffffff"
          >
            <Box fontSize={["200%", "300%"]}>{name}</Box>
            <Box fontSize={["100%", "200%"]}>{job}</Box>
          </Box>
          <Box
            fontSize={["70%", "100%"]}
            w={["100%", "70%"]}
            // textShadow="1px 1px #ff0000"
            marginTop={"5%"}
          >
            {"   " + desc}
          </Box>
          <Tools />
        </code>
      </Box>
    </>
  );
}

export default Desc;
