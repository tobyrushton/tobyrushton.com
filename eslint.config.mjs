import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    prettierRecommended,
    {
        rules: {
            'no-plusplus': 'off',
            'no-nested-ternary': 'off',
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': ['error'],
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': ['error'],
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                },
            ],
            'max-len': ['warn', { code: 100 }],
            '@typescript-eslint/triple-slash-reference': 'off',
        },
    },
    {
        files: ['**/*.astro'],
        rules: {
            'prettier/prettier': 'off',
        },
    }
)
