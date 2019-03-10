module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended'],
  coverageThreshold: {
    global: {
      statements: 99,
      lines: 90,
      functions: 90,
      branches: 50
    }
  },
  collectCoverageFrom: ['src/**/*.ts', '!**/*.test.ts'],
  globals: {
    'ts-jest': {
      diagnostics: {
        // match any file expect tests
        pathRegex: '^((?!\\.test\\.ts).)*$'
      }
    }
  }
};
