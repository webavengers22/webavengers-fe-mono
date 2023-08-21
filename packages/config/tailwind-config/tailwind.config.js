/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '426px',
      lg: '769px',
      xl: '1025px',
    },
    boxShadow: {
      0: '4px 4px 40px 0px rgba(0, 0, 0, 0.16)',
    },

    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      Gray: {
        100: '#FAF6EC',
        200: '#F4EFE3',
        300: '#E9E3D7',
        400: '#C6C1B5',
        500: '#A8A297',
        600: '#7E796E',
        700: '#6A655A',
        750: '#666666',
        800: '#4A453C',
        900: '#28241B',
      },
      Primary: {
        50: '#FEEFE6', //brand color
        100: '#FFE3DA',
        200: '#FFC7B4',
        300: '#FF855B',
        400: '#FF6C34',
        500: '#FF4500',
        600: '#E33400',
        700: '#CC2200',
      },
      Secondary: {
        50: '#E0F2F1', //brand color
        100: '#82DFDB',
        200: '#80CBC4',
        300: '#4DB6AC',
        400: '#26A69A',
        500: '#009688',
        600: '#00796B',
        700: '#00695C',
      },

      white: '#ffffff',
      black: '#1A1712',
      success: '#109867',
      info: '#127CB3',
      warning: '#DC1B2C',
      error: '#DC1B2C',
    },
    extend: {
      height: {
        header: '3.375rem',
      },
      fontSize: {
        dp1: ['3rem', { lineHeight: '3.75rem', fontWeight: 700 }],
        dp2: ['2.5rem', { lineHeight: '3.375rem', fontWeight: 700 }],
        dp3: ['2rem', { lineHeight: '2.5rem', fontWeight: 700 }],
        hd1: ['2rem', { lineHeight: '2.5rem', fontWeight: 700 }],
        'hd2-b': ['1.5rem', { lineHeight: '2rem', fontWeight: 700 }],
        'hd2-r': ['1.5rem', { lineHeight: '2rem', fontWeight: 400 }],
        'tit-b': ['1.25rem', { lineHeight: '1.25rem', fontWeight: 700 }],
        'tit-r': ['1.25rem', { lineHeight: '1.25rem', fontWeight: 400 }],
        'bd1-b': ['1rem', { lineHeight: '1.5rem', fontWeight: 700 }],
        'bd1-r': ['1rem', { lineHeight: '1.5rem', fontWeight: 400 }],
        'bd2-b': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 700 }],
        'bd2-r': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 400 }],
        cap: ['0.75rem', { lineHeight: '1.03125rem', fontWeight: 400 }],
        btn: ['0.75rem', { lineHeight: '1.03125rem', fontWeight: 400 }],
      },
    },
  },
  plugins: [],
};
