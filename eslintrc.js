module.exports = {
  parser: '@typescript-eslint/parser',
  root: false,
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'max-len': [2, 120, 4, { ignoreUrls: true }],
    'linebreak-style': 0,
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'warn',
    'no-mixed-spaces-and-tabs': 'off',
    'no-tabs': 'off',
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['warn']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
