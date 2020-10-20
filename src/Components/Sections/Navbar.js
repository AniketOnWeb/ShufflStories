import {
  Box,
  Button,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { withRouter } from "react-router-dom";

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
    cursor: "pointer",
    lineHeight: "2rem",
    letterSpacing: "0",
    fontSize: "2.4rem",
    color: theme.colorPreset.highEmphasis,
    fontWeight: "500",
    transition: "all .1s ease-in-out",
  },
  navbarOptions: {
    cursor: "pointer",
    lineHeight: "2rem",
    letterSpacing: "0",
    fontSize: "2.4rem",
    color: theme.colorPreset.mediumEmphasisDark,
    fontWeight: "400",
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
            <Typography className={classes.brandName}>shuffl;</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography className={classes.navbarOptions}>
            Submit Your Story
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default withRouter(Navbar);
