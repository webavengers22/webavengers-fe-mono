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
      tw`w-4 h-4`,
      tw`flex items-center justify-center`,
      tw`border-2 rounded-sm stroke-2 border-[rgba(4, 9, 33, 0.32)]`,
      tw`text-white bg-Shades-0 fill-white`,
      tw`peer-checked:bg-Primary-500 peer-checked:border-Primary-500`,
    ],
    indeteminate: [tw`peer-indeterminate:bg-Primary-500 peer-indeterminate:border-Primary-500`],
    hover: [
      tw`group-hover:border-Primary-500`,
      tw`peer-checked:group-hover:bg-Primary-600`,
      tw`peer-checked:group-hover:border-Primary-600`,
      tw`peer-indeterminate:group-hover:bg-Primary-600`,
      tw`peer-indeterminate:group-hover:border-Primary-600`,
    ],
  },
  label: tw`select-none text-bd1-r text-black`,
};
