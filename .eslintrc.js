module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  ignorePatterns: ['__tests__/**', 'jest.config.js', 'babel.config.js', 'metro.config.js', 'prettierrc.js'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'max-len': ['warn', { code: 120 }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
    'react/require-default-props': 'off',
    'react/jsx-curly-brace-presence': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          { pattern: 'react*', group: 'builtin', position: 'before' },
          { pattern: '@src/**', group: 'external', position: 'after' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc' },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
};
