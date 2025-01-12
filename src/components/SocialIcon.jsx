import { Tooltip } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import { ThemeContext } from "../App";

function SocialIcon(props) {
  const { icon } = props;
  const { mode } = useContext(ThemeContext);
  const [tooltipState, setTooltipState] = useState(false);
  const [Logo, setLogo] = useState();

  useEffect(() => {
    var newIcon = React.createElement(FaIcons[icon.icon], {
      size: "22px",
      style: { color: "#64758b" },
    });
    setLogo(newIcon);
  }, [icon]);

  function toggle() {
    setTooltipState(!tooltipState);
  }

  return (
    <Tooltip arrow title={icon.icon.slice(2)} placement="bottom">
      <a
        style={{
          marginRight: "10px",
          backgroundColor: mode === "light" ? "#ffffff" : "#121417",
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
          borderRadius: "6px",
          padding: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "6px",
        }}
        id={icon.icon}
        rel="noreferrer"
        target="_blank"
        href={icon.url}
      >
        {Logo}
      </a>
    </Tooltip>
  );
}

export default SocialIcon;
