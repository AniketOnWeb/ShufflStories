/* eslint-disable */ import FormHelperText from "@material-ui/core/FormControl";
import { fade, makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: ".8rem",
    fontWeight: 400,
    paddingTop: ".2rem",
  },
  colorError: {
    color: theme.colorPreset.warning,
  },
  colorSecondary: {
    color: theme.colorPreset.mediumEmphasis,
  },
  disabled: {
    color: fade(theme.colorPreset.mediumEmphasis, 0.4),
  },
}));

export default function TextHelper(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { helperMessage, helpershow, helpertype, disabled } = props;

  return (
    <FormHelperText
      id="component-error-text"
      classes={{
        root: clsx(classes.root, {
          [classes.colorError]: helpertype === "error",
          [classes.colorSecondary]: helpertype !== "error",
        }),
      }}
    >
      <span style={{ lineHeight: "1.2rem", fontSize: "1rem" }}>
        {helpershow ? helperMessage : " "}&nbsp;
      </span>
    </FormHelperText>
  );
}
