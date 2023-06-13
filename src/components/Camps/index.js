import React from "react";
import { Box } from "@chakra-ui/react";

export default function Camps() {
  const itmes = [
    {
      name: "Tuwaiq 1000 javascript camp",
      date: "2022",
      place: "Alqassim",
      company: "Tuwaiq",
      desc: [],
    },
    {
      name: "Full stack .Net camp",
      date: "2021",
      place: "online",
      company: "",
      desc: [],
    },
    {
      name: "Tipyan camp",
      date: "2019",
      place: "Buraydah",
      company: "",
      desc: [],
    },
  ];

  return (
    <>
      {" "}
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 1.0),
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
        cvvc
      </Box>
    </>
  );
}
