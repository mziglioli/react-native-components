export const STAR_MAX = 5;

export const getValue = (score: number): number => {
  if (score <= 0) {
    return 0;
  }
  if (score > STAR_MAX) {
    return STAR_MAX;
  }
  return score;
};
export const getMarked = (score: number): number => {
  return Math.floor(getValue(score));
};
export const getHalf = (score: number): number => {
  return getValue(score) % 1 > 0 ? 1 : 0;
};
export const getUnMarked = (score: number): number => {
  return Math.floor(STAR_MAX - getValue(score));
};
