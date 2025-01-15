import { Divider, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../../hoc/Card";
import TechStack from "./TechStack";

const Intro = () => {
  return (
    <CustomCard>
      <Typography variant="h1" component={"h1"}>
        Hi there! I'm{" "}
        <Typography component={"span"} variant="h1" color="primary">
          Anuj 👋
        </Typography>
      </Typography>
      <Divider variant="fullWidth" />
      <Typography variant="body2" component={"p"}>
        Welcome to my page! <br />
        I'm Frontend developer from Lucknow, currently living in Delhi, India.
      </Typography>
      <Typography variant="body1" component={"p"}>
        A <strong>two time hackathon winner 🖥️</strong> and an experienced Web
        Developer with over <strong>4 years of expertise</strong> in building
        scalable, responsive and usercentric web applications using React JS,
        Redux, JavaScript and Webpack. Proficient in design tools like Figma,
        with a hands-on experienced in AWS based micro services and Docker for
        DevOps.
      </Typography>
      <Divider variant="fullWidth" sx={{ marginBottom: "8px" }} />
      <TechStack />
    </CustomCard>
  );
};

export default Intro;
