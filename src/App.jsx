import React, { useState, createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./pages/Layout";
import { getTheme } from "./utils/theme";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import Work from "./pages/Work";
export const ThemeContext = createContext();

function App() {
  const [mode, setMode] = useState("light");

  const theme = getTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" index element={<Home />} />
            <Route path="about" index element={<About />} />
            <Route path="work" index element={<Work />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
