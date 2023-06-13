import {
  Box,
  Image,
  Table,
  Thead,
  Tr,
  Tbody,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import Title from "../Title";
import "./style.css";

export default function Achievements() {
  const items = [
    {
      name: "Graduation project",
      placeName: "Qassim University",
      rank: 1,
      info: (
        <>
          <li>
            Participated in Takaful competition and the project got the first
            place in the competition.
          </li>
          <li>
            Graduation Project: It has been building a new authentication system
            against the Shoulder Surfing attack and 9 Android versions were
            designed to increase security and usability. After that, enhanced
            versions of the system have been created for the elderly and blind
            people to know the quality of security and usability of the system
            and testing the system on various segments of society.
          </li>
          <li>
            More info about project:
            <a href="https://drive.google.com/drive/folders/138dbHiiainHHvy_OrpSAInSYPSWdjfA1?usp=sharing">
              click here
            </a>
          </li>
        </>
      ),
    },
  ]; //https://media.baamboozle.com/uploads/images/128794/1631114455_153950_gif-url.gif
  return (
    <>
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.0)
    ),
    url("https://cutewallpaper.org/21/dark-purple-backgrounds/4K-Ultra-HD-Dark-Purple-Background.jpg")`}
        h={["200px", "700px"]}
        p={"4%"}
        // color="white"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Title title="Achievements" />
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Rank</th>
          </tr>
          {items.map((item) => (
            <tr>
              <td style={{ width: "20%" }}>
                {" "}
                {item.name} in {item.placeName}
              </td>
              <td style={{ width: "70%" }}>{item.info}</td>
              <td style={{}}>
                <Image src="https://media.baamboozle.com/uploads/images/128794/1631114455_153950_gif-url.gif" />
              </td>
            </tr>
          ))}
        </table>
        {/* <TableContainer w="100%">
          <Table variant="simple" w="100%">
            <Thead border="1px solid #ddd">
              <Tr>
                <Th>Name</Th>
                <Th w="10%">Description</Th>
                <Th>Rank</Th>
              </Tr>
            </Thead>
            <Tbody border="1px solid #ddd">
              {items.map((item) => (
                <Tr>
                  <Td>
                    {item.name} in {item.placeName}
                  </Td>
                  <Td w="10%">{item.info}</Td>
                  <Td>25.4</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer> */}
      </Box>
    </>
  );
}
