import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: local('Pretendard Black'), url('/assets/fonts/woff2/Pretendard-Black.woff2') format('woff2'), url('/assets/fonts/woff/Pretendard-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: local('Pretendard ExtraBold'), url('/assets/fonts/woff2/Pretendard-ExtraBold.woff2') format('woff2'), url('/assets/fonts/woff/Pretendard-ExtraBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'), url('/assets/fonts/woff2/Pretendard-Bold.woff2') format('woff2'), url('/assets/fonts/woff/Pretendard-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'), url('/assets/fonts/woff2/Pretendard-SemiBold.woff2') format('woff2'), url('/assets/fonts/woff/Pretendard-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'), url('/assets/fonts/woff2/Pretendard-Medium.woff2') format('woff2'), url('/assets/fonts/woff/Pretendard-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'), url('/assets/fonts/woff2/Pretendard-Regular.woff2') format('woff2'), url('/assets/fonts/woff/Pretendard-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: local('Pretendard Light'), url('/assets/fonts/woff2/Pretendard-Light.woff2') format('woff2'), url('/assets/fonts/woff/Pretendard-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: local('Pretendard ExtraLight'), url('/assets/fonts/woff2/Pretendard-ExtraLight.woff2') format('woff2'), url('/assets/fonts/woff/Pretendard-ExtraLight.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: local('Pretendard Thin'), url('/assets/fonts/woff2/Pretendard-Thin.woff2') format('woff2'), url('/assets/fonts/woff/Pretendard-Thin.woff') format('woff');
  }
  
  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    ${tw`bg-Gray-200`} 
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
