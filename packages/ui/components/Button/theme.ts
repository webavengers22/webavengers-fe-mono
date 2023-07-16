import tw from 'twin.macro';

export const theme = {
  base: [
    tw`rounded-md outline-none`,
    tw`disabled:cursor-not-allowed`,
    tw`transition-colors duration-200`,
  ],
  fullWidth: tw`w-full`,
  sizes: {
    sm: [tw`h-8`, tw`px-4`, tw`text-14-17M`],
    md: [tw`h-9`, tw`px-4`, tw`text-14-17M`],
    lg: [tw`h-12`, tw`px-4`, tw`text-16-19M`],
    xl: [tw`h-14`, tw`px-4`, tw`text-18-22M`],
  },
  variants: {
    filled: {
      base: [
        tw`outline-none`,
        tw`text-white`,
        tw`disabled:!bg-Neutral-100 disabled:text-Neutral-500`,
      ],
      colors: {
        primary: [tw`!bg-Primary-500`, tw`hover:!bg-Primary-600`, tw`focus:!bg-Primary-600`],
        secondary: [
          tw`!bg-Graph-BlueGreen-500`,
          tw`hover:!bg-Graph-BlueGreen-600`,
          tw`focus:!bg-Graph-BlueGreen-600`,
        ],
        black: [tw`!bg-Neutral-600`, tw`hover:!bg-Primary-500`, tw`focus:!bg-Primary-500`],
      },
    },
    outlined: {
      base: [tw`border`, tw`!bg-Shades-0`],
      colors: {
        primary: [
          tw`border-Primary-500 text-Primary-500`,
          tw`hover:text-Primary-600 hover:border-Primary-600`,
          tw`focus:text-Primary-600 focus:border-Primary-600`,
        ],
        secondary: [
          tw`border-Graph-BlueGreen-500 text-Graph-BlueGreen-500`,
          tw`hover:text-Graph-BlueGreen-600 hover:border-Graph-BlueGreen-600`,
          tw`focus:text-Graph-BlueGreen-600 focus:border-Graph-BlueGreen-600`,
        ],
        black: [
          tw`border-Neutral-400 text-Neutral-600`,
          tw`hover:text-Primary-500 hover:border-Primary-500`,
          tw`focus:text-Primary-500 focus:border-Primary-500`,
        ],
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
};
