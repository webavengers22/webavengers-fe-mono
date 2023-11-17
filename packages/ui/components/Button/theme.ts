import tw from 'twin.macro';

export const theme = {
  base: [
    tw`rounded-md outline-none`,
    tw`disabled:cursor-not-allowed`,
    tw`transition-colors duration-200`,
  ],
  fullWidth: tw`w-full`,
  sizes: {
    sm: [tw`h-6`, tw`px-4 py-1`, tw`text-xs text-cap`],
    md: [tw`h-10`, tw`px-4 py-1`, tw`text-sm text-bd2-r`],
    lg: [tw`h-[3.25rem]`, tw`px-4 py-1`, tw`text-base text-bd1-r`],
  },
  circle: tw`rounded-[5rem]`,
  variants: {
    filled: {
      base: [tw`outline-none`, tw`text-white`, tw`disabled:!bg-Gray-300 disabled:text-Gray-600`],
      colors: {
        primary: [tw`!bg-Primary-500`, tw`hover:!bg-Primary-600`, tw`focus:!bg-Primary-600`],
        secondary: [
          tw`!bg-Secondary-500`,
          tw`hover:!bg-Secondary-600`,
          tw`focus:!bg-Secondary-600`,
        ],
        black: [tw`!bg-black`],
      },
    },
    outlined: {
      base: [tw`border`, tw`!bg-transparent`],
      colors: {
        primary: [
          tw`border-Primary-500 text-Primary-500`,
          tw`hover:text-Primary-600 hover:border-Primary-600`,
          tw`focus:text-Primary-600 focus:border-Primary-600`,
        ],
        secondary: [
          tw`border-Secondary-500 text-Secondary-500`,
          tw`hover:text-Secondary-600 hover:border-Secondary-600`,
          tw`focus:text-Secondary-600 focus:border-Secondary-600`,
        ],
        black: [tw`border-black text-black`],
      },
    },
    text: {
      base: [tw`enabled:hover:underline`, tw`h-auto px-0`, tw`truncate`],
      colors: {
        primary: tw`text-inherit`,
        secondary: tw`text-inherit`,
        black: tw`text-inherit`,
      },
    },
  },
  shape: {
    round: tw`rounded-md`,
    circle: tw`rounded-full`,
  },
};
