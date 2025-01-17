import { sum, powerWithClosure } from './math';

describe('sum', () => {
  test('1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('2 + "2" to equal 4', () => {
    expect(sum(2, '2')).toBe(4);
  });
  test('2 + "five" should return 2', () => {
    expect(sum(2, 'five')).toBe(2);
  });

  // TODO: test edgecases of `sum` function (and modify function)
});

describe('powerWithClosure', () => {
  test('2 in 2 exponent to equal 4', () => {
    const pow2 = powerWithClosure(2);
    expect(pow2(2)).toBe(4);
  });
  test('"3" in 2 exponent to equal 9', () => {
    const pow2 = powerWithClosure(3);
    expect(pow2('3')).toBe(9);
  });
  test('"four" in 2 should return 0', () => {
    const pow2 = powerWithClosure('four');
    expect(pow2('four')).toBe(0);
  });

  // TODO: test edgecases of `powerWithClosure` function (and modify function)
});
