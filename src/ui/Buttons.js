import React from "react";

import { css, Global } from "@emotion/core";

import Button from "../components/Button";
import themes from "../theme/themes";

// styles
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
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  grid-template-areas: ${`
  'header header header'
  '. buttons .'
  '. . .'`};
  background: ${backgroundColor};
  color: ${foregroundColor};
  width: 100%;
  height: 100%;
  transition: 0.2s ease;
  section {
    position: relative;
  }

  h2 {
    position: absolute;
    top: 0px;
    left: 0;
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
      margin: 0 4px;
    }
  }
`;

const buttonWrapperStyle = css`
  grid-area: buttons;
  padding: 30px;
  border-bottom: 1px solid currentColor;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  > button {
    flex: 0 1 calc(50% - 20px);
    margin-top: 20px;
  }
`;

function Buttons({ theme, setTheme }) {
  return (
    <>
      <Global styles={globalStyle} />
      <div css={gridStyle(theme)}>
        <div css={headerStyle}>
          <h1>Themes: </h1>
          <div>
            {Object.keys(themes).length > 0 &&
              Object.keys(themes).map(key => (
                <Button
                  key={key}
                  onClick={() => setTheme(themes[key])}
                  size="small"
                >
                  {key}
                </Button>
              ))}
          </div>
        </div>
        <section css={buttonWrapperStyle}>
          <h2>Buttons</h2>
          <Button theme={theme.id}>Default Button</Button>
          <Button theme={theme.id} variant="secondary">
            Secondary Button
          </Button>
          <Button theme={theme.id} variant="accent1">
            Accent1 Button
          </Button>
          <Button theme={theme.id} variant="accent2">
            Accent2 Button
          </Button>
          <Button theme={theme.id} variant="accent3">
            Accent3 Button
          </Button>
          <Button theme={theme.id} variant="neutral">
            Neutral Button
          </Button>
          <Button theme={theme.id} size="medium">
            Medium Button
          </Button>
          <Button theme={theme.id} size="small">
            Small Button
          </Button>
        </section>
      </div>
    </>
  );
}

export default Buttons;
