import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Center bg="#954FBF" fontSize={"130%"} p="3%">
      <SimpleGrid columns={[1]}>
        <Center>
          <SimpleGrid columns={3} spacing={5}>
            <a href="mailto://noorah.almohaimeed@outlook.com">
              {" "}
              <MdEmail />
            </a>
            <a href="https://www.linkedin.com/in/noorah-almohaimeed-نورة-المحيميد-37206a260">
              {" "}
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/noorah94">
              {" "}
              <FaGithub />
            </a>
          </SimpleGrid>
        </Center>

        <Box>Noorah Almohaimeed © 2026</Box>
      </SimpleGrid>
    </Center>
  );
}

export default Footer;
