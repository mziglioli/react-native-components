import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidSecret,
  isValidNumber,
} from './ValidatorUtils';

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

  describe('Testing isValidSecret function', () => {
    it('Check is valid', () => {
      const isValid = isValidSecret('1234');
      expect(isValid).toBe(true);
    });
    it('Check is NOT valid size', () => {
      expect(isValidSecret('1')).toBe(false);
      expect(isValidSecret('12')).toBe(false);
      expect(isValidSecret('123')).toBe(false);
      expect(isValidSecret('12345')).toBe(false);
      expect(isValidSecret('a123')).toBe(false);
    });
    it('Check is NOT valid empty', () => {
      const isValid = isValidSecret('');
      expect(isValid).toBe(false);
    });
    it('Check is NOT valid null', () => {
      const isValid = isValidSecret(undefined);
      expect(isValid).toBe(false);
    });
  });
  describe('Testing isValidNumber function', () => {
    it('Check is valid', () => {
      expect(isValidNumber('1')).toBe(true);
      expect(isValidNumber('9999999999999')).toBe(true);
      expect(isValidNumber('1234')).toBe(true);
    });
    it('Check is NOT valid', () => {
      expect(isValidNumber('')).toBe(false);
      expect(isValidNumber(undefined)).toBe(false);
      expect(isValidNumber('abc')).toBe(false);
      expect(isValidNumber('a12a')).toBe(false);
      expect(isValidNumber('11a')).toBe(false);
      expect(isValidNumber('a11')).toBe(false);
      expect(isValidNumber('1.00')).toBe(false);
    });
  });
});
