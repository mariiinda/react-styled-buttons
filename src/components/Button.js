import React from "react";
import { css } from "@emotion/core";

import themes from "../theme/themes";

// CSS
const ButtonStyle = theme => css`
  position: relative;
  cursor: pointer;
  outline: none;
  margin: 0;
  padding: 20px;
  width: auto;
  text-align: center;
  display: inline-block;
  border: none;
  border-radius: 6px;
  background: ${theme.primaryColor};
  color: ${theme.backgroundColor};
  font-size: 16px;
  font-family: ${theme.primaryFont};
  line-height: inherit;
  font-weight: inherit;
  transform: translate3d(0, 0, 0);
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background: ${theme.primaryShade5};
    transform: translate3d(0, 0, 0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    box-shadow: 0 0px 8px ${theme.primaryShade1},
      0 0px 8px ${theme.primaryShade1};
  }

  &:disabled {
    opacity: 0.6;
  }
`;

const SecondaryButtonStyle = theme => css`
  background: ${theme.secondaryColor};
  color: ${theme.backgroundColor};

  &:active {
    background: ${theme.secondaryShade5};
  }

  &:focus {
    box-shadow: 0 0px 8px ${theme.secondaryShade1},
      0 0px 8px ${theme.secondaryShade1};
  }
`;

const Accent1ButtonStyle = theme => css`
  background: ${theme.accentColor};
  color: ${theme.backgroundColor};

  &:active {
    background: ${theme.accentShade5};
  }

  &:focus {
    box-shadow: 0 0px 8px ${theme.accentShade1}, 0 0px 8px ${theme.accentShade1};
  }
`;

const Accent2ButtonStyle = theme => css`
  background: ${theme.accent2Color};
  color: ${theme.backgroundColor};

  &:active {
    background: ${theme.accent2Shade5};
  }

  &:focus {
    box-shadow: 0 0px 8px ${theme.accent2Shade1},
      0 0px 8px ${theme.accent2Shade1};
  }
`;

const Accent3ButtonStyle = theme => css`
  background: ${theme.accent3Color};
  color: ${theme.backgroundColor};

  &:active {
    background: ${theme.accent3Shade5};
  }

  &:focus {
    box-shadow: 0 0px 8px ${theme.accent3Shade1},
      0 0px 8px ${theme.accent3Shade1};
  }
`;

const NeutralButtonStyle = theme => css`
  background: ${theme.neutralColor};
  color: ${theme.backgroundColor};

  &:active {
    background: ${theme.neutralColor5};
  }

  &:focus {
    box-shadow: 0 0px 8px ${theme.neutralColor4},
      0 0px 8px ${theme.neutralColor4};
  }
`;

const SmallButtonStyle = css`
  padding: 4px 12px;
  font-size: 14px;
`;

const MediumButtonStyle = css`
  padding: 10px;
`;

const composeStyles = ({ theme, variant, size }) => {
  const cssStyles = [ButtonStyle(theme)];
  const variantCases = {
    secondary: () => cssStyles.push(SecondaryButtonStyle(theme)),
    accent1: () => cssStyles.push(Accent1ButtonStyle(theme)),
    accent2: () => cssStyles.push(Accent2ButtonStyle(theme)),
    accent3: () => cssStyles.push(Accent3ButtonStyle(theme)),
    neutral: () => cssStyles.push(NeutralButtonStyle(theme))
  };
  if (variantCases[variant]) {
    variantCases[variant]();
  }
  const sizeCases = {
    small: () => cssStyles.push(SmallButtonStyle),
    medium: () => cssStyles.push(MediumButtonStyle)
  };
  if (sizeCases[size]) {
    sizeCases[size]();
  }
  return cssStyles;
};

function Button({ as: Element, id, onClick, variant, size, theme, ...props }) {
  const composedStyles = composeStyles({ theme, variant, size });

  const type = Element === "button" && !props.type ? "button" : null;

  return (
    <Element
      css={composedStyles}
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
  theme: themes.light,
  variant: "primary",
  size: "large"
};

// variant: ["primary", "secondary", "accent1", "accent2", "accent3", "neutral"]
// size: ["large", "medium", "small"]

export default Button;
