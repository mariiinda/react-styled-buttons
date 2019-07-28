import React from "react";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";

import Button from "../components/Button";

// afterEach(cleanup)

test("renders correctly", () => {
  const testChildren = "Click me";
  const { container, getByText } = render(
    <Button id="my-button">{testChildren}</Button>
  );
  expect(getByText(testChildren)).toBeInTheDocument();

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
});

test("renders as anchor element", () => {
  const element = "a";
  const { container } = render(
    <Button id="my-button" as="a">
      Click me
    </Button>
  );
  const anchorEl = container.querySelector(element);
  expect(anchorEl).toBeInTheDocument();

  expect(container.firstChild).toMatchInlineSnapshot(`
    <a
      class="css-p9ne9n-ButtonStyle"
      data-testid="my-button"
      id="my-button"
    >
      <span>
        Click me
      </span>
    </a>
  `);
});