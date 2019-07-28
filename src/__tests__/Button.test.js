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

test("renders dark theme", () => {
  const theme = "dark";
  const { getByTestId } = render(
    <Button id="my-button" theme={theme}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchInlineSnapshot(`
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
                  background: #4dabf7;
                  color: #000000;
                  font-size: 16px;
                  font-family: 'Fira Sans',Arial,Helvetica,sans-serif;
                  line-height: inherit;
                  font-weight: inherit;
                  -webkit-transform: translate3d(0,0,0);
                  -ms-transform: translate3d(0,0,0);
                  transform: translate3d(0,0,0);
                  -webkit-transition: 0.2s ease-in-out;
                  transition: 0.2s ease-in-out;
                }

                .emotion-0:hover {
                  -webkit-transform: translate3d(0,-3px,0);
                  -ms-transform: translate3d(0,-3px,0);
                  transform: translate3d(0,-3px,0);
                  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
                }

                .emotion-0:active {
                  background: #339af0;
                  -webkit-transform: translate3d(0,0,0);
                  -ms-transform: translate3d(0,0,0);
                  transform: translate3d(0,0,0);
                  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
                }

                .emotion-0:focus {
                  box-shadow: 0 0px 8px #228be6,0 0px 8px #228be6;
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

test("renders secondary variant", () => {
  const variant = "secondary";
  const { getByTestId } = render(
    <Button id="my-button" variant={variant}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchInlineSnapshot(`
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
              background: #6741d9;
              color: #ffffff;
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

            .emotion-0:active {
              background: #5f3dc4;
            }

            .emotion-0:focus {
              box-shadow: 0 0px 8px #b197fc,0 0px 8px #b197fc;
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

test("renders accent1 variant", () => {
  const variant = "accent1";
  const { getByTestId } = render(
    <Button id="my-button" variant={variant}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchInlineSnapshot(`
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
          background: #0b7285;
          color: #ffffff;
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

        .emotion-0:active {
          background: #0c8599;
        }

        .emotion-0:focus {
          box-shadow: 0 0px 8px #66d9e8,0 0px 8px #66d9e8;
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
test("renders accent2 variant", () => {
  const variant = "accent2";
  const { getByTestId } = render(
    <Button id="my-button" variant={variant}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchInlineSnapshot(`
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
      background: #087f5b;
      color: #ffffff;
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

    .emotion-0:active {
      background: #099268;
    }

    .emotion-0:focus {
      box-shadow: 0 0px 8px #63e6be,0 0px 8px #63e6be;
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
test("renders accent3 variant", () => {
  const variant = "accent3";
  const { getByTestId } = render(
    <Button id="my-button" variant={variant}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchInlineSnapshot(`
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
      background: #e03131;
      color: #ffffff;
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

    .emotion-0:active {
      background: #c92a2a;
    }

    .emotion-0:focus {
      box-shadow: 0 0px 8px #ffa8a8,0 0px 8px #ffa8a8;
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

test("renders neutral variant", () => {
  const variant = "neutral";
  const { getByTestId } = render(
    <Button id="my-button" variant={variant}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchInlineSnapshot(`
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
                          background: #495057;
                          color: #ffffff;
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

                        .emotion-0:active {
                          background: #343a40;
                        }

                        .emotion-0:focus {
                          box-shadow: 0 0px 8px #868e96,0 0px 8px #868e96;
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

test("renders medium size", () => {
  const size = "medium";
  const { getByTestId } = render(
    <Button id="my-button" size={size}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchInlineSnapshot(`
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
                      padding: 10px;
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

test("renders small size", () => {
  const size = "small";
  const { getByTestId } = render(
    <Button id="my-button" size={size}>
      Click me
    </Button>
  );
  expect(getByTestId("my-button")).toMatchInlineSnapshot(`
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
                                  padding: 4px 12px;
                                  font-size: 14px;
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
