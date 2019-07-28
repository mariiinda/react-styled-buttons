import React from "react";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
// toHaveFocus

import Button from "../components/Button";

// afterEach(cleanup)

test("visible focus state", () => {
  const { getByTestId } = render(<Button id="my-button">Click me</Button>);
  getByTestId("my-button").focus();
  expect(getByTestId("my-button")).toHaveFocus();
});

test("renders as disbled", () => {
  //const element = "button";
  const { getByTestId } = render(
    <Button id="my-button" disabled>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toBeDisabled();
});

test("render as anchor element", () => {
  const element = "a";
  const { container } = render(
    <Button id="my-button" as="a">
      Click me
    </Button>
  );
  const anchorEl = container.querySelector(element);
  expect(anchorEl).toBeInTheDocument();
});

test("renders correctly", () => {
  const testChildren = "Click me";
  const { container, getByText } = render(
    <Button id="my-button">{testChildren}</Button>
  );
  expect(getByText(testChildren)).toBeInTheDocument();

  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
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
      background: #1971c2;
      color: #ffffff;
      font-size: 16px;
      font-family: 'Fira Sans',Arial,Helvetica,sans-serif;
      line-height: inherit;
      font-weight: inherit;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      -webkit-transition: 0.2s ease-in-out;
      transition: 0.2s ease-in-out;
      box-shadow: none;
    }

    .emotion-0:hover {
      -webkit-transform: translate3d(0,-3px,0);
      -ms-transform: translate3d(0,-3px,0);
      transform: translate3d(0,-3px,0);
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    }

    .emotion-0:active {
      background: #1864ab;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    }

    .emotion-0:focus {
      box-shadow: 0 0px 8px #74c0fc,0 0px 8px #74c0fc;
    }

    .emotion-0:disabled {
      opacity: 0.6;
    }

    <button
      class="emotion-0"
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
