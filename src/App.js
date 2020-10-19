import {
  Box,
  makeStyles,
  useTheme,
  useMediaQuery,
  Fade,
  Typography,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import Navbar from "./Components/Sections/Navbar";
import Hero from "./Components/Pages/Hero";
import About from "./Components/Pages/About";
import Loader from "./Components/Pages/Loader";
import { useTransition, animated, config, useSpring } from "react-spring";
import Skills from "./Components/Pages/Skills";

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
    backgroundColor: "#f1f1f1c7",
    height: "50rem",
    width: "100vw",
  },
  headerTitle: {
    fontSize: "9rem",
    fontWeight: "bolder",
    // color: "#acacac",
    color: "#564eff",
    fontFamily: "oswald",
  },
}));

const App = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const matches1280 = useMediaQuery("(min-width:1280px)");
  const matches1024 = useMediaQuery("(min-width:1024px)");
  const matches768 = useMediaQuery("(min-width:768px)");
  const matches640 = useMediaQuery("(min-width:640px)");

  const [showLoader, setshowLoader] = useState(true);

  useEffect(() => {
    let item = document.getElementById("parentScroll");
    let options = {
      damping: 0.06,
    };
    Scrollbar.init(item, options);
  }, []);

  const AnimatedBox = animated(Box);

  const HeroSpring = useSpring({
    config: config.slow,
    // delay: 2700,
    delay: 200,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(3rem)" },
  });

  const NavbarSpring = useSpring({
    config: config.slow,
    // delay: 2700,
    delay: 200,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(-2rem)" },
  });

  return (
    <CssBaseline>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              style={{
                width: "100%",
                maxWidth: "1280px",
                width: "100%",
              }}
            >
              <AnimatedBox style={NavbarSpring}>
                <Navbar />
              </AnimatedBox>

              <AnimatedBox style={HeroSpring}>
                <Box
                  mt="16rem"
                  height="45rem"
                  // alignItems="center"
                  // justifyContent="center"
                  // height="calc(100vh - 8rem)"
                >
                  <Hero />
                </Box>
                <Box mt="12rem">
                  <About />
                </Box>
              </AnimatedBox>
              <Box>
                <Skills />
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </CssBaseline>
  );
};

export default App;

// style={{
//                 width: "100%",
//                 maxWidth: matches1280
//                   ? "1280px"
//                   : matches1024
//                   ? "1024px"
//                   : matches768
//                   ? "768px"
//                   : matches640
//                   ? "640px"
//                   : "",
//                 width: "100%",
//               }}
