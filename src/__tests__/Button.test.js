import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render } from "@testing-library/react";
import Button from "../components/Button";

const testChildren = "Click me";
const { container, getByText } = render(
  <Button id="my-button">{testChildren}</Button>
);

test("renders children", () => {
  expect(getByText(testChildren)).toBeInTheDocument();
});

expect(container.firstChild).toMatchInlineSnapshot(`
  <button
    class="css-p9ne9n-ButtonStyle"
    data-testid="my-button"
    id="my-button"
    type="button"
  >
    <span>
      Click me
    </span>
  </button>
`);
