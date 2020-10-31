import {
  Box,
  Button,
  makeStyles,
  Typography,
  useTheme,
  fade,
  Fade,
  TextField,
  ButtonBase,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import CustomSvg from "../../Common/CustomSvg";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  primaryButton: theme.primaryButton,
  congratsWrapper: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    padding: "2.8rem 4.5rem 4.5rem 4.5rem",
    border: `.3rem solid ${fade("#fcfcfc", 0.1)}`,
    width: "107rem",
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
  adornmentHolder: {
    width: "calc(7rem + .4rem)",
    height: "calc(100% + .4rem)",
    backgroundColor: theme.colorPreset.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0 1.2rem 1.2rem 0",
    transform: "translateX(.2rem)",
  },
}));

const useInputFieldClasses = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    minHeight: "inherit",
    transition:
      "background-color 80ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 80ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "1.2rem",
    "& label": {
      transform: "none",
    },
    position: "relative",
    backgroundColor: "rgb(255 255 255 / 3%)",
    alignItems: "inherit",
    display: "flex",
    border: ".2rem solid transparent",
  },

  focused: {
    border: ".2rem solid #56ccf233",
  },

  input: {
    fontSize: "2rem !important",
    lineHeight: "3rem",
    fontWeight: "400 !important",
    letterSpacing: "0.03rem",
    color: "#9c9c9c",
    padding: "0 1.6rem",

    "&::placeholder": {
      color: "#9c9c9c",
      fontSize: "2rem !important",
      lineHeight: "3rem",
      fontWeight: "400 !important",
      opacity: ".4 !important",
      letterSpacing: "0.03rem",
    },

    "&::-webkit-input-placeholder": {
      color: "#9c9c9c",
      fontSize: "2rem !important",
      lineHeight: "3rem",
      fontWeight: "400 !important",
      opacity: ".4 !important",
      letterSpacing: "0.03rem",
    },
  },
}));

const Congrats = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const inputFieldClasses = useInputFieldClasses(theme);

  const [emailInputShow, setemailInputShow] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [Age, setAge] = useState("");

  const handleChangeAge = useCallback(
    (e) => {
      setAge(e.target.value);
    },
    [Age]
  );
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

      <Fade in={!emailInputShow}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          className="buttonwrapper"
          onClick={() => {
            setemailInputShow(true);
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            position="relative"
            mt="-7rem"
          >
            <Box
              className="button"
              style={{ cursor: "pointer", width: "25rem" }}
              onClick={() => setemailInputShow(true)}
            >
              <Typography
                className={classes.subText}
                style={{ color: "#56CCF2", whiteSpace: "nowrap" }}
              >
                Get this on your mail
              </Typography>{" "}
            </Box>
          </Box>
        </Box>
      </Fade>

      <Fade in={emailInputShow && !emailSent}>
        <Box width="38rem" mt="-7rem">
          <TextField
            value={Age}
            onChange={handleChangeAge}
            placeholder="abc@example.com"
            style={{
              width: "100%",
              height: "5.6rem",
              minHeight: "5.6rem",
              // transition: "all .2s ease-in-out",
              alignItems: "center",
            }}
            InputProps={{
              disableUnderline: true,
              classes: inputFieldClasses,
              endAdornment: (
                <ButtonBase
                  className={classes.adornmentHolder}
                  onClick={() => setEmailSent(true)}
                >
                  <Box>
                    <CustomSvg type="righArrow" width="1.2rem" fill="#fcfcfc" />
                  </Box>
                </ButtonBase>
              ),
            }}
          />
        </Box>
      </Fade>
      <Fade in={emailSent}>
        <Box mt="-5rem">
          <Typography
            className={classes.subText}
            style={{ color: "#27AE60", whiteSpace: "nowrap" }}
          >
            An email has been sent to your account.
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default withRouter(Congrats);
