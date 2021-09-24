module.exports = {
  testURL: 'http://localhost:8080',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/src/utils"],

  preset: 'react-native',
  globals: {
    'ts-jest': {
      compiler: 'typescript',
    },
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  // transformIgnorePatterns: ['/node_modules/(?!@storybook)'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest.setup-after-env.ts',
  ],
  reporters: ['default'],
  coverageDirectory: '<rootDir>/results/coverage',
  coveragePathIgnorePatterns: ["/node_modules/", "dist/", "jest.config.js"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*.test.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}",
    "!<rootDir>/src/config/**/*",
    "!<rootDir>/src/types/**/*",
    "!<rootDir>/src/**/test/*",
    "!<rootDir>/src/**/index.ts"
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
