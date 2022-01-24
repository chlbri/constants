import { ttest } from '@core_chlbri/test';
import * as TDD from './index';

describe('Return 0', () => {
  ttest({
    func: TDD.return0,
    tests: [
      {
        expected: 0,
      },
      {
        invite: 'again',
        expected: 0,
      },
    ],
  });
});

describe('Return 1', () => {
  ttest({
    func: TDD.return1,
    tests: [
      {
        expected: 1,
      },
      {
        invite: 'again',
        expected: 1,
      },
    ],
  });
});

describe('Return True', () => {
  ttest({
    func: TDD.returnTrue,
    tests: [
      {
        expected: true,
      },
      {
        invite: 'again',
        expected: true,
      },
    ],
  });
});

describe('Return False', () => {
  ttest({
    func: TDD.returnFalse,
    tests: [
      {
        expected: false,
      },
      {
        invite: 'again',
        expected: false,
      },
    ],
  });
});

describe('Return Undefined', () => {
  ttest({
    func: TDD.returnUndefined,
    tests: [
      {
        // expected: undefined,
      },
      {
        invite: 'again',
        // expected: undefined,
      },
    ],
  });
});

//TODO Create a class to handle empty Expected

describe('Return Null', () => {
  ttest({
    func: TDD.returnNull,
    tests: [
      {
        expected: null,
      },
      {
        invite: 'again',
        expected: null,
      },
    ],
  });
});

describe('Return Empty String', () => {
  ttest({
    func: TDD.returnEmptyString,
    tests: [
      {
        expected: '',
      },
      {
        invite: 'again',
        expected: '',
      },
    ],
  });
});

describe('getLiterals', () => {
  const func = TDD.getLiterals;
  test('empty args', () => {
    const expected = { object: {}, array: [] };
    const received = func();
    expect(received).toStrictEqual(expected);
  });
  test('Args [4, 6]', () => {
    const expected = { array: [4, 6], object: { 4: 4, 6: 6 } };
    const received = func(4, 6);
    expect(received).toStrictEqual(expected);
  });
  test("Args ['all', 'string']", () => {
    const expected = {
      array: ['all', 'string'],
      object: { all: 'all', string: 'string' },
    };
    const received = func('all', 'string');
    expect(received).toStrictEqual(expected);
  });
  test("Args ['mix', 10, 40, 'string']", () => {
    const expected = {
      array: ['mix', 10, 40, 'string'],
      object: { mix: 'mix', 10: 10, 40: 40, string: 'string' },
    };
    const received = func('mix', 10, 40, 'string');
    expect(received).toStrictEqual(expected);
  });
});

describe('getLiteralsInObject', () => {
  const func = TDD.getLiteralsInObject;
  test('empty args', () => {
    const expected = {};
    const received = func();
    expect(received).toStrictEqual(expected);
  });
  test('Args [4, 6]', () => {
    const expected = { 4: 4, 6: 6 };
    const received = func(4, 6);
    expect(received).toStrictEqual(expected);
  });
  test("Args ['all', 'string']", () => {
    const expected = { all: 'all', string: 'string' };
    const received = func('all', 'string');
    expect(received).toStrictEqual(expected);
  });
  test("Args ['mix', 10, 40, 'string']", () => {
    const expected = { mix: 'mix', 10: 10, 40: 40, string: 'string' };
    const received = func('mix', 10, 40, 'string');
    expect(received).toStrictEqual(expected);
  });
});
