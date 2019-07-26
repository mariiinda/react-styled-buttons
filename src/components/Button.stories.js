import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";

import Button from "./Button";
import themes from "../theme/themes";

const stories = storiesOf("Button", module);

stories
  .add("primary", () => (
    <Button disabled={boolean("Disabled", false)} size={text("Size", "large")}>
      Primary Button
    </Button>
  ))
  .add("secondary", () => (
    <Button disabled={boolean("Disabled", false)} variant="secondary">
      Secondary Button
    </Button>
  ))
  .add("accent1", () => (
    <Button disabled={boolean("Disabled", false)} variant="accent1">
      Accent1 Button
    </Button>
  ))
  .add("accent2", () => (
    <Button disabled={boolean("Disabled", false)} variant="accent2">
      Accent2 Button
    </Button>
  ))
  .add("accent3", () => (
    <Button disabled={boolean("Disabled", false)} variant="accent3">
      Accent3 Button
    </Button>
  ))
  .add("dark primary", () => (
    <Button disabled={boolean("Disabled", false)} theme={themes.dark}>
      Primary Button Dark
    </Button>
  ))
  .add("dark secondary", () => (
    <Button
      disabled={boolean("Disabled", false)}
      theme={themes.dark}
      variant="secondary"
    >
      Secondary Button Dark
    </Button>
  ))
  .add("dark accent1", () => (
    <Button
      disabled={boolean("Disabled", false)}
      theme={themes.dark}
      variant="accent1"
    >
      Accent1 Button Dark
    </Button>
  ))
  .add("dark accent2", () => (
    <Button
      disabled={boolean("Disabled", false)}
      theme={themes.dark}
      variant="accent2"
    >
      Accent2 Button Dark
    </Button>
  ))
  .add("dark accent3", () => (
    <Button
      disabled={boolean("Disabled", false)}
      theme={themes.dark}
      variant="accent3"
    >
      Accent3 Button Dark
    </Button>
  ));
