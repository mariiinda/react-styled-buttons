export default {
  initialColorMode: "light",
  colors: {
    text: "#212529",
    background: "#ffffff",
    primary: "#3b5bdb",
    secondary: "#C2255C",
    accent: "#008658",
    accent2: "#862E9C",
    accent3: "#e03131",
    accent4: "#00788C",
    muted: "#dbe4ff",
    highlight: "#0081ff",
    gray: "#dee2e6",
    grayText: "#495057",
    modes: {
      dark: {
        text: "#ffffff",
        background: "#212529",
        primary: "#b0b7ff",
        secondary: "#ff91b8",
        accent: "#7feab5",
        accent2: "#ff9c61",
        accent3: "#ff9d89",
        accent4: "#82d9ef",
        muted: "#c2cbe5",
        highlight: "#a6e1ff",
        gray: "#515458",
        grayText: "#a3abb3"
      }
    }
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [
    "0.625rem",
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "6rem"
  ],
  fontWeights: {
    body: 400,
    heading: "normal",
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  radii: ["2px", "5px", "50%"],
  zIndices: [10, 20, 100],
  shadows: {
    default: "0 .5rem 1rem rgba(0, 0, 0, .15)",
    sm: "0 .125rem .25rem rgba(0, 0, 0, .075)",
    lg: "0 1rem 3rem rgba(0, 0, 0, .175)"
  },
  breakpoints: ["576px", "768px", "992px", "1200px"],
  sizes: {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140
  }
};
