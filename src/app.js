import React, { useState } from "react";
import ReactDOM from "react-dom";
import { css, Global } from "@emotion/core";
import { ThemeProvider, withTheme } from "emotion-theming";

import Buttons from "./ui/Buttons";
import themes from "./theme/themes";

// use HOC here since we want the theme to be passed in as prop not context
const ButtonsWithTheme = withTheme(Buttons);

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  /* More info: https://bit.ly/2PsCnzk */
  * + * {
    margin-top: 1rem;
  }
  html {
    font-size: 62.5%;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #555;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;

    /* remove margin for the main div that Gatsby mounts into */
    > div {
      margin-top: 0;
      width: 100%;
      height: 100%;

      > button {
        margin: 0;
        padding: 0;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    line-height: 1.1;
    + * {
      margin-top: 0.5rem;
    }
  }
  strong {
    color: #222;
  }
  li {
    margin-top: 0.25rem;
  }
`;

function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <ButtonsWithTheme setTheme={setTheme} />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
