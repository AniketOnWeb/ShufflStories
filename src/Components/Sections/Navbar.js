import {
  Avatar,
  Box,
  Button,
  makeStyles,
  Popover,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import CustomSvg from "../../Common/CustomSvg";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  primaryButton: theme.primaryButton,
  navbarWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    position: "relative",
    height: "8rem",
    padding: "0 5rem",

    "&::before": {
      position: "absolute",
      content: "''",
      height: ".1rem",
      backgroundColor: "rgba(33, 38, 47, 0.2)",
      width: "100vw",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  brandName: {
    fontSize: "2rem",
  },
  navbarOptions: {
    cursor: "pointer",
    lineHeight: "2rem",
    letterSpacing: "0",
    fontSize: "1.7rem",
    color: "#21262f",
    fontWeight: "500",
    transition: "all .1s ease-in-out",
  },
  loginButton: {
    position: "relative",
    width: "13.9rem",
    height: "5.2rem",
    borderRadius: "0",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "transparent",
      borderRadius: "0",
      zIndex: -1,
      border: ".05rem solid #ffffff",
    },
  },

  Navdivider: {
    borderLeft: ".1rem solid rgba(33, 38, 47, 0.2)",
  },
  animationTest: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    animation: `$typing 2s steps(70, end), blink-caret .001s step-end 2000`,
    position: "relative",
    paddingRight: "1.7rem",

    "&::before": {
      position: "absolute",
      content: "''",
      width: "100%",
      height: "100%",
      borderRight: `.2rem solid ${theme.colorPreset.primary}`,
      animation: `$blinkingText 1s infinite ease`,
      animationDelay: "2s",
      bottom: ".2rem",
    },
  },
  "@keyframes typing": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "100%",
    },
  },
  "@keyframes blinkingText": {
    "0%": {
      borderColor: theme.colorPreset.primary,
      borderWidth: ".9rem",
    },
    "50%": {
      borderColor: "transparent",
      borderWidth: ".9rem",
    },
    "100%": {
      borderColor: theme.colorPreset.primary,
      borderWidth: ".9rem",
    },
  },
}));

const Navbar = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <Box className={classes.navbarWrapper}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography
              className={clsx(classes.navbarOptions, classes.animationTest)}
              style={{ fontSize: "1.8rem", fontWeight: 600 }}
            >
              $ cd /home/
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" ml="6.8rem">
          <Box padding="3rem 2rem">
            <Typography className={classes.navbarOptions}>Code</Typography>
          </Box>
          <Box className={classes.Navdivider} padding="3rem 2rem">
            <Typography
              className={classes.navbarOptions}
              style={{ opacity: 0.5, cursor: "progress" }}
            >
              Photography
            </Typography>
          </Box>
          <Box ml="1.5rem">
            <Button className={classes.primaryButton}>
              <Typography
                className={classes.navbarOptions}
                style={{ color: "#fff", fontWeight: 500 }}
              >
                Say Hello!
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default withRouter(Navbar);
