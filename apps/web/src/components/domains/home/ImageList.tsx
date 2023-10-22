import { FC, useState } from 'react';
import tw from 'twin.macro';
import { Icon } from 'icons';
import { Select, IconButton, ImageCard } from 'ui';

interface Props {
  data: any[];
  title: string;
  options: { value: string; label: string }[];
}
const ImageList: FC<Props> = ({ data, title, options }) => {
  const [type, setType] = useState('1');
  return (
    <>
      <article tw={'grid grid-cols-12 gap-5'}>
        <section tw={'col-span-3 flex flex-col justify-between items-start'}>
          <div>
            <p tw={'text-Primary-500 text-tit-r pb-6'}>{title}</p>
            <Select
              selected={type}
              onSelected={(selected) => setType(selected)}
              options={options}
            />
            <h1 tw={'text-dp3 pt-3'}>인기 여행 가이드</h1>
          </div>
          <IconButton>
            <span css={[tw`text-bd1-r pr-4`]}>전체 보기</span>
            <Icon size={24} name={'ArrowRight'} solid />
          </IconButton>
        </section>
        <section tw={'col-span-9 flex flex-row  gap-4'}>
          {data.map((card, index) => (
            <ImageCard
              css={[tw`flex-1`]}
              date={card.date}
              title={card.title}
              imageSrc={card.imageSrc}
              tags={card.tags}
              likes={card.likes}
              useInfo={card.id}
            />
          ))}
        </section>
      </article>
    </>
  );
};

export default ImageList;
