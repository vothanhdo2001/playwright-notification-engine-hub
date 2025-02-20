import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginChaiFriendly from 'eslint-plugin-chai-friendly';
import pluginPlaywright from 'eslint-plugin-playwright';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  pluginChaiFriendly.configs.recommendedFlat,

  {
    files: ['tests/**/*.ts', 'e2e/**/*.ts'],
    plugins: {
      playwright: pluginPlaywright,
    },
    rules: {
      'playwright/no-skipped-test': 'error',
      'playwright/no-focused-test': 'error',
      'playwright/no-wait-for-timeout': 'warn',
      'playwright/no-page-pause': 'warn',
    },
  },

  {
    rules: {
      'chai-friendly/no-unused-expressions': 'error',
      'unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
