import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  regularHigh12: theme.regularHigh12,
  heroText: {
    lineHeight: "10rem",
    letterSpacing: "-0.07rem",
    fontSize: "8.9rem",
    fontWeight: "800",
    fontFamily: "Oswald",
    color: "#21262f",
  },
  aboutWrapper: {
    position: "relative",
    padding: "4rem 5rem",

    "&::before": {
      position: "absolute",
      width: "100vw",
      height: "100%",
      content: "''",
      // backgroundColor: "rgb(241 241 241)",
      zIndex: -1,
      left: "50%",
      transform: "translateX(-50%)",
      top: 0,
    },
  },
  normalHeading: {
    lineHeight: "5.2rem",
    letterSpacing: "0rem",
    fontSize: "3.8rem",
    fontWeight: "800",
    color: "#21262f",
  },
  normalParra: {
    lineHeight: "2.8rem",
    letterSpacing: "0rem",
    fontSize: "1.8rem",
    fontWeight: "400",
    color: "#21262f",
    // fontFamily: "Esteban",
  },
}));
const About = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.aboutWrapper}>
      <Box>
        <Box>
          <Typography className={classes.normalHeading}>
            Hello world, I’m Aniket 👋
          </Typography>
        </Box>
        <Box
          mt="1.5rem"
          style={{ display: "grid", gridTemplateColumns: "6fr 4fr" }}
        >
          <Typography className={classes.normalParra}>
            I’m a software developer based in Gurugram, IN. I’ve spent the past
            3 years at startup, freelancing and working on side products.
            <br />
            <br />
            I’m probably the most passionate developer you will ever work with.
            I've been programming ever since I was in school, though I came to
            it from a different career path of photography.
            <br />
            <br />
            I've shown my love for coding in many ways. I was the head of the
            hackathon team in college. I have been to several hackathons across
            the country and won two of them. I also guide young students and
            provide them with the roadmap to become a better Software engineer.
          </Typography>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
