import React from "react";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function MBS() {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
      ]}
      //marginTop="10%"
      bg="black"
      color="#D1C275"
    >
      <GridItem p="7%" textAlign="center">
        <Heading
          fontSize={["200%", "310%", "420%", "550%"]}
          fontFamily="Cormorant Garamond"
        >
          {" "}
          <q>
            {" "}
            طموحنا أن نبني وطنًا أكثر ازدهارًا؛ يجد فيه كل مواطن ما يتمناه{" "}
          </q>
        </Heading>

        <Text
          fontFamily="Cormorant Garamond"
          fontSize={["100%", "130%", "170%", "200%"]}
        >
          محمد بن سلمان بن عبدالعزيز{" "}
        </Text>
      </GridItem>
      <GridItem
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
    ),
    url("${"/m.jpeg"}")`}
        h={["400px", "400px", "500px", "500px"]}
      ></GridItem>
    </Grid>
  );
}
