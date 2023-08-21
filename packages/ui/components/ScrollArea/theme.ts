import tw, { css } from 'twin.macro';

export const theme = {
  base: css`
    overflow: auto;
    @supports (overflow: overlay) {
      overflow: overlay;
    }

    &::-webkit-scrollbar {
      ${tw`w-[12px]`}
      ${tw`h-[12px]`}
    }

    &::-webkit-scrollbar-corner {
      ${tw`bg-transparent`}
    }

    &::-webkit-scrollbar-thumb {
      ${tw`bg-Gray-100 bg-clip-padding bg-Primary-600`}

      ${tw`border-[3px] border-solid border-transparent`}
      ${tw`rounded-[22px]`}
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
