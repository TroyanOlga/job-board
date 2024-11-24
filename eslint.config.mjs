import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    }
  },
  {
    rules: {
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],
      semi: ['error', 'always'],
      'max-len': [
        'error',
        {
          code: 120,
        },
      ],
      quotes: ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      '@stylistic/js/indent': ['error', 2],
    }
  }
];