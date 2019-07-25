import React from "react";
import { css } from "@emotion/core";

export default function Button({ children, disabled = false }) {
  return (
    <button
      type="button"
      css={css`
        padding: 2rem;
        background: red;

        &:disabled {
          opacity: 0;
        }
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
