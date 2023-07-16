module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "turbo",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off", // 추후 warn 변경 필요
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@next/next/no-html-link-for-pages": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/button-has-type": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  globals: {
    React: "writable",
  },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
};
