export const returnTrue = () => true;
export const returnFalse = () => false;
export const returnUndefined = () => undefined;
export const returnNull = () => null;
export const return0 = () => 0;
export const return1 = () => 1;
export const returnEmptyString = () => '';

export type OFA<T extends readonly (string | number)[]> = {
  [key in T[number]]: key;
};

export function getLiteralsInObject<
  T extends readonly (string | number)[],
>(...values: T) {
  const out: any = {};
  values.forEach(v => (out[v] = v));
  return out as OFA<T>;
}

export function getLiterals<T extends readonly (string | number)[]>(
  ...array: T
) {
  const object = getLiteralsInObject(...array);
  const out = { object, array };
  return out;
}
