import {
  Box,
  Button,
  Fade,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import app from "firebase/app";
import React, { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import CustomSvg from "../../Common/CustomSvg";
import image from "../Pages/img.png";

const useStyles = makeStyles((theme) => ({
  regularHigh12: theme.regularHigh12,
  heroText: {
    lineHeight: "4.5rem",
    fontSize: "2.6rem",
    fontWeight: "400",
    color: theme.colorPreset.highEmphasis,
  },
  subText: {
    lineHeight: "5.5rem",
    fontSize: "2rem",
    fontWeight: "400",
    color: theme.colorPreset.primary,
    textAlign: "center",
  },
  heroWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  detailsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  heartClass: {
    background: `url(${image}) no-repeat`,
    backgroundPosition: "left",
    backgroundSize: "2900%",
    height: "4rem",
    width: "7rem",
  },

  heartActive: {
    borderColor: "#f9b9c4",
    backgroundPosition: "right",
    animation: `$animate .8s steps(28) 1`,
  },

  reloadWrapper: {
    width: "3.5rem",
    height: "3.5rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all .2s ease-in-out",
    "&:active": {
      transform: "scale(.9)",
    },

    "&::before": {
      position: "absolute",
      content: "''",
      height: "100%",
      backgroundColor: theme.colorPreset.warning,
      width: "100%",
      zIndex: -1,
      opacity: 0.2,
      borderRadius: "50%",
    },
  },

  rotateClass: {
    animation: `$rotate .8s infinite`,
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },

  "@keyframes animate": {
    "0%": {
      backgroundPosition: "left",
    },
    "100%": {
      backgroundPosition: "right",
    },
  },
  heroContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // marginTop: "12.8rem",
    width: "100%",
  },
  storyContainer: {
    overflowY: "auto",
    maxHeight: "28rem",
    position: "relative",
  },
  scrollShadow: {
    height: "13rem",
    width: "calc(100% - 27.2rem)",
    zIndex: 99999,
    background:
      "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(33,33,33,1) 100%)",
    position: "fixed",
    top: 0,
  },
}));
const Hero = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [getStories, setgetStories] = useState(false);

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [Story, setStory] = useState("");
  const [maxHeightReached, setmaxHeightReached] = useState(false);

  useEffect(() => {
    // getStoriesAPI();
  }, []);

  const getStoriesAPI = async () => {
    setgetStories(true);

    const getDoc = app
      .firestore()
      .collection("Projects")
      .doc("dV1ywcqzRCNbJvHBr7mP");

    const doc = await getDoc.get();

    if (!doc.exists) {
      setgetStories(false);
    } else {
      setgetStories(false);
      setStory(doc.data().story ? doc.data().story : "");
      setOccupation(doc.data().occupation ? doc.data().occupation : "");
      setAge(doc.data().age ? doc.data().age : "");
      setName(doc.data() ? doc.data().name : "");
    }
  };

  React.useEffect(() => {
    let item = document.getElementById("parentScroll");
    let options = {
      damping: 0.01,
      thumbMinSize: 10,
    };
    Scrollbar.init(item, options);
  }, []);

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
      let transformValue = document.querySelector(".scroll-content").style
        .transform;

      let Yvalue = transformValue
        .split("0px,")
        .pop()
        .split("0px)")[0];

      var mySubString = Yvalue.replace("px", "");

      if (parseInt(mySubString) < 1) {
        setmaxHeightReached(true);
      } else {
        setmaxHeightReached(false);
      }
    });
  });

  var target = document.querySelector(".scroll-content");
  if (target) {
    observer.observe(target, { attributes: true, attributeFilter: ["style"] });
  }

  return (
    <React.Fragment>
      <Box className={classes.heroContainer}>
        <Box padding="0 27.2rem" className={classes.heroWrapper}>
          <Fade in={maxHeightReached} timeout={300}>
            <Box className={classes.scrollShadow}></Box>
          </Fade>
          <Box className={classes.storyContainer} id="parentScroll">
            <Box>
              <Typography className={classes.heroText}>
                {Story
                  ? `“${Story}“`
                  : `“My lowest moment was when I was 16 and preparing for CAT.
              I thought it was the end of the world. My friends supported me and
              I am glad I listened to them. I am grateful for the life I have.”`}
              </Typography>
            </Box>
          </Box>
          <Box mt="2.4rem" className={classes.detailsWrapper}>
            <Box style={{ cursor: "pointer" }}>
              <Typography className={classes.subText}>
                {Name ? Name : "Aadhitya, 23"} •{" "}
                {Occupation ? Occupation : "Product Designer"}
              </Typography>
            </Box>
          </Box>
          <Box
            mt="2rem"
            display="flex"
            flexDirection="row"
            alignItems="center"
            alignSelf="center"
          >
            <Box>
              <Button
                className={classes.randomNamesContainer}
                style={{
                  color: theme.colorPreset.warning,
                }}
                onClick={() => getStoriesAPI()}
              >
                <Box
                  className={clsx(classes.reloadWrapper, {
                    [classes.rotateClass]: getStories,
                  })}
                  mr="1.2rem"
                >
                  <CustomSvg
                    type="reload"
                    width="2rem"
                    height="2rem"
                    fill="#F2C94C"
                  />
                </Box>
                <Typography
                  className={classes.subText}
                  style={{
                    color: theme.colorPreset.warning,
                    textTransform: "none",
                  }}
                >
                  shuffl stories
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Hero;
