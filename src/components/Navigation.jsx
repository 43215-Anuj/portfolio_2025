import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../App";
import RoofingRoundedIcon from "@mui/icons-material/RoofingRounded";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import { NavLink } from "react-router";
import { Box, Button, Divider, Tooltip } from "@mui/material";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { mode, setMode } = useContext(ThemeContext);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const menuItems = [
    { title: "Home", icon: <RoofingRoundedIcon fontSize="12px" /> },
    { title: "About", icon: <PersonPinRoundedIcon fontSize="12px" /> },
    { title: "Work", icon: <ContactSupportRoundedIcon fontSize="12px" /> },
  ];

  const handleDownload = async () => {
    try {
      // Fetch data from your server (replace with your API endpoint)
      const response = await fetch("/anuj_resume.pdf", {
        responseType: "blob",
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Anuj_Resume.pdf"); // Set your filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Release the object URL after download is complete
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <AppBar
      elevation={2}
      sx={{
        top: "0px",
        marginTop: "16px",
        padding: "8px 16px",
        borderRadius: "8px",
        backgroundColor: mode === "light" ? "#ffffff" : "#191923",
      }}
      position="sticky"
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img
          width="130px"
          height="auto"
          style={{ borderRadius: "4px" }}
          src={mode === "light" ? "/logo_l.png" : "/logo_d.png"}
          alt="hero_icon"
        />
        {isMobile ? (
          <>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  <NavLink
                    to={item?.title.replace(" ", "-").toLowerCase()}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      alignItems: "center",
                      color: isActive
                        ? mode === "light"
                          ? "#0fa3b1"
                          : "#ffffff"
                        : mode === "light"
                        ? "#576076"
                        : "#ffffff",
                    })}
                  >
                    {item.icon}
                    <Typography variant="title" sx={{ marginLeft: "6px" }}>
                      {item.title}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
              <Divider variant="fullWidth" />
              <MenuItem color="primary" onClick={handleDownload}>
                <FaDownload size={12} style={{ marginRight: "4px" }} />
                Resume
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex" }}>
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item?.title.replace(" ", "-").toLowerCase()}
                style={({ isActive }) => ({
                  gap: "4px",
                  padding: "4px",
                  display: "flex",
                  padding: "8px 12px",
                  margin: "0 8px ",
                  borderRadius: "6px",
                  alignItems: "center",
                  textDecoration: "none",
                  color: mode === "light" ? "#576076" : "#ffffff",
                  backgroundColor: isActive
                    ? mode === "light"
                      ? "#f0f2f5"
                      : "#43474d"
                    : "",
                })}
              >
                {item.icon}
                <Typography variant="title">{item.title}</Typography>
              </NavLink>
            ))}
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: "12px" }}>
          {isMobile ? null : (
            <Button
              variant="contained"
              color="primary"
              startIcon={<FaDownload size={12} />}
              onClick={handleDownload}
            >
              Resume
            </Button>
          )}
          <Tooltip arrow title="Updated theme">
            <IconButton variant="contained" onClick={toggleTheme}>
              {mode === "light" ? (
                <LightModeIcon color="warning" />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Tooltip>

          {isMobile ? (
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
