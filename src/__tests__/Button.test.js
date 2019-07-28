import React from "react";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

import Button from "../components/Button";

afterEach(cleanup);

test("visible focus state", () => {
  const { getByTestId } = render(<Button id="my-button">Click me</Button>);
  getByTestId("my-button").focus();
  expect(getByTestId("my-button")).toHaveFocus();
});

test("renders as disbled", () => {
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

test("renders dark theme", () => {
  const theme = "dark";
  const { getByTestId } = render(
    <Button id="my-button" theme={theme}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchSnapshot();
});

test("renders secondary variant", () => {
  const variant = "secondary";
  const { getByTestId } = render(
    <Button id="my-button" variant={variant}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchSnapshot();
});

test("renders accent1 variant", () => {
  const variant = "accent1";
  const { getByTestId } = render(
    <Button id="my-button" variant={variant}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchSnapshot();
});
test("renders accent2 variant", () => {
  const variant = "accent2";
  const { getByTestId } = render(
    <Button id="my-button" variant={variant}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchSnapshot();
});

test("renders neutral variant", () => {
  const variant = "neutral";
  const { getByTestId } = render(
    <Button id="my-button" variant={variant}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchSnapshot();
});

test("renders medium size", () => {
  const size = "medium";
  const { getByTestId } = render(
    <Button id="my-button" size={size}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchSnapshot();
});

test("renders small size", () => {
  const size = "small";
  const { getByTestId } = render(
    <Button id="my-button" size={size}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchSnapshot();
});

test("renders correctly", () => {
  const testChildren = "Click me";
  const { container, getByText } = render(
    <Button id="my-button">{testChildren}</Button>
  );
  expect(getByText(testChildren)).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});
