import {
  Box,
  Button,
  makeStyles,
  Typography,
  useTheme,
  fade,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { withRouter } from "react-router-dom";
import CustomSvg from "../../Common/CustomSvg";

const useStyles = makeStyles((theme) => ({
  primaryButton: theme.primaryButton,
  congratsWrapper: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    padding: "2.8rem 4.5rem 4.5rem 4.5rem",
    border: `.3rem solid ${fade("#fcfcfc", 0.1)}`,
    width: "112.9rem",
    height: "63rem",
  },
  brandName: {
    cursor: "pointer",
    lineHeight: "2rem",
    letterSpacing: "0",
    fontSize: "2rem",
    color: theme.colorPreset.highEmphasis,
    fontWeight: "500",
    transition: "all .1s ease-in-out",
  },
  navbarOptions: {
    cursor: "pointer",
    lineHeight: "2rem",
    letterSpacing: "0",
    fontSize: "2rem",
    color: theme.colorPreset.mediumEmphasisDark,
    fontWeight: "400",
  },
  heroText: {
    lineHeight: "6rem",
    fontSize: "3.5rem",
    fontWeight: "500",
    color: theme.colorPreset.highEmphasis,
  },
  subText: {
    fontSize: "2rem",
    fontWeight: "400",
    color: "#fcfcfc",
  },
}));

const Congrats = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.congratsWrapper}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <CustomSvg type="badge" width="4.5rem" height="4.5rem" />
        <Typography
          className={classes.brandName}
          style={{ transform: "translateY(-.6rem)", marginLeft: ".4rem" }}
        >
          shuffl;
        </Typography>
      </Box>
      <Box mt="2rem">
        <Typography className={classes.heroText}>To Panda,</Typography>{" "}
        <Typography className={classes.subText} style={{ marginTop: "1.2rem" }}>
          Your story gives hope to people out there who are trying their best
          and just want to assure them that everything will be alright. By
          taking out time to fill this form, you also showed a sense of empathy
          and responsibility. We really appreciate your time, thank you for
          submitting your story.
          <br />
          <br />
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            className={classes.subText}
            style={{ alignSelf: "baseline" }}
          >
            Your story gives hope to people out there who are trying their. and
            just want to assure them that everything will be alright.
          </Typography>
          <Box>
            <CustomSvg type="certificateSVG" width="46.2rem" />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        className="buttonwrapper"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          position="relative"
          mt="-7rem"
        >
          <Box className="button" style={{ cursor: "pointer", width: "25rem" }}>
            <Typography
              className={classes.subText}
              style={{ color: "#56CCF2", whiteSpace: "nowrap" }}
            >
              Get this on your mail
            </Typography>{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withRouter(Congrats);
