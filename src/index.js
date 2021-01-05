import { Box, CssBaseline, makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./Config/theme";
import "./index.scss";
import brutaskBG from "./Assets/brutaskBG.png";
const styles = (theme) => ({
  "@global": {
    html: {
      fontSize: 8,
      scrollBehavior: "smooth",

      [theme.breakpoints.up("sd")]: {
        fontSize: 9.5,
      },
      [theme.breakpoints.up("MacScaled")]: {
        fontSize: 9.5,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 10.5,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 13.5,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 18.5,
      },
    },
    body: {
      backgroundColor: theme.colorPreset.base,
      position: "relative",

      "&::before": {
        position: "fixed",
        content: "''",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${brutaskBG})`,
        zIndex: -10,
        opacity: ".2",
      },
    },
  },
});

const Main = withStyles(styles)(App);

ReactDOM.render(
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <Box style={{ height: "100vh", width: "100vw" }}>
          <Main />
        </Box>
      </StylesProvider>
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById("root")
);
