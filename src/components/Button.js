import React from "react";
import { css } from "@emotion/core";

import themes from "../theme/themes";

// CSS
const ButtonStyle = ({ theme }) => css`
  position: relative;
  cursor: pointer;
  outline: none;
  margin: 0;
  padding: 20px;
  width: 100%;
  text-align: center;
  display: inline-block;
  border: none;

  cursor: pointer;

  border-radius: ${theme.borderRadius || "6px"};
  background: ${theme.primaryColor};

  font: 500 1.6rem/1 Arial, Helvetica, sans-serif;
  color: ${theme.foregroundColor};

  transform: translate3d(0, 0, 0);
  transition: transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
`;

function Button({ as: Element, id, onClick, ...props }) {
  const type = Element === "button" && !props.type ? "button" : null;
  return (
    <Element
      css={ButtonStyle(props)}
      id={id}
      onClick={onClick}
      type={type}
      {...props}
    >
      <span>{props.children}</span>
    </Element>
  );
}

Button.defaultProps = {
  as: "button",
  id: "",
  children: null,
  disabled: false,
  onClick: () => {},
  theme: themes["light"]
};

export default Button;
