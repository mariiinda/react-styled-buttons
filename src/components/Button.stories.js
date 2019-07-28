import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, optionsKnob as options } from "@storybook/addon-knobs";

import Button from "./Button";
//import themes from "../theme/themes";

const stories = storiesOf("Components|Button", module);

// size knob
const sizeLabel = "size";
const sizeValuesObj = {
  small: "small",
  medium: "medium",
  large: "large"
};
const sizeDefaultValue = "large";
const sizeOptionsObj = {
  display: "inline-radio"
};
const sizeOptions = () =>
  options(sizeLabel, sizeValuesObj, sizeDefaultValue, sizeOptionsObj);

// theme knob
const themeName = "theme";
const themeValuesObj = {
  light: "light",
  dark: "dark"
};
const themeDefaultValue = "light";
const themeOptionsObj = {
  display: "inline-radio"
};
const themeOptions = () =>
  options(themeName, themeValuesObj, themeDefaultValue, themeOptionsObj);

// as knob
const asName = "as";
const asValuesObj = {
  button: "button",
  a: "a"
};
const asDefaultValue = "button";
const asOptionsObj = {
  display: "inline-radio"
};
const asOptions = () =>
  options(asName, asValuesObj, asDefaultValue, asOptionsObj);

stories
  .add("primary", () => {
    return (
      <Button
        disabled={boolean("Disabled", false)}
        size={sizeOptions()}
        theme={themeOptions()}
        as={asOptions()}
      >
        Primary Button
      </Button>
    );
  })
  .add("secondary", () => (
    <Button
      disabled={boolean("Disabled", false)}
      variant="secondary"
      size={sizeOptions()}
      theme={themeOptions()}
      as={asOptions()}
    >
      Secondary Button
    </Button>
  ))
  .add("accent1", () => (
    <Button
      disabled={boolean("Disabled", false)}
      variant="accent1"
      size={sizeOptions()}
      theme={themeOptions()}
      as={asOptions()}
    >
      Accent1 Button
    </Button>
  ))
  .add("accent2", () => (
    <Button
      disabled={boolean("Disabled", false)}
      variant="accent2"
      size={sizeOptions()}
      theme={themeOptions()}
      as={asOptions()}
    >
      Accent2 Button
    </Button>
  ))
  .add("accent3", () => (
    <Button
      disabled={boolean("Disabled", false)}
      variant="accent3"
      size={sizeOptions()}
      theme={themeOptions()}
      as={asOptions()}
    >
      Accent3 Button
    </Button>
  ))
  .add("neutral", () => (
    <Button
      disabled={boolean("Disabled", false)}
      variant="neutral"
      size={sizeOptions()}
      theme={themeOptions()}
      as={asOptions()}
    >
      Neutral Button
    </Button>
  ));
