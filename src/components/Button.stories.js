import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text, optionsKnob as options } from "@storybook/addon-knobs";

import Button from "./Button";
import themes from "../theme/themes";

const stories = storiesOf("Components|Button", module);

// size knob
const sizeLabel = "Size";
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
const themeLabel = "themeVariant";
const themeValuesObj = {
  light: "light",
  dark: "dark"
};
const themeDefaultValue = "light";
const themeOptionsObj = {
  display: "inline-radio"
};
const themeOptions = () =>
  options(themeLabel, themeValuesObj, themeDefaultValue, themeOptionsObj);

stories
  .add("primary", () => (
    <Button
      disabled={boolean("Disabled", false)}
      size={sizeOptions()}
      themeVariant={themeOptions()}
    >
      Primary Button
    </Button>
  ))
  .add("secondary", () => (
    <Button
      disabled={boolean("Disabled", false)}
      variant="secondary"
      size={sizeOptions()}
    >
      Secondary Button
    </Button>
  ))
  .add("accent1", () => (
    <Button
      disabled={boolean("Disabled", false)}
      variant="accent1"
      size={sizeOptions()}
    >
      Accent1 Button
    </Button>
  ))
  .add("accent2", () => (
    <Button
      disabled={boolean("Disabled", false)}
      variant="accent2"
      size={sizeOptions()}
    >
      Accent2 Button
    </Button>
  ))
  .add("accent3", () => (
    <Button
      disabled={boolean("Disabled", false)}
      variant="accent3"
      size={sizeOptions()}
    >
      Accent3 Button
    </Button>
  ));
