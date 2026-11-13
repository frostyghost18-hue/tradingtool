import type { ActiveSymbol } from '../types';

export function isContinuousIndexSymbol(
  symbol: Pick<ActiveSymbol, 'submarket'>
): boolean {
  return symbol.submarket === 'random_index';
}
