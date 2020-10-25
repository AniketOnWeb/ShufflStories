import { Box, CssBaseline, makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import Scrollbar from "smooth-scrollbar";
import App from "./App";
import theme from "./Config/theme";
import "./index.scss";

const styles = (theme) => ({
  "@global": {
    html: {
      fontSize: 10,
      scrollBehavior: "smooth",

      [theme.breakpoints.up("sd")]: {
        fontSize: 11,
      },
      [theme.breakpoints.up("MacScaled")]: {
        fontSize: 11,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 12,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 15,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 20,
      },
    },
    body: {
      backgroundColor: theme.colorPreset.base,
    },
  },
});

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

ReactDOM.render(
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <Box id="parentScroll" style={{ height: "100vh", width: "100vw" }}>
          <Main />
        </Box>
      </StylesProvider>
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById("root")
);
