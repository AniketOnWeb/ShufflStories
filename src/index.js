import {
  Avatar,
  Box,
  Button,
  makeStyles,
  Popover,
  Typography,
  useTheme,
  CssBaseline,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./Config/theme";
import "./index.scss";
import Scrollbar from "smooth-scrollbar";
import barba from "@barba/core";
import Loader from "./Components/Pages/Loader";
import { useTransition, animated, config } from "react-spring";

const styles = (theme) => ({
  "@global": {
    html: {
      fontSize: 10,
      scrollBehavior: "smooth",
    },
    body: {
      backgroundColor: "#fff",
    },
  },
});

function delay(n) {
  alert("asdasd");

  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = window.gsap.timeline();
  alert("asdasd");
  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  });
  tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
  alert("asdasd");

  var tl = window.gsap.timeline();
  tl.from(".main-component", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.4,
    delay: 0.2,
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  let item = document.getElementById("parentScroll");
  let options = {
    damping: 0.06,
  };
  Scrollbar.init(item, options);
});

const Main = withStyles(styles)(App);

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
}));

const Component = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const pages = [
    ({ style }) => (
      <animated.div
        style={{ ...style, background: "white", zIndex: 99, position: "fixed" }}
      >
        <Loader />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div
        style={{
          ...style,
          zIndex: 99,
          display: "none",
        }}
      ></animated.div>
    ),
  ];

  const [index, set] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      set(1);
    }, 2500);
  }, []);

  const transitions = useTransition(index, (p) => p, {
    config: {
      mass: 5,
      tension: 150,
      friction: 20,
      clamp: true,
    },
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(0,-100%,0" },
  });

  const [state, setstate] = useState(false);
  return (
    <Box style={{ overflow: "hidden" }}>
      <Box className="loading-screen">
        {index === 0
          ? !state && (
              <animated.div
                style={{
                  background: "white",
                  zIndex: 99,
                  position: "fixed",
                }}
              >
                <Loader />
              </animated.div>
            )
          : transitions.map(({ item, props, key }) => {
              const Page = pages[item];
              return <Page key={key} style={props} />;
            })}
      </Box>
    </Box>
  );
};

ReactDOM.render(
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <Component />
        <Box id="parentScroll" style={{ height: "100vh", width: "100vw" }}>
          <Main />
        </Box>
      </StylesProvider>
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById("root")
);
