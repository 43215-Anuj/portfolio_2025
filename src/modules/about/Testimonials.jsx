import React, { useContext, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "../../utils/data";
import { ThemeContext } from "../../App";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Box, IconButton, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomCard from "../../hoc/Card";
import { useTheme } from "@mui/material/styles";

const Testimonials = () => {
  const theme = useTheme();
  const { mode } = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleUpdateSlide = (direction) => {
    if (direction === "prev") {
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    } else if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <CustomCard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography component={"h2"} variant="title">
          Testimonials
        </Typography>
        <Box>
          <IconButton onClick={() => handleUpdateSlide("prev")}>
            <FaChevronLeft />
          </IconButton>
          <IconButton onClick={() => handleUpdateSlide("next")}>
            <FaChevronRight />
          </IconButton>
        </Box>
      </Box>
      <Carousel
        autoPlay={true}
        centerMode={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
        interval={10000}
        showStatus={false}
        swipeable={true}
        centerSlidePercentage={isMobile ? 100 : 50}
        selectedItem={currentSlide}
        onChange={handleUpdateSlide}
      >
        {testimonials.map((testimonial, i) => {
          return (
            <Box
              key={i}
              sx={{
                width: "95%",
                height: "100%",
                padding: "20px",
                borderRadius: "12px",
                backgroundColor: mode === "light" ? "#f0f2f5" : "#121417",
              }}
            >
              <Box sx={{ display: "flex", gap: "8px" }}>
                <img
                  src={"/" + testimonial.img_src}
                  style={{ height: "50px", width: "50px" }}
                  height={"50px "}
                  width={"50px "}
                  alt={testimonial.name}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    textAlign={"start"}
                    component={"p"}
                    variant="title"
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    textAlign={"start"}
                    component={"p"}
                    variant="caption"
                  >
                    {testimonial.affiliation}
                  </Typography>
                </Box>
              </Box>
              <Typography
                textAlign={"start"}
                marginTop={"8px"}
                component={"p"}
                variant="body2"
              >
                {testimonial.message}
              </Typography>
            </Box>
          );
        })}
      </Carousel>
    </CustomCard>
  );
};

export default Testimonials;
