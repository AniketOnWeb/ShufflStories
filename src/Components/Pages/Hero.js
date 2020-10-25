import { Box, makeStyles, useTheme, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import logoSvgData from "../../Common/animateSuccess.json";
import image from "../Pages/img.png";
import clsx from "clsx";
import CustomSvg from "../../Common/CustomSvg";

const useStyles = makeStyles((theme) => ({
  regularHigh12: theme.regularHigh12,
  heroText: {
    lineHeight: "4.5rem",
    fontSize: "2.6rem",
    fontWeight: "400",
    color: theme.colorPreset.highEmphasis,
    // textAlign: "center",
  },
  subText: {
    lineHeight: "5.5rem",
    fontSize: "2rem",
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
    height: "4rem",
    width: "7rem",
  },

  heartActive: {
    borderColor: "#f9b9c4",
    backgroundPosition: "right",
    animation: `$animate .8s steps(28) 1`,
  },

  reloadWrapper: {
    width: "3.5rem",
    height: "3.5rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all .2s ease-in-out",
    "&:active": {
      transform: "scale(.9)",
    },

    "&::before": {
      position: "absolute",
      content: "''",
      height: "100%",
      backgroundColor: theme.colorPreset.warning,
      width: "100%",
      zIndex: -1,
      opacity: 0.2,
      borderRadius: "50%",
    },
  },

  rotateClass: {
    animation: `$rotate .8s`,
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },

  "@keyframes animate": {
    "0%": {
      backgroundPosition: "left",
    },
    "100%": {
      backgroundPosition: "right",
    },
  },
  heroContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // marginTop: "12.8rem",
    width: "100%",
  },
}));
const Hero = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [buttonPressed, setbuttonPressed] = useState(false);

  const [addClass, setaddClass] = useState(false);
  const [getStories, setgetStories] = useState(false);

  const handleClick = () => {
    setaddClass(!addClass);
  };

  useEffect(() => {
    if (getStories === true) {
      setTimeout(() => {
        setgetStories(false);
      }, 800);
    }
  }, [getStories]);

  return (
    <React.Fragment>
      <Box className={classes.heroContainer}>
        <Box padding="0 27.2rem" className={classes.heroWrapper}>
          <Box>
            <Typography className={classes.heroText}>
              “My lowest moment was when I was 16 and preparing for CAT. I
              thought it was the end of the world. My friends supported me and I
              am glad I listened to them. I am grateful for the life I have.”
            </Typography>
          </Box>
          <Box mt="2.4rem" className={classes.detailsWrapper}>
            <Box>
              <Typography className={classes.subText}>
                Aadhitya, 23 • Product Designer
              </Typography>
            </Box>
            <Box
              ml="2.4rem"
              style={{
                height: "2rem",
                backgroundColor: theme.colorPreset.lowEmphasisDark,
                width: ".1rem",
              }}
            ></Box>
            <Box ml="-.06rem">
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
          <Box
            mt="2rem"
            display="flex"
            flexDirection="row"
            alignItems="center"
            alignSelf="center"
          >
            <Box
              className={clsx(classes.reloadWrapper, {
                [classes.rotateClass]: getStories,
              })}
              onClick={() => setgetStories(true)}
            >
              <CustomSvg
                type="reload"
                width="1.9rem"
                height="1.9rem"
                fill="#F2C94C"
              />
            </Box>
            <Box ml="1.2rem">
              <Typography
                className={classes.subText}
                style={{ color: theme.colorPreset.warning }}
              >
                shuffl stories
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Hero;
