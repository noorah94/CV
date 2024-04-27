import { Box, Heading, Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import Title from "../Title";
import { CgExternal } from "react-icons/cg";

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
          - 9 hours and semester date: 2020. <br />
          <Box display="flex">
            - Projects:
            <Heading fontSize="70%">
              <a href="https://drive.google.com/drive/folders/1P_ZNDS6grg_Xxsrt-jcAieFuEREdnMaE?sp=sharing">
                click here
              </a>
            </Heading>
            <CgExternal />
          </Box>
          <br />
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
     
    url("https://t3.ftcdn.net/jpg/01/85/75/08/360_F_185750874_rTbc977EBOkAS5a8lTCuwJYoUqwT0Zkh.jpg")`}
      w="100%"
      //h={["200px", "700px"]}
      p={"4%"}
      // color="white"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Title title={"Education"} />
      <code>
        <Box p="5%" display={["block", "flex"]}>
          {items.map((item, index) => (
            <>
              <Box w={["90%", "40%"]}>
                <Heading fontSize={["200%", "300%"]} fontWeight="bold">
                  0{index + 1}.
                </Heading>
                <Box fontSize={["80%", "150%"]} fontWeight="bold">
                  {item.name}{" "}
                </Box>
                <Box display="flex" fontSize={["60%", "150%"]}>
                  <Box>( {item.grade} )</Box>
                  <Box> - {item.university} </Box>
                </Box>
                <Box p={"6%"} fontSize={["60%", "150%"]}>
                  {item.desc}
                </Box>
              </Box>
              <Spacer />
            </>
          ))}
        </Box>
      </code>
    </Box>
  );
}
