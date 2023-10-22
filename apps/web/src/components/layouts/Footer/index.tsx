import tw from 'twin.macro';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, memo, useCallback, useState } from 'react';

import useMenuStore from '@/store/useMenuStore';
import { Icon, LogoRectIcon } from 'icons';
import { Button } from 'ui';
interface MenuItem {
  id: string;
  href: string;
  title: string;
  menu: boolean;
}

interface MenuProps {
  menuItems: MenuItem[];
  pathName: string;
}
export const Footer: FC = () => {
  // router

  return (
    <footer
      css={[
        tw`xl:max-w-[64rem] lg:max-w-[64rem] md:max-w-[48rem] sm:max-w-[48rem] pt-[7.5rem]`,
        tw`w-full flex items-center justify-center backdrop-blur-sm`,
        tw`text-black`,
      ]}
    >
      <div css={[tw`flex flex-row items-center gap-4`]}>
        <LogoRectIcon color={'black'} css={[tw`w-28 h-14`]} />
        <Button css={[tw`!bg-transparent`, tw`!text-black`, tw`p-0`]}>
          <Link href={'/service/customer-support'}>고객센터</Link>
        </Button>
        <Button css={[tw`!bg-transparent`, tw`!text-black`, tw`p-0`]}>
          <Link href={'/service/help-center'}>이용문의</Link>
        </Button>
        <Button circle color={'primary'} css={[tw`flex flex-row items-center`]}>
          <Link href={'/travel/create/schedule'}>
            <span>여행 가이드 추가</span>
          </Link>
        </Button>
      </div>
    </footer>
  );
};
