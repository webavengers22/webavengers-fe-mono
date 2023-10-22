import 'twin.macro';

import React, { FC, HTMLAttributes } from 'react';
import tw from 'twin.macro';

export const Page: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      tw="relative flex flex-col w-screen h-screen bg-Gray-100 text-black w-full h-full items-center"
      {...props}
    />
  );
};
