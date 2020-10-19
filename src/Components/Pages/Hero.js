import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import React from "react";
import Text from "../Elements/Text";

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
  heroWrapper: {
    display: "grid",
    gridTemplateColumns: "6fr 4fr",
  },
}));
const Hero = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box padding="0 5rem">
      <Box className={classes.heroWrapper}>
        <Text />
      </Box>
    </Box>
  );
};

export default Hero;
