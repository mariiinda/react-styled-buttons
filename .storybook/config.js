import { configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

// automatically import all files ending in *.stories.js
configure(require.context("../src/", true, /\.stories\.js$/), module);

/* addDecorator(withA11y);
addDecorator(withKnobs); */
