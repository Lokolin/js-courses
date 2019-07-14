import { transformData } from './transform';

/* Take start shape: */
export const startShape = [
  {
    key: 'name',
    value: 'jared',
  },

  {
    key: 'age',
    value: 'old',
  },

  {
    key: 'food',
    value: 'bacon',
  },

  {
    key: 'kids',
    value: 'gazillions',
  },

  {
    key: 'garbageA',
    value: 'valueA',
  },

  {
    key: 'garbageB',
    value: 'valueB',
  },

  {
    key: 'garbageC',
    value: 'valueC',
  },
];

export const startShape2 = [
  {
    key: 'name',
    value: 'jared',
  },

  {
    key: null,
    value: 'old',
  },

  {
    value: 'bacon',
  },

  {
    key: 'kids',
    value: 'gazillions',
  },

  {
    key: 'garbageA',
    value: 'valueA',
  },

  {
    key: 'garbageB',
    value: 'valueB',
  },

  {
    key: 'garbageC',
    value: 'valueC',
  },
];

/* Turn into this shape while removing "garbage" entries
{
  age: "old",
  food: "bacon",
  kids: "gazillions",
  name: "jared"
}

*/

describe('transformData', () => {
  test('shold remove all garbage values', () => {
    expect(transformData(startShape)).toEqual({
      age: 'old',
      food: 'bacon',
      kids: 'gazillions',
      name: 'jared',
    });
  });

  test('should return null if it is not an array', () => {
    expect(transformData(2)).toBe(null);
  });

  test('shold remove all garbage values and elements with null or undefined', () => {
    expect(transformData(startShape2)).toEqual({
      kids: 'gazillions',
      name: 'jared',
    });
  });

  // TODO: test edgecases of `sum` function (and modify function)
});
