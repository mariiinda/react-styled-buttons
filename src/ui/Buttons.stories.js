import React, { useState } from "react";
import { withA11y } from "@storybook/addon-a11y";

import Buttons from "./Buttons";
import themes from "../theme/themes";

export default { title: "UI|Buttons", decorators: [withA11y] };

export const light = () =>
  React.createElement(() => {
    const [theme, setTheme] = useState(themes.light);
    return <Buttons theme={theme} setTheme={setTheme}></Buttons>;
  });

export const dark = () =>
  React.createElement(() => {
    const [theme, setTheme] = useState(themes.dark);
    return <Buttons theme={theme} setTheme={setTheme}></Buttons>;
  });
