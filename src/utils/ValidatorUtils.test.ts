import { isValidEmail, isValidName, isValidPassword } from './ValidatorUtils';

describe('ValidatorUtils functions test', () => {
  describe('Testing validateName function', () => {
    it('Check is valid', () => {
      const isValid = isValidName('tes test');
      expect(isValid).toBe(true);
    });
    it('Check is NOT valid empty', () => {
      const isValid = isValidName('');
      expect(isValid).toBe(false);
    });
    it('Check is NOT valid white spaces', () => {
      const isValid = isValidName('        ');
      expect(isValid).toBe(false);
    });
    it('Check is NOT valid null', () => {
      const isValid = isValidName(undefined);
      expect(isValid).toBe(false);
    });
  });

  describe('Testing validateEmail function', () => {
    it('Check is valid', () => {
      const isValid = isValidEmail('tes@test.com');
      expect(isValid).toBe(true);
    });
    it('Check is NOT valid wrong', () => {
      const isValid = isValidEmail('tes test');
      expect(isValid).toBe(false);
    });
    it('Check is NOT valid empty', () => {
      const isValid = isValidEmail('');
      expect(isValid).toBe(false);
    });
    it('Check is NOT valid null', () => {
      const isValid = isValidEmail(undefined);
      expect(isValid).toBe(false);
    });
  });

  describe('Testing isValidPassword function', () => {
    it('Check is valid', () => {
      const isValid = isValidPassword('my_pass');
      expect(isValid).toBe(true);
    });
    it('Check is NOT valid size', () => {
      const isValid = isValidPassword('12');
      expect(isValid).toBe(false);
    });
    it('Check is NOT valid empty', () => {
      const isValid = isValidPassword('');
      expect(isValid).toBe(false);
    });
    it('Check is NOT valid null', () => {
      const isValid = isValidPassword(undefined);
      expect(isValid).toBe(false);
    });
  });
});
