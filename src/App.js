//import logo from "./logo.svg";
import "./App.css";
import Desc from "./components/Desc";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Camps from "./components/Camps";

function App() {
  let components = [<Header />, <Desc />, <Tools />, <Education />, <Footer />];
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Desc /> <Education /> <Achievements /> <Experience />{" "}
              <Projects />
              {/* <Contact /> */}
              {/* <Footer /> */}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
