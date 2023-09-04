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
export const Header: FC = () => {
  // router
  const router = useRouter();

  // menu list
  const menuItems = useMenuStore((state) => state.oneDepthMenu).filter((item) => item.menu);

  return (
    <header
      css={[
        tw`xl:max-w-[120rem] lg:max-w-[64rem] md:max-w-[48rem] sm:max-w-[48rem]`,
        tw`w-full fixed flex items-center justify-between backdrop-blur-sm`,
        tw`h-header`,
        tw`text-black`,
      ]}
    >
      {/*메뉴*/}
      <nav css={[tw`h-full `]}>
        <ul tw="flex flex-row" style={{ overflowY: 'overlay' as any }}>
          {menuItems?.map(({ id, href, title }) => {
            const isActive = router.asPath.startsWith(id);
            return (
              <li key={id} css={[tw`pr-8`]}>
                <Link
                  href={href}
                  css={[
                    tw`relative`,
                    tw`flex items-center`,
                    tw`select-none p-[0.625rem] `,
                    tw`text-bd1-r`,
                  ]}
                >
                  <span
                    css={[
                      isActive &&
                        tw`after:(content-[''] absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 )`,
                    ]}
                  >
                    {title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <span css={[tw`w-[6rem]`]}>
        <LogoRectIcon color={'black'} css={[tw`w-full h-full`]} />
      </span>
      <div css={[tw`flex flex-row items-center gap-4`]}>
        <Button css={[tw`!bg-transparent`, tw`!text-black`, tw`p-0`]}>로그인</Button>
        <Button css={[tw`!bg-transparent`, tw`!text-black`, tw`p-0`]}>회원가입</Button>
        <Button circle color={'primary'} css={[tw`flex flex-row items-center`]}>
          <Icon name={'Edit'} solid />
          <Link href={'/travel/create/schedule'}>
            <span>여행 가이드 추가</span>
          </Link>
        </Button>
      </div>
    </header>
  );
};
