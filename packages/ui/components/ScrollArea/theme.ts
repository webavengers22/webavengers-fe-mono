import tw, { css } from 'twin.macro';

export const theme = {
  base: css`
    overflow: auto;
    @supports (overflow: overlay) {
      overflow: overlay;
    }

    &::-webkit-scrollbar {
      ${tw`w-12 h-12`}// Updated class names
    }

    &::-webkit-scrollbar-corner {
      ${tw`bg-transparent`}
    }

    &::-webkit-scrollbar-thumb {
      ${tw`bg-opacity-50 bg-clip-padding bg-Primary-600`}
      ${tw`border-2 border-solid border-transparent rounded-lg`} // Updated class names
    }
  `,
  hover: [
    css`
      &::-webkit-scrollbar-thumb {
        ${tw`bg-opacity-0`}
      }

      &:hover::-webkit-scrollbar-thumb {
        ${tw`bg-opacity-50`}
      }
    `,
  ],
};
