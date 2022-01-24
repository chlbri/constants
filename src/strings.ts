import { getLiterals, setArrayLitterals } from './functions';

export const emptyString = '' as const;
export const idle = 'idle' as const;
export const checking = 'checking' as const;

export const DIGITS = getLiterals(
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
);

export const VOWELS = getLiterals('a', 'e', 'i', 'o', 'u', 'y');

export const CONSONANTS = getLiterals(
  'b',
  'c',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'p',
  'q',
  'r',
  's',
  't',
  'v',
  'w',
  'x',
  'z',
);


export const LETTERS = getLiterals(
  ...setArrayLitterals(...VOWELS.array, ...CONSONANTS.array),
);
LETTERS.object.h;
