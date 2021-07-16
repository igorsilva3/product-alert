export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	clearMocks: true,
	collectCoverage: true,
	bail: true,
	testMatch: ['**/__tests__/**/*.spec.ts'],
	coverageDirectory: './__tests__/coverage',
}
