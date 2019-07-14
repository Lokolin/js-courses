export function sum(a, b) {
  a = transformToNum(a);
  b = transformToNum(b);
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return a + b;
}

export function powerWithClosure(exponent) {
  return power => {
    exponent = transformToNum(exponent);
    if (isNaN(exponent)) {
      return NaN;
    }
    return exponent * exponent;
  };
}

var transformToNum = num => {
  return typeof num === 'number' ? num : (num = Number(num));
};
