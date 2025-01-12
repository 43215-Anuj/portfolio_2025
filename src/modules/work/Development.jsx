import { Box, Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import CustomCard from "../../hoc/Card";
import { develop } from "../../utils/data";
import { ThemeContext } from "../../App";

const Development = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <CustomCard>
      <Typography component={"h2"} variant="title">
        Development
      </Typography>
      <Typography component={"p"} variant="body2">
        A list of personal projects I've worked on.
      </Typography>
      <Grid2 container spacing={2}>
        {develop.map((dev, i) => (
          <Grid2 key={i} item size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px",
                borderRadius: "12px",
                backgroundColor: mode === "light" ? "#f0f2f5" : "#121417",
              }}
            >
              <img
                src={dev.thumbnail}
                alt={dev.proj_name}
                width={"100%"}
                height={"auto"}
              />
              <a
                href={dev.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", margin: "0" }}
              >
                <Typography
                  variant="body1"
                  component={"p"}
                  color="primary"
                  sx={{ textDecoration: "none" }}
                >
                  {dev.proj_name}
                </Typography>
              </a>
              <Typography variant="caption" textAlign={"center"}>
                {dev.description}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </CustomCard>
  );
};

export default Development;
