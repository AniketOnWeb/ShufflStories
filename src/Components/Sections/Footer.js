import {
  Box,
  makeStyles,
  useTheme,
  Typography,
  Popper,
  Fade,
  fade,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import CustomSvg from "../../Common/CustomSvg";
import houseJson from "../../Common/house.json";
import Lottie from "react-lottie";

const useStyles = makeStyles((theme) => ({
  regularHigh12: theme.regularHigh12,

  heroWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  normalText: {
    cursor: "pointer",
    lineHeight: "2rem",
    letterSpacing: "0",
    fontSize: "2rem",
    color: theme.colorPreset.lowEmphasisDark,
    fontWeight: "400",
  },
  paper: {
    // border: ".15rem solid #424141",
    padding: "0 1.6rem",
    backgroundColor: "#393838",
    borderRadius: ".4rem",
    transform: "translateY(-1rem)",
  },
}));
const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: houseJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box padding="0 15.5rem" className={classes.heroWrapper}>
      <Box
        aria-describedby={id}
        onMouseEnter={handleClick}
        onMouseLeave={() => setAnchorEl(null)}
      >
        <Typography className={classes.normalText}>Home</Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography className={classes.normalText}>Support us</Typography>
        <Box
          ml="2.4rem"
          mr="2.4rem"
          style={{
            height: "2rem",
            backgroundColor: theme.colorPreset.lowEmphasisDark,
            width: ".1rem",
          }}
        ></Box>
        <Typography className={classes.normalText}>
          © shufflstories • 2020
        </Typography>
      </Box>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box>
              <Box
                style={{
                  left: "50%",
                  bottom: "-.6rem",
                  transform: "translateX(-50%)",
                  position: "absolute",
                  zIndex: -1,
                }}
              >
                <CustomSvg type="polygon" width="2rem" height="2rem" />
              </Box>
              <div className={classes.paper}>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Typography
                    className={classes.normalText}
                    style={{ color: fade("#A5A4A4", 0.9) }}
                  >
                    You are home
                  </Typography>
                  <Lottie
                    options={defaultOptions}
                    height="6rem"
                    width="3.5rem"
                  />
                </Box>
              </div>
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default Footer;
