export type MartingaleMode = 'classic' | 'dynamic' | 'super-hybrid';

export interface MartingaleProgress {
  nextStake: number | null;
}

export const initialMartingaleProgress: MartingaleProgress = {
  nextStake: null,
};

export function getNextMartingaleStake(
  baseStake: number,
  multiplier: number,
  settledProfit: number,
  progress: MartingaleProgress
): { stake: number; progress: MartingaleProgress } {
  if (settledProfit > 0) {
    return {
      stake: baseStake,
      progress: { ...initialMartingaleProgress },
    };
  }

  const stakeToMultiply = progress.nextStake ?? baseStake;
  const nextStake = settledProfit < 0
    ? Math.round(stakeToMultiply * multiplier * 100) / 100
    : stakeToMultiply;

  return {
    stake: nextStake,
    progress: { nextStake },
  };
}
