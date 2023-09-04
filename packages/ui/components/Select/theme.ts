import tw, { css } from 'twin.macro';

export const theme = {
  label: {
    base: [
      tw`transition-colors duration-200`,
      tw`flex items-center justify-between`,
      tw`w-40 h-12`,
      tw`p-3`,
      tw`border rounded-lg border-Gray-100`,
      tw`bg-Gray-300`,
      tw`text-hd2-r text-black`,
      tw`cursor-pointer select-none`,
    ],
    hover: [tw`hover:border-Gray-400`],
    open: [tw`border-Gray-400`],
  },
  optionContainer: [
    tw`bg-Gray-300`,
    tw`w-40 max-h-[360px] overflow-y-auto overflow-x-hidden`,
    tw`rounded-lg border-Gray-100`,
  ],
  option: {
    base: [
      tw`transition-colors duration-200`,
      tw`flex items-center`,
      tw`w-full h-12`,
      tw`p-3`,
      tw`text-bd1-r`,
      // tw`text-bg-Gray-300 text-Neutral-800`,
      tw`cursor-pointer select-none`,
    ],
    hover: [tw`hover:bg-Gray-400`],
    selected: [tw`bg-Gray-400`],
  },
};
