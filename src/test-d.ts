import { expectType } from 'tsd';

export function dtest<
  Expected,
  P extends readonly any[] = readonly any[],
  R = any,
>(func: (...args: P) => R, args: P[]) {
  args.forEach(arg => {
    const received = func(...arg);
    expectType<Expected>(received as unknown as Expected);
  });
}
