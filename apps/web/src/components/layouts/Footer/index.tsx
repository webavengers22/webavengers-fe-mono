import tw from 'twin.macro';

import Link from 'next/link';
import React, { FC } from 'react';

import { LogoRectIcon } from 'icons';
import { Button, IconButton } from 'ui';

export const Footer: FC = () => {
  return (
    <footer
      css={[
        tw`relative w-full h-20 `,
        tw`flex items-center justify-center`,
        tw`text-black bg-Gray-200`,
      ]}
    >
      <section
        css={[
          tw`xl:max-w-[64rem] lg:max-w-[64rem] md:max-w-[48rem] sm:max-w-[48rem] h-9`,
          tw`flex flex-row items-center gap-4`,
        ]}
      >
        <IconButton css={[tw`relative w-28 h-full`]}>
          <Link href={'/home'}>
            <LogoRectIcon color={'black'} css={[tw`h-full w-full`]} />
          </Link>
        </IconButton>
        <div css={[tw`flex gap-4 h-full items-center`]}>
          <Button css={[tw`!bg-transparent`, tw`!text-black`, tw`p-2`]}>
            <Link href={'/service/customer-support'}>고객센터</Link>
          </Button>
          <hr css={[tw`border-Gray-300 h-1/2 border`]} />
          <Button css={[tw`!bg-transparent`, tw`!text-black`, tw`p-2`]}>
            <Link href={'/service/help-center'}>이용문의</Link>
          </Button>
          <hr css={[tw`border-Gray-300 h-1/2 border`]} />
          <Button css={[tw`!bg-transparent`, tw`!text-black`, tw`p-2`]}>
            <Link href={'/service/terms'}>이용약관</Link>
          </Button>
          <hr css={[tw`border-Gray-300 h-1/2 border`]} />
          <Button css={[tw`!bg-transparent`, tw`!text-black`, tw`p-2`]}>
            <Link href={'/service/help-center'}>개인정보 취급방침</Link>
          </Button>
        </div>
      </section>
    </footer>
  );
};
