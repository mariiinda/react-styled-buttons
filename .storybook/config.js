import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
addDecorator(withKnobs);

// import dynamically
const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  require("../src/components/Button/Button.stories");
}

configure(loadStories, module);
