import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import Buttons from "./Buttons";
import themes from "../theme/themes";

const stories = storiesOf("UI|Buttons", module);

stories.add("Light Buttons", () =>
  React.createElement(() => {
    const [theme, setTheme] = useState(themes.light);
    return <Buttons theme={theme} setTheme={setTheme}></Buttons>;
  })
);
stories.add("Dark Buttons", () =>
  React.createElement(() => {
    const [theme, setTheme] = useState(themes.dark);
    return <Buttons theme={theme} setTheme={setTheme}></Buttons>;
  })
);
