import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import React from "react";

function Header() {
  return (
    <Flex bg="black">
      <Spacer />
      <Box p="1%">
        {" "}
        <Menu>
          <MenuButton
            p="1%"
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon boxSize={"80%"} />}
            variant="unstyled"
          />
          <MenuList>
            <MenuItem command="⌘T">New Tab</MenuItem>
            <MenuItem command="⌘N">New Window</MenuItem>
            <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
            <MenuItem command="⌘O">Open File...</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Header;
