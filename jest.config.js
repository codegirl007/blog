/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	verbose: true,
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["./src/setupTests.ts"],
};
