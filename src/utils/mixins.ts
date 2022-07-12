import { breakpoints } from "@data/styles";
import { css } from "@emotion/react";

export const upFromBreakpoint = (
  breakpoint: keyof typeof breakpoints
): string => {
  return `@media (min-width: ${breakpoints[breakpoint]}px)`;
};

export const upToBreakpoint = (
  breakpoint: keyof typeof breakpoints
): string => {
  return `@media (max-width: ${breakpoints[breakpoint] - 1}px)`;
};

export const maxWidth = css`
  --maxWidth: 80rem;
  --maxWidthPadding: 1rem;
  align-self: center;
  width: 100%;
  max-width: var(--maxWidth);
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--maxWidthPadding);
  padding-left: var(--maxWidthPadding);

  ${upFromBreakpoint("small")} {
    --maxWidthPadding: 2rem;
  }
`;
export const maxWidthText = css`
  ${maxWidth}
  --maxWidth: 50rem;
`;
