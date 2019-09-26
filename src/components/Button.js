import React, { useEffect, useState } from "react";
import { css } from "@emotion/core";
import chroma from "chroma-js";

import defaultTheme from "../theme";

// CSS
const ButtonStyle = ({
  theme: {
    fontSizes: [, , , fourthFontSize] = [],
    space: [, , , fourthSpace] = [],
    radii: [, secondRadius] = [],
    shadows
  },
  themeColors: { background, primary }
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
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${chroma(primary)
      .saturate(0.5)
      .hex()};
    transform: translate3d(0, -3px, 0);
    box-shadow: ${shadows.default};
  }

  &:active {
    background: ${chroma(primary)
      .saturate(0.5)
      .darken(0.5)
      .hex()};
    transform: translate3d(0, 0, 0);
    box-shadow: ${shadows.default};
  }

  &:focus {
    box-shadow: 0 0px 8px
      ${chroma(primary)
        .brighten(1)
        .saturate(3)
        .hex()};
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
  const variantColor = colors[variant];
  return css`
    background: ${variantColor};
    color: ${variant === "gray" ? colors.text : colors.background};

    &:hover {
      background: ${variant === "gray"
        ? chroma(variantColor)
            .darken(0.5)
            .hex()
        : chroma(variantColor)
            .saturate(0.5)
            .hex()};
    }

    &:active {
      background: ${variant === "gray"
        ? chroma(variantColor)
            .darken(0.8)
            .hex()
        : chroma(variantColor)
            .saturate(0.5)
            .darken(0.5)
            .hex()};
    }

    &:focus {
      box-shadow: 0 0px 8px
        ${chroma(variantColor)
          .brighten(1)
          .saturate(3)
          .hex()};
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

  variant &&
    variant !== "primary" &&
    cssStyles.push(VariantStyle({ colors: themeColors, variant }));
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
  theme,
  ...props
}) {
  const [mergedTheme, setMergedTheme] = useState(theme);
  const [themeColors, setThemeColors] = useState(theme.colors);

  useEffect(() => {
    if (mode !== "light") {
      const nextThemeColors = mergedTheme.colors.modes[mode];
      nextThemeColors && setThemeColors(nextThemeColors);
    }
    if (mode === "light") {
      const nextThemeColors = mergedTheme.colors;
      nextThemeColors && setThemeColors(nextThemeColors);
    }
  }, [mode, mergedTheme]);

  useEffect(() => {
    if (theme) {
      const nextMergedTheme = Object.assign(
        {},
        {
          colors: defaultTheme.colors,
          space: defaultTheme.space,
          fontSizes: defaultTheme.fontSizes,
          radii: defaultTheme.radii,
          shadows: defaultTheme.shadows
        },
        theme
      );
      setMergedTheme(nextMergedTheme);
      const nextThemeColors = nextMergedTheme.colors;
      setThemeColors(nextThemeColors);
    }
  }, [theme]);

  const composedStyles = composeStyles({
    theme: mergedTheme,
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
  theme: defaultTheme,
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
