import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    position: "relative",
  },
  TempBannerRightTop: {
    position: "absolute",
    opacity: 0.4,
    top: 0,
    right: 0,
    borderBottomLeftRadius: "32.5rem",
    border: ".1rem solid rgba(255, 255, 255, 0.3)",
  },
  patterHolder: {
    position: "absolute",
    right: 0,
  },
  skillsHolder: {
    height: "50rem",
    position: "relative",

    "&::before": {
      position: "absolute",
      width: "100vw",
      height: "100%",
      content: "''",
      backgroundColor: "#f9f9f9",
      borderRadius: "0",
      zIndex: -1,
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  headerTitle: {
    fontSize: "9rem",
    fontWeight: "bolder",
    color: "#28d79f",
    fontFamily: "oswald",
  },
  skillCard: {
    width: "38rem",
    height: "50rem",
    backgroundColor: "#fff",
    borderRadius: ".4rem",
    boxShadow: "0 0 2rem -6px rgba(230, 234, 245, 0.89)",
    padding: "3.8rem",
  },
  skillCardWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  subText: {
    lineHeight: "2.8rem",
    letterSpacing: "0rem",
    fontSize: "1.8rem",
    fontWeight: "400",
    color: "#21262f",
  },
}));

const Skills = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const skillCard = ["React", "JS", "Project Managment"];

  return (
    <Box className={classes.skillsHolder} padding="1.5rem 5rem 0 5rem">
      <Box>
        <Typography className={classes.headerTitle}>SKILLS</Typography>
        <Typography className={classes.subText}>
          I am currently on a never-ending path of discovery, <br /> ranging
          from UX/UI design, illustration and product consulting.
        </Typography>
      </Box>
      <Box className={classes.skillCardWrapper} mt="8rem">
        {skillCard.map((item, i) => (
          <Box className={classes.skillCard} key={i} mr="2.5rem">
            <Typography className={classes.sd}>{item}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
