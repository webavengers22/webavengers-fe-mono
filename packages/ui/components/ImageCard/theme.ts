import tw from 'twin.macro';

export const theme = {
  container: {
    base: [tw`bg-white overflow-hidden relative`],
  },
  image: {
    base: [tw`bg-cover bg-center h-64 w-60 relative`, tw`rounded-lg`],
    img: [tw`opacity-0 absolute w-full h-full`],
  },
  tag: {
    base: [tw`absolute bottom-2 left-2 list-none`],
    li: [
      tw`inline-flex justify-center items-center`,
      tw`w-16 h-6 px-2 py-1 bg-black-60 `,
      tw`rounded-md backdrop-blur-sm `,
    ],
    span: [tw`text-white`, tw`text-sm`],
  },
  content: {
    base: [tw`w-full pt-3`],
    time: [tw`text-bd2-r pb-1`],
    title: [tw`text-tit-r font-bold leading-7 text-ellipsis pb-1`],
    footer: [tw`flex justify-between items-center mt-4`],
  },
};
