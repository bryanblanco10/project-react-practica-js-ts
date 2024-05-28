module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	setting: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'standard-with-typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint/eslint-plugin'],
	rules: {},
};
