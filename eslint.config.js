import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
    globalIgnores(['dist', 'node_modules']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs.flat.recommended, prettier],
        plugins: {
            'react-refresh': reactRefresh,
            prettier: prettierPlugin,
            import: importPlugin,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: {
            react: { version: 'detect' },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: 'tsconfig.app.json',
                },
            },
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
        },
        rules: {
            // Prettier
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    jsxSingleQuote: true,
                    trailingComma: 'all',
                    arrowParens: 'avoid',
                    endOfLine: 'lf',
                },
            ],

            // General
            'prefer-const': 'off',
            'no-shadow': 'off',
            'no-param-reassign': 'off',
            'no-console': ['error', { allow: ['warn', 'error'] }],

            // TypeScript
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-unnecessary-type-constraint': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': 'allow-with-description' }],

            // React
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

            // React Hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Import
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'parent', 'internal', 'sibling', 'unknown', 'index', 'object', 'type'],
                    pathGroups: [
                        {
                            pattern: '{react,react-dom,react-router}',
                            group: 'builtin',
                            position: 'before',
                        },
                        {
                            pattern: '@{components,pages,styles,assets,data}/**',
                            group: 'internal',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['{react,react-dom,react-router}'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
        },
    },
]);
