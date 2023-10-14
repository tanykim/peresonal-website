import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":projectId" element={<ProjectPage />} />
        <Route path="*" element={<div>no match</div>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
