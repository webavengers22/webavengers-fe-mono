import tw from 'twin.macro';

export const theme = {
  item: {
    base: [
      tw`transition-colors duration-200`,
      tw`flex items-center justify-center`,
      tw`h-8 min-w-[2rem]`,
      tw`text-bd1-r text-black`,
      tw`rounded-3xl select-none`,
    ],
    selected: [tw`bg-black text-white `],
    selectedHover: [tw`enabled:hover:bg-Gray-100`],
    hover: [tw`enabled:hover:text-black`],
    disabled: [tw`disabled:text-Gray-100 disabled:cursor-not-allowed`],
  },
};
