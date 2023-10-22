import tw from 'twin.macro';

import { FC, HTMLAttributes, ReactNode, useRef } from 'react';

import { theme } from './theme';
import { Icon } from 'icons';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  date?: string;
  title?: string;
  imageSrc?: string;
  tags?: string[];
  alt?: string;
  useInfo?: string;
  likes?: string | number;
}

export const ImageCard: FC<CardProps> = ({
  date = '',
  title = '',
  imageSrc = '',
  children,
  tags = [],
  alt = '이미지',
  useInfo = '',
  likes = '',
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} css={[theme.container.base]} {...rest}>
      <section css={[theme.image.base]} style={{ backgroundImage: `url(${imageSrc})` }}>
        <img css={[theme.image.img]} alt={alt} src={imageSrc} />
        <ul css={[theme.tag.base]}>
          {tags.map((tag, index) => (
            <li key={index} css={[theme.tag.li]}>
              <span css={[theme.tag.span]}>{tag}</span>
            </li>
          ))}
        </ul>
      </section>

      <section css={[theme.content.base]}>
        <time css={[theme.content.time]}>{date}</time>
        <h3 css={[theme.content.title]}>{title}</h3>
        <p css={[theme.content.info]}>
          <span tw={'flex flex-row'}>
            <Icon name={'User'} solid /> {useInfo}
          </span>
          <span tw={'flex flex-row'}>
            <Icon name={'Heart'} solid /> {likes}
          </span>
        </p>
      </section>
    </div>
  );
};
