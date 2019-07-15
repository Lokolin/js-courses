export function sum(a, b) {
  a = transformToNum(a);
  b = transformToNum(b);
  return a + b;
}

export function powerWithClosure(exponent) {
  return power => {
    exponent = transformToNum(exponent);
    return exponent * exponent;
  };
}

const transformToNum = (value, defaultValue = 0) =>
  Number(value) || defaultValue;
