import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";

import Buttons from "./Buttons";
import themes from "../theme/themes";

const stories = storiesOf("UI|Buttons", module);

stories.add("Buttons", () =>
  React.createElement(() => {
    const [theme, setTheme] = useState(themes.light);
    return <Buttons theme={theme} setTheme={setTheme}></Buttons>;
  })
);
