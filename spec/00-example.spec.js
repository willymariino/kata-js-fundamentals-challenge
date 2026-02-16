
const { a, b, c: sumToN } = require('../src/00-example.js');


describe('example function', () => {
  test("returns the string 'Hi, Ed'", () => {
    expect(a()).toBe('Hi, Ed!');
  });

  test('increments 1 to 2', () => {
    expect(b(1)).toBe(2);
  });
});

describe('sumToN', () => {
  it('sums from 1 to 3', () => {
    expect(sumToN(3)).toBe(6)
  })
  it('sums from 1 to 5', () => {
    expect(sumToN(5)).toBe(15)
  })
  it('sums from 1 to 1', () => {
    expect(sumToN(1)).toBe(1)
  })
  it('sums from 1 to 0 (edge case)', () => {
    expect(sumToN(0)).toBe(0)
  })
})
