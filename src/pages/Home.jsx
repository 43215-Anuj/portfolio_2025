import { Grid2 } from "@mui/material";
import React from "react";
import Skills from "../modules/home/Skills";
import Experience from "../modules/home/Experience";
import Education from "../modules/home/Education";

const Home = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
        <Skills />
      </Grid2>
      <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
        <Experience />
      </Grid2>
      <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
        <Education />
      </Grid2>
    </Grid2>
  );
};

export default Home;
