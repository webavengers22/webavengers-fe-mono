import tw from 'twin.macro';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, memo, useCallback, useState } from 'react';

import useMenuStore from '@/store/useMenuStore';
import { Icon, LogoRectIcon } from 'icons';
import { Button, IconButton, Avatar } from 'ui';
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

  const userInfo = {
    user: 1,
    avatar: 'https://source.unsplash.com/random/?user',
    nickname: 'user',
  };
  // menu list
  const menuItems = useMenuStore((state) => state.oneDepthMenu).filter((item) => item.menu);

  return (
    <header
      css={[
        tw`w-full fixed h-header z-10 flex items-center flex-row justify-center`,
        tw`text-black backdrop-blur-sm`,
      ]}
    >
      <div
        css={[
          tw`w-full flex xl:max-w-[64rem] lg:max-w-[64rem] md:max-w-[48rem] sm:max-w-[48rem]`,
          tw` justify-between`,
        ]}
      >
        {/*메뉴*/}
        <nav css={[tw`h-full`]}>
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
          {userInfo.user === 0 ? (
            <>
              <Button css={[tw`!bg-transparent`, tw`!text-black`, tw`p-0`]}>
                <Link href={'/login'}>로그인</Link>
              </Button>
              <Button css={[tw`!bg-transparent`, tw`!text-black`, tw`p-0`]}>
                <Link href={'/register'}>회원가입</Link>
              </Button>
            </>
          ) : (
            <>
              <IconButton css={[tw`!text-black`]}>
                <Icon name={'Alarm'} solid />
              </IconButton>
              <IconButton>
                <Avatar
                  nickname={userInfo.nickname}
                  imageSrc={userInfo.avatar}
                  link={'/user/mypage'}
                />
              </IconButton>
            </>
          )}

          <Button circle color={'primary'} css={[tw`flex flex-row items-center text-white`]}>
            <Icon name={'Edit'} solid css={[tw`text-white`]} />
            <Link href={'/travel/create/schedule'}>
              <span>여행 가이드 추가</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
