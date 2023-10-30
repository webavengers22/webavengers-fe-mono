import tw, { css } from 'twin.macro';

export const theme = {
  tooltip: {
    base: [
      tw`p-4 rounded`,
      tw`bg-black`,
      tw`border border-black`,
      tw`pointer-events-none select-none`,
      css`
        box-shadow: 0px 4px 6px -4px rgba(24, 39, 75, 0.12), 0px 8px 8px -4px rgba(24, 39, 75, 0.08);
      `,
    ],
  },
};
