export const STAR_MAX = 5;

export const getMarked = (score: number): number => {
  return Math.floor(score);
};
export const getHalf = (score: number): number => {
  return score % 1 > 0 ? 1 : 0;
};
export const getUnMarked = (score: number): number => {
  return Math.floor(STAR_MAX - score);
};
