import { Box } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

const CustomCard = ({ children }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <Box
      sx={{
        border: mode === "light" ? "1px solid #dee2e6" : "1px solid #191923",
        backgroundColor: mode === "light" ? "#ffffff" : "#191923",
        borderRadius: "8px",
        padding: "12px",
        gap: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default CustomCard;
