import {
  Box,
  makeStyles,
  useTheme,
  Typography,
  TextField,
  fade,
} from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import CustomSvg from "../../Common/CustomSvg";

const useStyles = makeStyles((theme) => ({
  regularHigh12: theme.regularHigh12,
  heroText: {
    lineHeight: "5.5rem",
    fontSize: "3.5rem",
    fontWeight: "400",
    color: theme.colorPreset.highEmphasis,
  },
  subText: {
    lineHeight: "5.5rem",
    fontSize: "2.4rem",
    fontWeight: "400",
    color: theme.colorPreset.primary,
    textAlign: "center",
  },
  heroWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  detailsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputLabel: {
    position: "absolute",
    transform: "translate(0, -4rem)",
    fontWeight: 400,
    fontSize: "1.6rem",
    lineHeight: "4rem",
    color: "#9c9c9c",
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
  },

  input: {
    fontSize: "2rem !important",
    lineHeight: "3rem",
    fontWeight: "400 !important",
    letterSpacing: "0.03rem",
    color: "#9c9c9c",
    padding: ".8rem 1.6rem .8rem 1.6rem",

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

const Form = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const inputFieldClasses = useInputFieldClasses(theme);

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [Story, setStory] = useState("");

  const handleChangeName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [Name]
  );

  const handleChangeAge = useCallback(
    (e) => {
      setAge(e.target.value);
    },
    [Age]
  );
  const handleChangeOccupation = useCallback(
    (e) => {
      setOccupation(e.target.value);
    },
    [Occupation]
  );
  const handleChangeStory = useCallback(
    (e) => {
      setStory(e.target.value);
    },
    [Story]
  );
  return (
    <Box padding="0 10.1vw" className={classes.heroWrapper}>
      <Typography
        className={classes.heroText}
        style={{ fontSize: "4rem", lineHeight: "6rem", letterSpacing: "0" }}
      >
        Submit your story
      </Typography>

      <Box mt="6rem">
        <Box width="100%">
          <Box>
            <Typography className={classes.inputLabel}>Your name</Typography>
          </Box>
          <TextField
            value={Name}
            onChange={handleChangeName}
            placeholder="Smol Panda"
            style={{
              width: "41vw",
              height: "5.6rem",
              minHeight: "5.6rem",
              border: ".11rem solid transparent",
              transition: "all .2s ease-in-out",
              alignItems: "center",
            }}
            InputProps={{
              disableUnderline: true,
              classes: inputFieldClasses,
            }}
          />
        </Box>
        <Box width="100%" mt="6rem" width="41vw">
          <Box display="grid" gridTemplateColumns="35fr 65fr" gridGap="2.4rem">
            <Box>
              <Box>
                <Typography className={classes.inputLabel}>Your age</Typography>
              </Box>
              <TextField
                value={Age}
                onChange={handleChangeAge}
                placeholder="Smol Panda"
                style={{
                  width: "100%",
                  height: "5.6rem",
                  minHeight: "5.6rem",
                  border: ".11rem solid transparent",
                  transition: "all .2s ease-in-out",
                  alignItems: "center",
                }}
                InputProps={{
                  disableUnderline: true,
                  classes: inputFieldClasses,
                }}
              />
            </Box>
            <Box>
              <Box>
                <Typography className={classes.inputLabel}>
                  Your occupation
                </Typography>
              </Box>
              <TextField
                value={Occupation}
                onChange={handleChangeOccupation}
                placeholder="Smol Panda"
                style={{
                  width: "100%",
                  height: "5.6rem",
                  minHeight: "5.6rem",
                  border: ".11rem solid transparent",
                  transition: "all .2s ease-in-out",
                  alignItems: "center",
                }}
                InputProps={{
                  disableUnderline: true,
                  classes: inputFieldClasses,
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box width="100%" mt="6rem">
          <Box>
            <Typography className={classes.inputLabel}>Your story</Typography>
          </Box>
          <TextField
            value={Story}
            onChange={handleChangeStory}
            placeholder="Tell us about your story. What was your lowest point in life, how things got better and where you are now. Give us a little inspiration."
            style={{
              width: "41vw",
              minHeight: "15.9rem",
              border: ".11rem solid transparent",
              transition: "all .2s ease-in-out",
              alignItems: "flex-start",
            }}
            InputProps={{
              disableUnderline: true,
              classes: inputFieldClasses,
              multiline: true,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
