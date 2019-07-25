import React from "react";
import { css } from "@emotion/core";

// CSS
const componentStyle = css`
  position: relative;
`;

function Button({ as: Element, id, onClick, ...props }) {
  return (
    <Element css={componentStyle} id={id} onClick={onClick} {...props}>
      <span>{props.children}</span>
    </Element>
  );
}

Button.defaultProps = {
  as: "button",
  id: "",
  children: null,
  disabled: false
};

export default Button;
