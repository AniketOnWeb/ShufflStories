import {
  Box,
  makeStyles,
  useMediaQuery,
  useTheme,
  Button,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { animated, config, useSpring } from "react-spring";
import Congrats from "./Components/Pages/Congrats";
import Form from "./Components/Pages/Form";
import Hero from "./Components/Pages/Hero";
import Footer from "./Components/Sections/Footer";
import Navbar from "./Components/Sections/Navbar";
import axios from "axios";

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
    color: "#564eff",
    fontFamily: "DM Sans",
  },

  footerContainer: {
    position: "absolute",
    bottom: "4rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
  },
  formContainer: {
    marginTop: "5.7rem",
  },
  congratsContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    // transform: "translate(-50%, -50%)",
    transform: "translate(-50%, calc(-50% - 2.8rem)) scale(.9)",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
}));

const App = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const AnimatedBox = animated(Box);

  let AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
  });

  const sendEmail = async () => {
    const emailData = {
      email: "chaudharyaniket16@gmail.com",
    };

    AxiosInstance.post(
      `/api`,
      {
        ...emailData,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
  };

  //   Send(userData) {
  //   let { image } = this.state;
  //   userData = { ...userData, image };
  //   this.sendEmail(userData)
  //     .then((submited) => {
  //       console.log("Email sent successfully");
  //     })
  //     .catch((errors) => {
  //       console.log("Error occured");
  //     });
  // }
  // sendEmail = async (emailData) => {
  //   console.log(emailData);
  //   return axios.post("/api/v1/contact", emailData).then(
  //     (res) => res.data,
  //     (err) => Promise.reject(err.response.data.errors)
  //   );
  // };

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
                height: "100vh",
                position: "relative",
              }}
            >
              <Route path="/" exact>
                <AnimatedBox>
                  <Navbar />
                </AnimatedBox>
                {/* <Button onClick={() => sendEmail()}>asdasdsd</Button> */}
                <AnimatedBox>
                  <Hero />
                </AnimatedBox>
              </Route>
              <Route path="/submit">
                <AnimatedBox className={classes.formContainer}>
                  <Form />
                </AnimatedBox>
              </Route>
              <Route path="/congrats">
                <AnimatedBox className={classes.congratsContainer}>
                  <Congrats />
                </AnimatedBox>
              </Route>
              <AnimatedBox className={classes.footerContainer}>
                <Footer />
              </AnimatedBox>
            </Box>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </CssBaseline>
  );
};

export default App;
