import tw from 'twin.macro';
import ImageList from '@/components/domains/home/ImageList';

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
      <ImageList title={'장소별'} data={imageCardData} options={[{ value: '1', label: '제주' }]} />
      <ImageList
        title={'동행별'}
        data={imageCardData}
        options={[{ value: '1', label: '반려동물과 함께' }]}
      />
      <ImageList
        title={'테마별'}
        data={imageCardData}
        options={[{ value: '1', label: '레저/스포츠' }]}
      />
    </section>
  );
}
