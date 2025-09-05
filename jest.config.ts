// Jest Imports
import nextJest from 'next/jest'
import { pathsToModuleNameMapper } from 'ts-jest'

// TypeScript Config Import
import { compilerOptions } from './tsconfig.json'

// Create base Jest config using Next.js defaults
const createJestConfig = nextJest({ dir: './' })

// Custom Jest configuration overrides
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Setup file for test environment
  testEnvironment: 'jest-environment-jsdom', // Use JSDOM for browser-like testing

  // Map TypeScript path aliases to Jest moduleNameMapper
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),

  // Exclude build output and dependencies from tests
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}

// Export the merged Jest configuration
export default createJestConfig(customJestConfig)
