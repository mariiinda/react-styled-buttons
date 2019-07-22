/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export default function Button({ children, disabled=false }) {
  return (
    <button
      type="button"
      css={css`
        padding: 2rem;
        background: red;

        &:disabled {
          background: blue;
        }
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
