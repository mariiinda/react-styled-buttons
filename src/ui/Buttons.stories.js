import React, { useState } from "react";
import { withA11y } from "@storybook/addon-a11y";

import Buttons from "./Buttons";
/* import themes from "../theme/themes"; */

export default { title: "UI|Buttons", decorators: [withA11y] };

export const light = () =>
  React.createElement(() => {
    const [mode, setMode] = useState("light");
    return <Buttons mode={mode} setMode={setMode}></Buttons>;
  });

export const dark = () =>
  React.createElement(() => {
    const [mode, setMode] = useState("dark");
    return <Buttons mode={mode} setMode={setMode}></Buttons>;
  });
