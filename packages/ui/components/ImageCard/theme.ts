import tw from 'twin.macro';

export const theme = {
  container: {
    base: [tw`flex flex-col`, tw`rounded`],
  },
  header: {
    base: [tw`flex justify-between items-center`, tw`h-16 px-[30px]`],
  },
  body: {
    base: [tw`flex flex-grow`],
  },
};
