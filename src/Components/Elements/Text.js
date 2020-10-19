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
  transitionsItem: {
    overflow: "hidden",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "8.9rem",
    fontWeight: "800",
    textTransform: "uppercase",
    willChange: "transform, opacity, height",
    whiteSpace: "nowrap",
    cursor: "pointer",
    lineHeight: "10rem",
  },
}));
const Text = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 100, innerHeight: 100 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#21262f" },
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["Code", "talk about code", "travel"]), 200)
    );
    // ref.current.push(setTimeout(() => set(["Code", "travel"]), 3200));
    ref.current.push(
      setTimeout(() => set(["Code", "talk about code", "travel"]), 2200)
    );
  }, []);

  useEffect(() => void reset(), []);

  return (
    <Box>
      <Box>
        <Typography
          className={classes.regularHigh12}
          style={{ color: "#fe335e", fontSize: "2.5rem", fontWeight: "500" }}
        >
          Aniket ❤️ to
        </Typography>
      </Box>
      <Box mt="2rem" style={{ overflow: "hidden" }}>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div
            className={classes.transitionsItem}
            key={key}
            style={rest}
            // onClick={reset}
          >
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </Box>
    </Box>
  );
};

export default Text;
