import 'twin.macro';

import React, { FC, HTMLAttributes } from 'react';

export const Page: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div tw="flex flex-col w-screen h-screen bg-Gray-100 w-full items-center" {...props} />;
};
