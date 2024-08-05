module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',

  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-compiler', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components':  [
      'off',
      { allowConstantExport: true },
    ],
    'react-compiler/react-compiler': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};


