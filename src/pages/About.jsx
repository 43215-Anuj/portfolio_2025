import { Divider, Grid2 } from "@mui/material";
import React from "react";
import Intro from "../modules/about/Intro";
import Testimonials from "../modules/about/Testimonials";
import Banner from "../modules/about/Banner";

const About = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2
        item
        size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
        sx={{
          flexDirection: "column",
          gap: "16px",
          display: "flex",
          marginBottom: "12px",
        }}
      >
        <Intro />
        
        <Testimonials />
        <Banner />
      </Grid2>
    </Grid2>
  );
};

export default About;
