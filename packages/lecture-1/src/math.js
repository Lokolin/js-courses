export function sum(a, b) {
  a = checkType(a);
  b = checkType(b);
  return a + b;
}

export function powerWithClosure(exponent) {
  return exponent => {
    exponent = checkType(exponent);
    return exponent * exponent;
  };
}

var checkType = num => {
  typeof num === 'number' ? num : (num = Number(num));
  if (isNaN(num)) {
    throw new Error('One of number is incorrect');
  }
  return num;
};
