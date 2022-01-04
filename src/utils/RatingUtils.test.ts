import { getValue, getUnMarked } from './RatingUtils';

describe('RatingUtils functions test', () => {
  describe('Testing getValue function', () => {
    it('Check is valid', () => {
      expect(getValue(0)).toBe(0);
      expect(getValue(10)).toBe(5);
      expect(getValue(990)).toBe(5);
      expect(getValue(1)).toBe(1);
    });
    it('Check is invalid', () => {
      expect(getValue(-0)).toBe(0);
      expect(getValue(-10)).toBe(0);
    });
  });
  describe('Testing getUnMarked function', () => {
    it('Check is valid', () => {
      expect(getUnMarked(0)).toBe(5);
      expect(getUnMarked(1)).toBe(4);
      expect(getUnMarked(2)).toBe(3);
      expect(getUnMarked(3)).toBe(2);
      expect(getUnMarked(4)).toBe(1);
      expect(getUnMarked(5)).toBe(0);
    });
    it('Check is invalid', () => {
      expect(getUnMarked(-10)).toBe(5);
      expect(getUnMarked(10)).toBe(0);
    });
  });
});
