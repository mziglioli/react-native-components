import { cleanup } from '@testing-library/react-native';
import '@testing-library/jest-dom/extend-expect';

const teardown = (): void => {
  cleanup();
  jest.clearAllMocks();
};

afterEach(teardown);
