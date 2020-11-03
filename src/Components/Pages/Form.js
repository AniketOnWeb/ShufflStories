import {
  Box,
  makeStyles,
  useTheme,
  Typography,
  TextField,
  fade,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import CustomSvg from "../../Common/CustomSvg";
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
  names,
  starWars,
} = require("unique-names-generator");
import Firebase from "../Firebase/firebase";
import { withRouter } from "react-router-dom";
import app from "firebase/app";

const useStyles = makeStyles((theme) => ({
  regularHigh12: theme.regularHigh12,
  primaryButton: theme.primaryButton,
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
  randomNamesContainer: {
    fontWeight: 400,
    backgroundColor: fade("#4B432A", 0.2),
    position: "absolute",
    transform: "translateX(29rem)",
    height: "5.6rem",
    right: 0,
    borderRadius: "1.2rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: "0 1.6rem",
    textTransform: "unset",
    transition: "all .2s ease",

    "&:hover": {
      backgroundColor: fade("#4B432A", 0.2),
      transform: "translateX(29rem)",
    },
    "&:active": {
      transform: "translateX(29rem) scale(.98)",
    },
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

  const genarateRandomNames = useCallback(
    (e) => {
      let name = uniqueNamesGenerator({
        dictionaries: [names],
        length: 1,
      });
      setName(name);
    },
    [Name]
  );

  const handleCreateAccount = async () => {
    // db.collection("users")
    //   .get()
    //   .then((querySnapshot) => {
    //     if (querySnapshot.docs.length && querySnapshot.docs.length > 0) {
    //       querySnapshot.forEach((doc) => {
    //         Firebase.register({ name: Name });
    //       });
    //     } else {
    //       Firebase.register({ name: Name });
    //     }
    //   });

    await Firebase.submitStory({
      name: Name,
      age: Age,
      story: Story,
      occupation: Occupation,
    });

    setName("");
    setAge("");
    setOccupation("");
    setStory("");
  };

  return (
    <Box padding="0 10.1vw" className={classes.heroWrapper}>
      <Typography
        className={classes.heroText}
        style={{
          fontSize: "4rem",
          lineHeight: "6rem",
          letterSpacing: "0",
        }}
      >
        Submit your story
      </Typography>

      <Box mt="6rem" display="flex" alignItems="center" flexDirection="row">
        <Box>
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
                endAdornment: (
                  <Button
                    className={classes.randomNamesContainer}
                    style={{
                      color: theme.colorPreset.warning,
                    }}
                    onClick={() => genarateRandomNames()}
                  >
                    <Typography
                      className={classes.regularHigh12}
                      style={{
                        color: theme.colorPreset.warning,
                        fontWeight: 400,
                        fontSize: "1.8rem",
                        lineHeight: "3rem",
                      }}
                    >
                      Genarate Random Names
                    </Typography>
                    <Box ml=".8rem">
                      <CustomSvg
                        type="dice"
                        width="1.6rem"
                        height="1.6rem"
                        fill={theme.colorPreset.warning}
                      />{" "}
                    </Box>
                  </Button>
                ),
              }}
            />
          </Box>
          <Box width="100%" mt="6rem" width="41vw">
            <Box
              display="grid"
              gridTemplateColumns="35fr 65fr"
              gridGap="2.4rem"
            >
              <Box>
                <Box>
                  <Typography className={classes.inputLabel}>
                    Your age
                  </Typography>
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
          <Box mt="4.8rem">
            <Button
              onClick={() => handleCreateAccount()}
              className={classes.primaryButton}
              style={{ borderRadius: "1.2rem" }}
            >
              <Typography
                className={classes.regularHigh12}
                style={{ fontSize: "1.82rem" }}
              >
                Submit
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box alignSelf="flex-end">
          <CustomSvg type="formSVG" width="53rem" />
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
