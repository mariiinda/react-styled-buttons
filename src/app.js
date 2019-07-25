import React from "react";
import { css } from "@emotion/core";
import ReactDOM from "react-dom";

import Button from "./components/Button";

const gridStyle = css`
  background: red;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas: "header header header . buttons links footer footer footer";
`;

const buttonWrapperStyle = css`
  grid-area: buttons;
  padding: 30px;
  border-bottom: 1px solid var(--accentColor);
`;

function App() {
  return (
    <div css={gridStyle}>
      <section className={buttonWrapperStyle}>
        <Button>Default Button</Button>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
