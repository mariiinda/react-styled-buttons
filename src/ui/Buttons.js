import React, { useState } from "react";

import { css } from "@emotion/core";
import { withTheme } from "emotion-theming";

import Button from "../components/Button";
import themes from "../theme/themes";

// use HOC here since we want the theme to be passed in as prop not context
const ButtonWithTheme = withTheme(Button);

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
        <ButtonWithTheme>Default Button</ButtonWithTheme>
        <ButtonWithTheme variant="secondary">Secondary Button</ButtonWithTheme>
        <ButtonWithTheme variant="accent1">Accent1 Button</ButtonWithTheme>
        <ButtonWithTheme variant="accent2">Accent2 Button</ButtonWithTheme>
        <ButtonWithTheme variant="accent3">Accent3 Button</ButtonWithTheme>
        <ButtonWithTheme size="medium">Medium Button</ButtonWithTheme>
        <ButtonWithTheme size="small">Small Button</ButtonWithTheme>
      </section>
    </div>
  );
}

export default Buttons;
