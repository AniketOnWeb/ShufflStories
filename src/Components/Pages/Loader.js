import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Avatar,
  Box,
  Button,
  makeStyles,
  Popover,
  Typography,
  useTheme,
} from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";

const useStyles = makeStyles((theme) => ({
  navbarWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#fff",
    zIndex: 9,
    position: "fixed",
  },
  heroText: {
    lineHeight: "10rem",
    letterSpacing: "-0.07rem",
    fontSize: "8.9rem",
    fontWeight: "800",
    // fontFamily: "Oswald",
    color: "#21262f",
  },
  transitionsItem: {
    overflow: "hidden",
    color: "#f2f2f2",
    fontSize: "30rem",
    fontWeight: "800",
    willChange: "transform, opacity, height",
    whiteSpace: "nowrap",
    cursor: "pointer",
    lineHeight: "initial",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const Loader = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [toggle, set] = useState("Overall");
  const transitions = useTransition(toggle, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  let arrText = ["Overall", "Decent", "Coder"];

  useEffect(() => {
    setTimeout(() => {
      set(arrText[1]);
    }, 1000);
    setTimeout(() => {
      set(arrText[2]);
    }, 1500);
  }, []);

  return (
    <Box>
      <Box style={{ overflow: "hidden" }}>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div
              key={key}
              style={props}
              className={classes.transitionsItemWrapper}
            >
              <Typography className={classes.transitionsItem}>
                {item}
              </Typography>
            </animated.div>
          ) : (
            <animated.div
              style={props}
              key={key}
              className={classes.transitionsItemWrapper}
            >
              <Typography className={classes.transitionsItem}>
                {item}
              </Typography>
            </animated.div>
          )
        )}
      </Box>
    </Box>
  );
};

export default Loader;
