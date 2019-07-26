import React, { useState } from "react";
import ReactDOM from "react-dom";
import { css, Global } from "@emotion/core";
import { ThemeProvider, withTheme } from "emotion-theming";

import Button from "./components/Button";
import themes from "./theme/themes";

// use HOC here since we want the theme to be passed in as prop not context
const ButtonWithTheme = withTheme(Button);

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

const gridStyle = ({ backgroundColor, foregroundColor }) => css`
  background: ${backgroundColor};
  color: ${foregroundColor};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr 1fr;
  grid-template-areas: ${`
  'header header header'
  '. buttons .'
  '. . .'`};

  h2 {
    position: relative;
    top: -10px;
    text-transform: uppercase;
  }
`;

const headerStyle = css`
  grid-area: header;
  padding: 30px;
  border-bottom: 1px solid currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    margin-top: 0;

    button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;

      background: transparent;

      color: inherit;
      font: inherit;

      line-height: normal;

      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;

      -webkit-appearance: none;
    }
  }
`;

const buttonWrapperStyle = css`
  grid-area: buttons;
  padding: 30px;
  border-bottom: 1px solid currentColor;
`;

function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />

      <div css={gridStyle(theme)}>
        <div css={headerStyle}>
          <h1>Themes: </h1>
          <div>
            {Object.keys(themes).length > 0 &&
              Object.keys(themes).map(key => (
                <button key={key} onClick={() => setTheme(themes[key])}>
                  {key}
                </button>
              ))}
          </div>
        </div>
        <section css={buttonWrapperStyle}>
          <h2>Buttons</h2>
          <ButtonWithTheme>Default Button</ButtonWithTheme>
        </section>
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
