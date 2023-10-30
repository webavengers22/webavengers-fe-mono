import tw from 'twin.macro';
import * as React from 'react';
import { FC } from 'react';
import { ImageCard } from 'ui';

interface Props {
  data: any[];
}

const TravelGuidList: FC<Props> = ({ data }) => {
  return (
    <div css={[tw`w-full h-full grid grid-cols-4 gap-4`]}>
      {data.map((card) => (
        <ImageCard
          css={[tw`col-span-1`]}
          description={{
            date: card.date,
            title: card.title,
            likes: card.likes,
            useInfo: card.useInfo,
          }}
          imageSrc={card.imageSrc}
          tags={card.tags}
        />
      ))}
    </div>
  );
};

export default TravelGuidList;
