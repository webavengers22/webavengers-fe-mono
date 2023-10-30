import tw from 'twin.macro';

import { AvatarProps } from './types';
import { FC } from 'react';
import Link from 'next/link';

export const Avatar: FC<AvatarProps> = ({ imageSrc, nickname, link }) => {
  return (
    <figure css={[tw`flex items-center flex-1`]}>
      <Link href={link}>
        <img src={imageSrc} alt={nickname + "'s avatar"} css={[tw`w-10 h-10 rounded-full `]} />
      </Link>
    </figure>
  );
};
