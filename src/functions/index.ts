import { TupleOf } from '../types';

export const returnTrue = () => true;
export const returnFalse = () => false;
export const returnUndefined = () => undefined;
export const returnNull = () => null;
export const return0 = () => 0;
export const return1 = () => 1;
export const returnEmptyString = () => '';
export function returnTrueArray<T extends number>(length: T) {
  return Array.from({ length }).fill(true) as TupleOf<true, T>;
}

export type OFA<T extends readonly (string | number)[]> = {
  [key in T[number]]: key;
};

export type LFA<T extends readonly (string | number)[]> = {
  array: T;
  object: {
    [key in T[number]]: key;
  };
};

export function getLiteralsInObject<
  T extends readonly (string | number)[],
>(...values: T): OFA<T> {
  const out: any = {};
  values.forEach(v => (out[v] = v));
  return out;
}

export function getLiterals<T extends readonly (string | number)[]>(
  ...array: T
): LFA<T> {
  const object = getLiteralsInObject(...array);
  const out = { object, array };
  return out;
}

export function setArrayLitterals<T extends readonly (string | number)[]>(
  ...array: T
): T {
  const _set = new Set(array);
  return [..._set] as unknown as T;
}
