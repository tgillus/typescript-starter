import { add, throwError } from '../src/index';

describe('add function', () => {
  it('returns 3 when adding 1 and 2', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('returns 5 when adding 2 and 3', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('throwError function', () => {
  it('throws an error', () => {
    expect(() => {
      throwError();
    }).toThrowError('throwing an error');
  });
});
