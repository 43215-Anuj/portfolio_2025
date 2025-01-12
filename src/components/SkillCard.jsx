import { Box, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../App";

const SkillCard = (props) => {
  const { skill } = props;
  const { icon: Icon } = skill;
  const { mode } = useContext(ThemeContext);

  return (
    <Grid
      item
      size={{ xs: 4, sm: 4, md: 2, lg: 2, xl: 2 }}
      sx={{ padding: "12px 12px 0 0" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            border:
              mode === "light" ? "1px solid #f0f2f5" : "1px solid #43474c",
            borderRadius: "8px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 2px",
            backgroundColor: mode === "light" ? "#f0f2f5" : "#43474c",
          }}
        >
          {Icon ? Icon : ""}
        </Box>
        <Tooltip title={skill.name} arrow>
          <Typography
            component={"h5"}
            variant="body2"
            sx={{
              textAlign: "center",
              textWrap: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "100%",
            }}
          >
            {skill.name}
          </Typography>
        </Tooltip>
      </Box>
    </Grid>
  );
};

export default SkillCard;
