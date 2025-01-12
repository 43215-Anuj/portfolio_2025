import { Box, Typography } from "@mui/material";
import React from "react";

const Error404 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h1" component={"h1"}>
        Error404
      </Typography>
    </Box>
  );
};

export default Error404;
