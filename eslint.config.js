import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
	{
		ignores: ['.github', 'dist', 'coverage', 'node_modules', 'src/data'],
	},
	{
		files: ['src/**/*.ts'],
		languageOptions: {
			globals: globals.browser,
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			prettier: pluginPrettier,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...configPrettier.rules,
			'prettier/prettier': 'error',
		},
	},
];
