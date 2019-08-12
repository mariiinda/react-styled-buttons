import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, withTheme } from "emotion-theming";

import Buttons from "./ui/Buttons";
/* import themes from "./theme/themes"; */

// use HOC here since we want the theme to be passed in as prop not context
const ButtonsWithTheme = withTheme(Buttons);

function App() {
  /* const [theme, setTheme] = useState(themes.light); */
  const [mode, setMode] = useState("light");

  return <Buttons mode={mode} setMode={setMode} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
/* 
return (
  <ThemeProvider theme={theme}>
    <ButtonsWithTheme setTheme={setTheme} />
  </ThemeProvider>
); */
