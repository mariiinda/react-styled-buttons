import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, number } from "@storybook/addon-knobs";

import Button from "./index";

const stories = storiesOf("Button", module);

stories
  .add("with text", () => (
    <Button disabled={boolean("Disabled", false)}>Hello Button</Button>
  ))
  .add("Inaccessible", () => (
    <button style={{ backgroundColor: "red", color: "darkRed" }}>
      Inaccessible button
    </button>
  ));
