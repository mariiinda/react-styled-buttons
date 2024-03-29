import React from "react";
import {
  boolean,
  optionsKnob as options,
  withKnobs
} from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import Button from "./Button";

// variant knob
const variantName = "variant";
const variantValuesObj = {
  primary: "primary",
  secondary: "secondary",
  accent: "accent",
  accent2: "accent2",
  accent3: "accent3",
  accent4: "accent4",
  highlight: "highlight",
  muted: "muted",
  gray: "gray"
};
const variantOptionsObj = {
  display: "inline-radio"
};
const variantOptions = (variantDefaultValue = "primary") =>
  options(
    variantName,
    variantValuesObj,
    variantDefaultValue,
    variantOptionsObj
  );

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

// mode knob
const modeName = "mode";
const modeValuesObj = {
  light: "light",
  dark: "dark"
};
const modeDefaultValue = "light";
const modeOptionsObj = {
  display: "inline-radio"
};
const modeOptions = () =>
  options(modeName, modeValuesObj, modeDefaultValue, modeOptionsObj);

// as knob
const asName = "as";
const asValuesObj = {
  button: "button",
  a: "a"
};
const asOptionsObj = {
  display: "inline-radio"
};
const asOptions = (asDefaultValue = "button") =>
  options(asName, asValuesObj, asDefaultValue, asOptionsObj);

export default { title: "Buttons|Button", decorators: [withKnobs, withA11y] };

export const primary = ({
  children = "Primary Button",
  onClick,
  disabled,
  disableColorTransforms = false,
  disableAnimation = false,
  id = "primary-button",
  as
} = {}) => {
  return (
    <Button
      variant={variantOptions()}
      disabled={boolean("Disabled", disabled)}
      disableColorTransforms={boolean(
        "Disable color transforms",
        disableColorTransforms
      )}
      disableAnimation={boolean("Disable Animation", disableAnimation)}
      size={sizeOptions()}
      mode={modeOptions()}
      as={asOptions(as)}
      onClick={onClick}
      id={id}
    >
      {children}
    </Button>
  );
};
