import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./banner.css";
const Banner = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <Box
      className="m-scroll"
      sx={{
        zIndex: 1,
        width: "100%",
        margin: "auto",
        padding: "10px",
        display: "flex",
        height: "100px",
        overflow: "hidden",
        borderRadius: "8px",
        position: "relative",
        backgroundColor: mode === "light" ? "#f0f2f5" : "#121417",
      }}
    >
      <Box
        className="m-scroll__title"
        sx={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          position: "absolute",
          alignItems: "center",
          whiteSpace: "nowrap",
          transform: "scale(1)",
          transition: "all 1s ease",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "auto",
            alignItems: "center",
            animation: "scrollText 5s infinite linear",
          }}
        >
          <Typography
            variant="h1"
            component={"p"}
            sx={{
              color: "#576076",
              margin: 0,
              transition: "all 1s ease",
            }}
          >
            Learn, Build &amp; Grow &nbsp;
          </Typography>
          <Box
            sx={{
              margin: "0 20px",
              width: "14px",
              height: "14px",
              borderRadius: "50px",
              backgroundColor: "#576076",
            }}
          />
          <Typography
            variant="h1"
            component={"p"}
            sx={{
              color: "#576076",
              margin: 0,
              transition: "all 1s ease",
            }}
          >
            Learn, Build &amp; Grow &nbsp;
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
