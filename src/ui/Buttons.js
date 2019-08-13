import React from "react";

import { css, Global } from "@emotion/core";

import Button from "../components/Button";
import tetrisTheme from "@marinda/tetris-theme-ui-preset";

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
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const gridStyle = ({ text, background }) => css`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  grid-template-areas: ${`
  'header header header'
  '. buttons .'
  '. . .'`};
  background: ${background};
  color: ${text};
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

function Buttons({ mode, setMode }) {
  const { colors } = tetrisTheme;
  const colormodeColors = mode === "light" ? colors : colors.modes.dark;
  return (
    <>
      <Global styles={globalStyle} />
      <div
        css={gridStyle({
          background: colormodeColors.background,
          text: colormodeColors.text
        })}
      >
        <div css={headerStyle}>
          <Button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            size="small"
          >
            Show {mode === "light" ? "dark" : "light"} mode
          </Button>
        </div>
        <section css={buttonWrapperStyle}>
          <Button mode={mode}>Default Button</Button>
          <Button mode={mode} variant="secondary">
            Secondary Button
          </Button>
          <Button mode={mode} variant="accent">
            Accent1 Button
          </Button>
          <Button mode={mode} variant="accent2">
            Accent2 Button
          </Button>
          <Button mode={mode} variant="accent3">
            Accent3 Button
          </Button>
          <Button mode={mode} variant="accent4">
            Accent4 Button
          </Button>
          <Button mode={mode} variant="gray">
            Gray Button
          </Button>
          <Button mode={mode} size="medium">
            Medium Button
          </Button>
          <Button mode={mode} size="small">
            Small Button
          </Button>
          <Button
            mode={mode}
            theme={{
              colors: {
                background: "#f8f0fc",
                primary: "#862E9C",
                primaryShades: ["peachpuff", "purple", "rebeccapurple"],
                modes: {
                  dark: {
                    background: "#333",
                    primary: "#e599f7"
                  }
                }
              },
              shadows: {
                default: "0 .5rem 1rem rebeccapurple"
              }
            }}
          >
            Custom theme button
          </Button>
        </section>
      </div>
    </>
  );
}

export default Buttons;
