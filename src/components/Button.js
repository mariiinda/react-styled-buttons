import React, { useEffect, useState } from "react";
import { css } from "@emotion/core";

import tetrisTheme from "@marinda/tetris-theme-ui-preset";

// CSS
const ButtonStyle = ({
  theme: {
    fontSizes: [, , , fourthFontSize],
    space: [, , , fourthSpace],
    radii: [, secondRadius],
    shadows
  },
  themeColors: {
    background,
    primary,
    primaryShades: [firstShade, secondShade, lastShade]
  }
}) => css`
  position: relative;
  cursor: pointer;
  outline: none;
  margin: 0;
  padding: ${fourthSpace}px;
  width: auto;
  text-align: center;
  display: inline-block;
  border: none;
  border-radius: ${secondRadius};
  background: ${primary};
  color: ${background};
  font-size: ${fourthFontSize};
  font-family: inherit;
  line-height: inherit;
  font-weight: inherit;
  transform: translate3d(0, 0, 0);
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${secondShade};
    transform: translate3d(0, -3px, 0);
    box-shadow: ${shadows.default};
  }

  &:active {
    background: ${lastShade};
    transform: translate3d(0, 0, 0);
    box-shadow: ${shadows.default};
  }

  &:focus {
    box-shadow: 0 0px 8px ${secondShade}, 0 0px 8px ${firstShade};
  }
`;

const disabledStyle = css`
  opacity: 0.6;
  cursor: default;
  transition: none;
  transform: translate3d(0, 0, 0);
  pointer-events: none;
`;

const VariantStyle = ({ colors, variant }) => {
  const shades = colors[`${variant}Shades`];
  let hoverColor = colors.grayText;
  if (shades && shades.length > 0) {
    hoverColor = shades[1];
  }
  return css`
    background: ${colors[variant]};
    color: ${variant === "gray" ? colors.text : colors.background};

    &:hover {
      color: ${variant === "gray" ? colors.gray : colors.background};
      background: ${hoverColor};
    }
  `;
};

const SmallButtonStyle = ({
  space: [, secondSpace, thirdSpace],
  fontSizes: [, , thirdFontSize]
}) => css`
  padding: ${secondSpace}px ${thirdSpace}px;
  font-size: ${thirdFontSize}px;
`;

const MediumButtonStyle = ({ space: [, , thirdSpace] }) => css`
  padding: ${thirdSpace}px;
`;

const composeStyles = ({ theme, themeColors, variant, size, disabled }) => {
  const cssStyles = [ButtonStyle({ theme, themeColors })];
  const sizeCases = {
    small: () => cssStyles.push(SmallButtonStyle(theme)),
    medium: () => cssStyles.push(MediumButtonStyle(theme))
  };

  if (sizeCases[size]) {
    sizeCases[size]();
  }

  variant && cssStyles.push(VariantStyle({ colors: themeColors, variant }));
  disabled && cssStyles.push(disabledStyle);

  return cssStyles;
};

function Button({
  as: Element,
  id,
  onClick,
  variant,
  size,
  mode,
  disabled,
  ...props
}) {
  // TODO deep merge theme prop with theme preset

  const [theme, setTheme] = useState(tetrisTheme);
  const [themeColors, setThemeColors] = useState(tetrisTheme.colors);
  useEffect(() => {
    if (mode !== "light") {
      const nextThemeColors = tetrisTheme.colors.modes[mode];
      setThemeColors(nextThemeColors);
    }
    if (mode === "light") {
      const nextThemeColors = tetrisTheme.colors;
      setThemeColors(nextThemeColors);
    }
  }, [mode]);

  const composedStyles = composeStyles({
    theme,
    themeColors,
    variant,
    size,
    disabled
  });
  const type = Element === "button" && !props.type ? "button" : null;

  return (
    <Element
      css={composedStyles}
      id={id}
      data-testid={id}
      onClick={onClick}
      type={type}
      disabled={disabled}
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
  mode: "light",
  variant: "primary",
  size: "large"
};

// enumarables: todo add to proptypes
// variant: ["primary", "secondary", "accent", "accent2", "accent3", "accent4", "gray"]
// size: ["large", "medium", "small"]
// mode ["light","dark"]

export default Button;
