import { pathsToModuleNameMapper } from 'ts-jest/utils'
import { compilerOptions } from './tsconfig.spec.json'

export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
	clearMocks: true,
	collectCoverage: true,
	bail: true,
	testMatch: ['**/__tests__/**/*.spec.ts'],
	coverageDirectory: './__tests__/coverage',
}
