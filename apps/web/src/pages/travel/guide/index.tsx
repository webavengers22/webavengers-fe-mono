import tw from 'twin.macro';
import TravelGuidList from '@/components/commons/TravelGuidList';
import { IconButton } from 'ui';
import { Icon } from 'icons';

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
export default function travelGuidePage() {
  return (
    <section
      tw={'w-full bg-Gray-100 h-full flex justify-center flex-col items-center pt-[3.75rem]'}
    >
      <div css={[tw`grid p-3 pb-6 w-full grid-flow-col grid-cols-4`]}>
        <h3 css={[tw`text-dp3 justify-self-center col-start-2 col-span-2`]}>{'여행가이드'}</h3>
        <IconButton css={[tw`justify-self-end col-start-4 col-span-1`]}>
          <Icon name={'Filter'} solid />
          <span>필터</span>
        </IconButton>
      </div>
      <TravelGuidList data={imageCardData} />
    </section>
  );
}
