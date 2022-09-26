module.exports = {
	env: {
		browser: true,
		es2021: true,
		commonjs: true,
	},
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
};
