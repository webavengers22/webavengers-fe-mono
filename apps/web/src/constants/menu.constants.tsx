import 'twin.macro';

const MENU_LIST = [
  {
    id: '/home',
    href: '/home',
    title: '메인',
  },
  {
    id: '/service/introduce',
    href: '/service/introduce',
    title: '서비스 소개',
    menu: true,
  },
  {
    id: '/travel/guide',
    href: '/travel/guide',
    title: '여행 가이드',
    menu: true,
  },
  {
    id: '/travel/tip',
    href: '/travel/tip',
    title: '여행 꿀팁',
    menu: true,
  },
  {
    id: '/travel/create',
    href: '/travel/create',
    title: '여행 가이드 만들기',
    children: [
      {
        id: '/travel/create/schedule',
        href: '/travel/create/schedule',
        title: '일정관리',
      },
      {
        id: '/travel/create/check',
        href: '/travel/create/check',
        title: '체크리스트',
      },
      {
        id: '/travel/create/review',
        href: '/travel/create/review',
        title: '여행후기',
      },
    ],
  },
];

export default MENU_LIST;
