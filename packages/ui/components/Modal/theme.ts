import tw from 'twin.macro';

export const theme = {
  overlay: [tw`grid place-items-center `],
  container: {
    base: [
      tw`w-[378px]`,
      tw`rounded-2xl`,
      tw`text-black bg-Gray-200`,
      tw`text-black bg-Gray-100`,
      tw`p-6`,
      tw`outline-none shadow-0`,
    ],
  },
  sizes: {
    md: {
      container: [tw`w-96 h-48`],
      bodyContainer: [tw`px-2 py-2 text-sm`, tw`my-4`],
      bottomContainer: [tw`flex justify-end items-end`, tw`mt-auto`, tw`p-2`], // md 크기에 맞는 bottomContainer 스타일
    },
    lg: {
      container: [tw`w-[32rem] h-[15rem]`],
      bodyContainer: [tw`px-4 py-4 text-lg`, tw`my-6`],
      bottomContainer: [tw`flex justify-end items-end`, tw`mt-auto`, tw`p-4`], // lg 크기에 맞는 bottomContainer 스타일
    },
  },
  headerContainer: [tw`flex`],
  headerTitleContainer: [tw`flex-grow`, tw`text-hd2-b`],
  closeButton: [tw`w-6 h-6 !bg-transparent text-black`],
  bodyContainer: [tw`flex flex-col justify-center items-start`, tw`my-5`, tw`text-bd1-r`],
  bottomContainer: [tw`flex justify-end items-end`, tw`mt-auto`, tw`p-2`],
  buttonContainer: [tw`ml-4`],
};
