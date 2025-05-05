import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactHooksExtra from 'eslint-plugin-react-hooks-extra';
import reactNamingConvention from 'eslint-plugin-react-naming-convention';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactWebApi from 'eslint-plugin-react-web-api';
import reactX from 'eslint-plugin-react-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginRouter from '@tanstack/eslint-plugin-router';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default tseslint.config(
  {
    ignores: [
      '.husky',
      '.vscode',
      'coverage',
      'dist',
      '.prettierrc.cjs',
      'eslint.config.ts',
      'lint-staged.config.mjs',
      'vite.config.ts',
      'routeTree.gen.ts',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...pluginRouter.configs['flat/recommended'],
      ...pluginQuery.configs['flat/recommended'],
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,mts,cts,tsx,mtsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-x': reactX,
      'react-dom': reactDom,
      'react-web-api': reactWebApi,
      'react-hooks-extra': reactHooksExtra,
      'react-naming-convention': reactNamingConvention,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...importPlugin.configs.recommended.rules,
      ...reactX.configs['recommended-typescript'].rules,
      ...reactDom.configs.recommended.rules,
      ...reactWebApi.configs.recommended.rules,
      ...reactHooksExtra.configs.recommended.rules,
      ...reactNamingConvention.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
    },
  },
);
