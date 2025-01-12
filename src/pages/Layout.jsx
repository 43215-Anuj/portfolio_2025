import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Navigation from "../components/Navigation";
import Profile from "../modules/home/Profile.jsx";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Grid container paddingTop="20px" spacing={2}>
        <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }}>
          <Profile />
        </Grid>
        <Grid
          item
          sx={{ overflow: "auto" }}
          size={{ xs: 12, sm: 6, md: 6, lg: 9, xl: 9 }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
