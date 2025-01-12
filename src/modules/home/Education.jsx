import React, { useContext } from "react";
import CustomCard from "../../hoc/Card";
import { Box, Divider, Typography } from "@mui/material";
import { education } from "../../utils/data";
import { FaAward } from "react-icons/fa";
import { ThemeContext } from "../../App";
const Education = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <CustomCard>
      <Typography component={"h2"} variant="title">
        Education
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {education.map((edu, i) => (
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
                {edu.duration}
              </Typography>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ color: "#e3e3e3" }}
              />
              <Box sx={{ display: "flex", gap: "8px" }}>
                <Box>
                  <Typography variant="body1">{edu.title}</Typography>
                  <Typography variant="body2">{edu.institute}</Typography>
                  <Box
                    sx={{ display: "flex", gap: "4px", alignItems: "center" }}
                  >
                    <FaAward size={"14px"} />
                    <Typography variant="caption">{edu.score}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </CustomCard>
  );
};

export default Education;
