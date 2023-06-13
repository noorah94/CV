import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        //bg: "black",
        color: "white",
      },
    },
  },
  components: {
    Button,
  },
});

// const theme = extendTheme({
//   styles: {
//     global: {
//       // styles for the `body`
//       body: {
//         bg: "#e5e5e5",
//         // color: "white",
//       },
//       // styles for the `a`
//       // a: {
//       //   color: "teal.500",
//       //   _hover: {
//       //     textDecoration: "underline",
//       //   },
//       // },
//     },
//   },
// });

root.render(
  <ChakraBaseProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraBaseProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
