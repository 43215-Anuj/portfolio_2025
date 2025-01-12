import React, { useContext } from "react";
import CustomCard from "../../hoc/Card";
import { Box, Divider, Typography } from "@mui/material";
import { experience } from "../../utils/data";
import { ThemeContext } from "../../App";

const Experience = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <CustomCard>
      <Typography component={"h2"} variant="title">
        Experience
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {experience.map((exp, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              padding: "8px",
              flexDirection: "column",
              borderRadius: "8px",
              gap: "8px",
              backgroundColor: mode === "light" ? "#f0f2f5" : "#121417",
            }}
          >
            <Box sx={{ display: "flex", gap: "8px" }}>
              <Typography sx={{ width: "100px" }} variant="body1">
                {exp.duration}
              </Typography>
              <Box sx={{ display: "flex", gap: "8px" }}>
                <img
                  style={{ borderRadius: "4px" }}
                  src={"/" + exp.image}
                  alt={exp.institute}
                  width={"60px"}
                  height={"60px"}
                />
                <Box>
                  <Typography variant="body1">{exp.institute}</Typography>
                  <Typography variant="body2">{exp.position}</Typography>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ width: "100%", color: "#e3e3e3" }} />
            <Typography sx={{ textAlign: "center" }} variant="body2">
              {exp.achievement}
            </Typography>
          </Box>
        ))}
      </Box>
    </CustomCard>
  );
};

export default Experience;
