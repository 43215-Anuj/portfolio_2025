import { createTheme } from "@mui/material";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#0fa3b1",
      },
      secondary: {
        main: "#877eff",
      },
      error: {
        main: "#e71d36",
      },
      warning: {
        main: "#ffca3a",
      },
      info: {
        main: "#4C6FFF",
      },
      success: {
        main: "#8ac926",
        dark: "#7bb222",
      },
    },
    typography: {
      fontFamily: [
        "Raleway-Regular",
        "Raleway-Medium",
        "Raleway-SemiBold",
        "Raleway-Bold",
        "Raleway-ExtraBold",
      ].join(","),
      h1: {
        fontSize: "38px",
        fontFamily: "Raleway-Bold",
      },
      h2: {
        fontSize: "28px",
        fontWeight: 600,
        fontFamily: "Raleway-Regular",
      },
      h5: {
        fontSize: "20px",
        fontFamily: "Raleway-SemiBold",
      },
      h6: {
        fontSize: "16px",
        fontFamily: "Raleway-SemiBold",
      },
      title: {
        fontFamily: "Raleway-ExtraBold",
      },
      body1: {
        fontFamily: "Raleway-Medium",
      },
      body2: {
        fontFamily: "Raleway-Regular",
      },
      caption: {
        fontFamily: "Raleway-Regular",
      },
    },
  });
