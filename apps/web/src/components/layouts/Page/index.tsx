import 'twin.macro';

import React, { FC, HTMLAttributes } from 'react';

export const Page: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div tw="relative flex flex-col w-screen bg-Gray-100 w-full h-full items-center" {...props} />
  );
};
