import tw from 'twin.macro';
import TravelCategoryGuidList from '@/components/domains/home/TravelCategoryGuidList';
import { Icon } from 'icons';
import { IconButton, ImageCard } from 'ui';
interface ImageCardData {
  date: string;
  title: string;
  imageSrc: string;
  tags: string[];
  id: string; // Unique identifier
  likes: number; // Number of likes
}
const imageCardData: ImageCardData[] = [
  {
    date: '2023-09-01',
    title: 'Beautiful Beach',
    imageSrc: 'https://source.unsplash.com/random/?seoul',
    tags: ['Nature', 'Beach'],
    id: 'abc123', // Replace with actual ID
    likes: 1234, // Replace with actual like count
  },
  {
    date: '2023-08-25',
    title: 'Majestic Mountains',
    imageSrc: 'https://source.unsplash.com/random/?usa',
    tags: ['Nature', 'Mountains'],
    id: 'def456', // Replace with actual ID
    likes: 5678, // Replace with actual like count
  },
  {
    date: '2023-08-25',
    title: 'Majestic Mountains',
    imageSrc: 'https://source.unsplash.com/random/?busan',
    tags: ['Nature', 'Mountains'],
    id: 'def456', // Replace with actual ID
    likes: 5678, // Replace with actual like count
  },
  // Add more image card data entries here
];
export default function HomePage() {
  return (
    <section tw={'flex flex-col gap-20 bg-Gray-100'}>
      <div css={[tw`h-[40rem] items-center flex flex-row`]}>
        <div>
          <h1 tw={'text-dp1'}>가이드 님, </h1>
          <h1 tw={'text-dp1'}>여행을 계획하시나요?</h1>
        </div>
      </div>
      <TravelCategoryGuidList
        title={'장소별'}
        data={imageCardData}
        options={[{ value: '1', label: '제주' }]}
      />
      <TravelCategoryGuidList
        title={'동행별'}
        data={imageCardData}
        options={[{ value: '1', label: '반려동물과 함께' }]}
      />
      <TravelCategoryGuidList
        title={'테마별'}
        data={imageCardData}
        options={[{ value: '1', label: '레저/스포츠' }]}
      />
      <article tw={'flex w-full h-full flex-col gap-5'}>
        <section tw={'flex flex-row w-full justify-between items-center'}>
          <div>
            <h1 tw={'text-dp3 pt-3'}>여행 꿀팁</h1>
          </div>
          <IconButton>
            <span css={[tw`text-bd1-r pr-4`]}>전체 보기</span>
            <Icon size={24} name={'ArrowRight'} solid />
          </IconButton>
        </section>
        <section tw={'col-span-9 flex flex-row  gap-4 relative  '}>
          <IconButton
            css={[
              tw`absolute left-0 top-1/2 z-10 text-white `,
              tw`w-10 h-10 opacity-80 !bg-black rounded-tr-lg rounded-br-lg`,
            ]}
          >
            <Icon name={'CaretLeft'} color={'transparent'} size={24} solid />
          </IconButton>
          {imageCardData.map((card, index) => (
            <ImageCard
              css={[tw`flex-1`]}
              imageSrc={card.imageSrc}
              description={{ title: card.title }}
              isDescription={false}
              isTag={false}
              isTitle={true}
            />
          ))}
          <IconButton
            css={[
              tw`absolute right-0 top-1/2 text-white`,
              tw`w-10 h-10 opacity-80 !bg-black rounded-tl-lg rounded-bl-lg`,
            ]}
          >
            <Icon name={'CaretRight'} color={'transparent'} size={24} solid />
          </IconButton>
        </section>
      </article>
    </section>
  );
}
