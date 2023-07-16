module.exports = {
  presets: [['next/babel']],

  plugins: [
    require.resolve('babel-plugin-macros'),
    [require.resolve('babel-plugin-styled-components'), { ssr: true, displayName: true }],
    [require.resolve('@babel/plugin-syntax-typescript'), { isTSX: true }],
  ],
};
