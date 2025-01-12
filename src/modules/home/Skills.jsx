import React from "react";
import { skills } from "../../utils/data";
import { Grid2, Typography } from "@mui/material";
import CustomCard from "../../hoc/Card";
import SkillCard from "../../components/SkillCard";

const Skills = () => {
  return (
    <CustomCard>
      <Typography component={"h2"} variant="title">
        Skills
      </Typography>
      <Grid2 container>
        {skills.map((skill, i) => {
          return <SkillCard key={i} skill={skill} />;
        })}
      </Grid2>
    </CustomCard>
  );
};

export default Skills;
