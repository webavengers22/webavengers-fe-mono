import tw from 'twin.macro';

export const theme = {
  overlay: [tw`grid place-items-center `],
  container: {
    base: [
      tw`w-[378px]`,
      tw`rounded-2xl`,
      tw`text-black bg-Gray-200`,
      tw`p-6`,
      tw`outline-none shadow-0`,
    ],
  },
  headerContainer: [tw`flex`],
  headerTitleContainer: [tw`flex-grow`, tw`text-hd2-b`],
  closeButton: [tw`w-6 h-6 !bg-transparent text-black`],
  bodyContainer: [tw`mt-7`, tw`text-bd1-r`],
  bottomContainer: [tw`ml-auto mt-6 max-w-max`],
};
