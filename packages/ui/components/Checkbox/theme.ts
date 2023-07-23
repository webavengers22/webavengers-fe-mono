import tw, { css } from 'twin.macro';

export const theme = {
  container: {
    base: [
      tw`relative inline-flex items-center justify-center gap-2`,
      tw`cursor-pointer`,
      css`
        &.disabled {
          ${tw`pointer-events-none`}
        }
      `,
    ],
  },
  input: tw`absolute appearance-none`,
  icon: {
    base: [
      tw`transition-colors duration-200`,
      tw`flex items-center justify-center`,
      tw`border-2 rounded stroke-2`,
      tw`text-white fill-white`,
    ],
    colors: {
      primary: [
        tw`border-Primary-500`,
        tw`peer-checked:bg-Primary-500`,
        tw`peer-checked:border-Primary-500`,
      ],
      black: [
        tw`opacity-50`,
        tw`border-black`,
        tw`peer-checked:bg-black`,
        tw`peer-checked:border-black`,
      ],
    },
    sizes: {
      sm: [tw`w-4 h-4`, tw`text-xs text-cap`],
      md: [tw`w-6 h-6`, tw`text-sm text-bd2-r`],
    },
    indeteminate: {
      primary: [tw`peer-indeterminate:bg-Primary-500 peer-indeterminate:border-Primary-500`],
      black: [tw`peer-indeterminate:bg-black peer-indeterminate:border-black`],
    },
    hover: {
      primary: [
        tw`group-hover:border-Primary-500`,
        tw`peer-checked:group-hover:bg-Primary-600`,
        tw`peer-checked:group-hover:border-Primary-600`,
        tw`peer-indeterminate:group-hover:bg-Primary-600`,
        tw`peer-indeterminate:group-hover:border-Primary-600`,
      ],
      // todo : black 컬러 hover 만선이에게 물어보기
      // secondary: [
      //   tw`group-hover:border-black`,
      //   tw`peer-checked:group-hover:bg-Primary-600`,
      //   tw`peer-checked:group-hover:border-Primary-600`,
      //   tw`peer-indeterminate:group-hover:bg-Primary-600`,
      //   tw`peer-indeterminate:group-hover:border-Primary-600`,
      // ],
    },
  },
  label: tw`select-none text-bd1-r text-black`,
};
