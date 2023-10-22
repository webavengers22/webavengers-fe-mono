import tw, { css } from 'twin.macro';

export const theme = {
  label: {
    base: [
      tw`transition-colors duration-200`,
      tw`bg-Gray-300`, // Updated color class
      tw`flex items-center justify-between`,
      tw`w-56 h-14`,
      tw`pl-2 pr-1`,
      tw`border rounded-lg border-Gray-100`,
      tw`text-hd2-r text-black`, // Updated text size and color class
      tw`cursor-pointer select-none`,
    ],
    hover: [tw`hover:border-Gray-400`],
    open: [tw`border-Gray-400`],
  },
  optionContainer: [
    tw`bg-Gray-300`, // Updated color class
    tw`w-56 max-h-[360px] overflow-y-auto overflow-x-hidden`,
    tw`border rounded-lg border-Gray-100`,
    css`
      box-shadow:
        0 4px 4px rgba(0, 32, 51, 0.04),
        0 8px 24px rgba(0, 32, 51, 0.12);
    `,
  ],
  option: {
    base: [
      tw`transition-colors duration-200`,
      tw`flex items-center`,
      tw`w-full`,
      tw`p-3`,
      tw`text-bd1-r text-Gray-800`, // Updated text size and color class
      tw`cursor-pointer select-none`,
    ],
    hover: [tw`hover:bg-Gray-400`],
    selected: [tw`bg-Gray-400`],
  },
};
