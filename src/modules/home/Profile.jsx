import {
  Alert,
  Box,
  Button,
  Grid2,
  IconButton,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCard from "../../hoc/Card";
import SocialIcon from "../../components/SocialIcon";
import heroImage from "../../assets/react.svg";
import { socialIcons } from "../../utils/data";
import { IoCopyOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const [img, setImage] = useState(true);
  const handleClick = () => {
    setOpen(true);
  };

  const handleContact = (platform) => {
    switch (platform) {
      case "whatsapp":
        window.open(`https://wa.me/+919140810471`, "_blank");
        break;
      case "phone":
        window.open(`tel:+919140810471`, "_blank");
        break;
      case "email":
        navigator.clipboard.writeText("anujkumr123@gmail.com");
        handleClick();
      default:
        break;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prev) => !prev);

      return () => {
        clearInterval(interval);
      };
    }, 5000);
  }, []);

  return (
    <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <CustomCard>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <img
            src={img ? "./hero_image.jpg" : "./hero_img2.jpg"}
            alt="hero_image"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
          <Box sx={{ display: "flex", gap: "8px" }}>
            <h1 style={{ margin: 0 }} className="lato-bold">
              Anuj kumar <span>👋</span>
            </h1>
          </Box>
          <Typography component={"p"} variant="body2">
            Web Developer with over <strong>4 years</strong> of expertise in
            building scalable, responsive and user-centric web applications
            using <strong>React JS, Redux, JavaScript and Webpack.</strong>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "6px",
            }}
          >
            <Button
              sx={{ flexGrow: 1 }}
              startIcon={<FiPhoneCall />}
              variant="contained"
              onClick={() => handleContact("phone")}
            >
              Call
            </Button>
            <Tooltip arrow title="Whatsapp me" placement="top">
              <IconButton
                sx={{ border: "1px solid", borderRadius: "4px" }}
                color="success"
                variant="outlined"
                onClick={() => handleContact("whatsapp")}
              >
                <FaWhatsapp />
              </IconButton>
            </Tooltip>
            <Button
              color="secondary"
              sx={{ flexGrow: 1 }}
              startIcon={<IoCopyOutline />}
              variant="contained"
              onClick={() => handleContact("email")}
            >
              Email
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            {socialIcons.map((socialIcon, i) => (
              <SocialIcon key={i} icon={socialIcon} />
            ))}
          </Box>
        </Box>
      </CustomCard>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Email copied to clipboard
        </Alert>
      </Snackbar>
    </Grid2>
  );
};

export default Profile;
