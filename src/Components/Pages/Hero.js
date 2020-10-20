import { Box, makeStyles, useTheme, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import logoSvgData from "../../Common/animateSuccess.json";
import image from "../Pages/img.png";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  regularHigh12: theme.regularHigh12,
  heroText: {
    lineHeight: "5.5rem",
    fontSize: "3.5rem",
    fontWeight: "400",
    color: theme.colorPreset.highEmphasis,
    // textAlign: "center",
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
  heartClass: {
    background: `url(${image}) no-repeat`,
    backgroundPosition: "left",
    backgroundSize: "2900%",
    height: "6rem",
    width: "10rem",
  },

  heartActive: {
    borderColor: "#f9b9c4",
    backgroundPosition: "right",
    animation: `$animate .8s steps(28) 1`,
  },
  "@keyframes animate": {
    "0%": {
      backgroundPosition: "left",
    },
    "100%": {
      backgroundPosition: "right",
    },
  },
}));
const Hero = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [buttonPressed, setbuttonPressed] = useState(false);

  const [addClass, setaddClass] = useState(false);

  const handleClick = () => {
    setaddClass(!addClass);
  };

  return (
    <Box padding="0 5rem" className={classes.heroWrapper}>
      <Box>
        <Typography className={classes.heroText}>
          “My lowest moment was when I was 16 and preparing for CAT. I thought
          it was the end of the world. My friends supported me and I am glad I
          listened to them. I am grateful for the life I have.”
        </Typography>
      </Box>
      <Box mt="2.4rem" className={classes.detailsWrapper}>
        <Box>
          <Typography className={classes.subText}>
            Aadhitya, 23 • Product Designer
          </Typography>
        </Box>
        <Box ml="1rem">
          <Box
            className={clsx(addClass ? classes.heartActive : "")}
            onClick={() => handleClick()}
            style={{ cursor: "pointer" }}
          >
            <Box
              className={clsx(
                addClass ? classes.heartActive : "",
                classes.heartClass
              )}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

//  <span
//    className={clsx(addClass ? classes.heartActive: "", classes.heartClass)}
//    id="heart"
//  ></span>;
