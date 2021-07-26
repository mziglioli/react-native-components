module.exports = {
  testURL: 'http://localhost:8080',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/index.{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  preset: 'react-native',
  globals: {
    'ts-jest': {
      compiler: 'typescript',
    },
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  coverageDirectory: '<rootDir>/results/coverage',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest.setup-after-env.ts',
  ],
  transformIgnorePatterns: [],
  reporters: ['default'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
