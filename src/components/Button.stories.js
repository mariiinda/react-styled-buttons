import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, object } from "@storybook/addon-knobs";

import Button from "./Button";
import themes from "../theme/themes";

const stories = storiesOf("Button", module);

stories
  .add("default", () => (
    <Button disabled={boolean("Disabled", false)}>Default Button</Button>
  ))
  .add("dark", () => (
    <Button disabled={boolean("Disabled", false)} theme={themes.dark}>
      Dark Button
    </Button>
  ))
  .add("Inaccessible", () => (
    <button style={{ backgroundColor: "red", color: "darkRed" }}>
      Inaccessible button
    </button>
  ));
