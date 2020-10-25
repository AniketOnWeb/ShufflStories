import { Box, makeStyles, useTheme, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import CustomSvg from "../../Common/CustomSvg";

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
}));
const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box padding="0 15.5rem" className={classes.heroWrapper}>
      <Box>
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
    </Box>
  );
};

export default Footer;
